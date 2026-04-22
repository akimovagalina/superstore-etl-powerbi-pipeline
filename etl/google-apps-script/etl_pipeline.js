function setStatus(message) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Start");
  sheet.getRange("A1").setValue(message);
  SpreadsheetApp.flush();
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("ETL")
    .addItem("Run Pipeline", "runETLPipeline")
    .addToUi();
}

function getLatestFileFromFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  if (!folders.hasNext()) throw "Folder not found";

  var folder = folders.next();
  var files = folder.getFiles();

  var latestFile = null;
  var latestDate = 0;

  while (files.hasNext()) {
    var file = files.next();
    var created = file.getDateCreated().getTime();

    if (created > latestDate) {
      latestDate = created;
      latestFile = file;
    }
  }

  if (!latestFile) throw "No files found";

  return SpreadsheetApp.openById(latestFile.getId());
}

function runETLPipeline() {
  var startTime = new Date();
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();


  setStatus("Starting...");
  var sourceSS = getLatestFileFromFolder("Raw_Data");
  setStatus("Loading data...");
  var sheet = sourceSS.getSheets()[0];
  var data = sheet.getDataRange().getValues();
  setStatus("Processing data...");

  var headers = data[0];
  var grouped = {};

  var processedRows = 0;
  var skippedRows = 0;

  // =====================
  // 1. CLEAN + TRANSFORM
  // =====================
  for (var i = 1; i < data.length; i++) {
    var row = data[i];


    var dateValue = row[2];
    var regionRaw = row[12];

    if (!dateValue || !regionRaw) {
      skippedRows++;
      continue;
    }

    var dateObj = dateValue instanceof Date 
      ? dateValue 
      : new Date(dateValue);

    if (isNaN(dateObj)) {
      skippedRows++;
      continue;
    }

    var region = regionRaw.toString().trim();
    var year = dateObj.getFullYear();
    var key = year + '_' + region;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(row);

    processedRows++;
  }

  // =====================
  // 2. LOAD (в файлы) and LOG
  // =====================
  var folderName = "Split_Reports";
  var folders = DriveApp.getFoldersByName(folderName);
  var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder(folderName);
  var logSheet = ss.getSheetByName("Log") || ss.insertSheet("Log");

  var filesCreated = 0;
  var filesUpdated = 0;

  for (var key in grouped) {
    var safeName = key.substring(0, 99).replace(/[\\/?*[\]]/g, "");

    //  create CSV-content
    var csvContent = [];
  
  csvContent.push(headers.join(","));

grouped[key].forEach(function(row) {

  var formattedRow = row.map(function(cell) {
    
    
    if (cell instanceof Date) {
      return Utilities.formatDate(cell, Session.getScriptTimeZone(), "yyyy-MM-dd");
    }

    return cell;
  });

  csvContent.push(formattedRow.join(","));
});

  
  var fileName = safeName + ".csv";
  var blob = Utilities.newBlob(csvContent.join("\n"), "text/csv", fileName);

  
  var existingFiles = folder.getFilesByName(fileName);
  if (existingFiles.hasNext()) {
    var oldFile = existingFiles.next();
    oldFile.setTrashed(true);
    filesUpdated++;
  } else {
    filesCreated++;
  }

  
  folder.createFile(blob);
      
  }

  // =====================
  // 3. LOG
  // =====================
  var logSheet = ss.getSheetByName("Log") || ss.insertSheet("Log");

  logSheet.appendRow([
    new Date(),
    processedRows,
    skippedRows,
    filesCreated,
    filesUpdated
  ]);

  var endTime = new Date();
  var duration = (endTime - startTime) / 1000;

  Logger.log("Processed: " + processedRows);
  Logger.log("Skipped: " + skippedRows);
  Logger.log("Created: " + filesCreated);
  Logger.log("Updated: " + filesUpdated);
  Logger.log("Duration (sec): " + duration);
  setStatus("Completed!");
}