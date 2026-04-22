Superstore ETL & Power BI Analytics Pipeline
 
⸻
 
Overview
This project demonstrates an end-to-end data engineering and analytics pipeline built on the Kaggle Superstore dataset.
The goal of this project is to simulate a real-world BI workflow:
Raw Data → ETL Processing → Structured Storage → Power BI Modeling → Business Insights
 
⸻
 
Tech Stack
	•	Google Apps Script (ETL automation)
	•	Google Sheets / Google Drive (data processing & storage)
	•	CSV (intermediate data layer)
	•	Power BI (data modeling & visualization)
	•	DAX (business metrics)
 
⸻
 
Data Pipeline Architecture
Kaggle Dataset
      ↓
Google Drive (Raw Data Storage)
      ↓
Google Apps Script ETL
  - Data cleaning
  - Validation
  - Transformation (Year + Region grouping)
  - Logging
      ↓
Google Drive (Processed CSV files)
      ↓
Power BI (Transform & Load)
      ↓
Interactive Dashboard
 
⸻
 
ETL Process Description
The ETL pipeline was implemented using Google Apps Script and includes:
	•	Extraction of the latest dataset from Google Drive
	•	Data cleaning (handling missing values and invalid dates)
	•	Transformation logic:
	◦	Grouping data by Year and Region
	◦	Standardizing date formats
	•	Automated CSV generation per group
	•	File versioning (overwrite old files when needed)
	•	Logging system to track:
	◦	Processed rows
	◦	Skipped rows
	◦	Created/updated files
 
⸻
 
Power BI Dashboard
The final dashboard includes multiple analytical views:
	•	Sales performance overview
	•	Profitability analysis
	•	Customer segment analysis
	•	Regional performance breakdown
	•	Category-level insights
 
⸻
 
Key Insights
	•	Sales performance varies significantly by region, with certain regions outperforming others in profitability
	•	Consumer segment drives the majority of revenue but has lower average margin
	•	Some product categories generate high revenue but low profit efficiency
	•	Seasonal trends can be observed in sales distribution over time
 
⸻
 
Business Value
This project demonstrates:
	•	Automated data pipeline design (ETL thinking)
	•	Scalable data transformation logic
	•	BI-ready dataset preparation
	•	End-to-end analytics workflow
	•	Practical application of data engineering concepts
 
⸻
 
📁 Project Structure
superstore-etl-powerbi-pipeline/
│
├── etl/                      # Google Apps Script ETL
├── data/                     # Raw & processed data
├── powerbi/                 # Power BI dashboard file
├── docs/                    # Screenshots & architecture
├── README.md
 
⸻
 
Dataset
	•	Source: Kaggle Superstore Dataset
	•	Link: https://www.kaggle.com/datasets/vivek468/superstore-dataset-final
 
