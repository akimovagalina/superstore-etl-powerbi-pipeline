Superstore ETL & Power BI Analytics Pipeline


 
⸻


 
Overview

Companies need to understand where profit is coming from and which areas require optimization.
This project simulates a real BI workflow to identify profitability drivers and support decision-making. This project demonstrates an end-to-end data engineering and analytics pipeline built on the Kaggle Superstore dataset.
The goal of this project is to simulate a real-world BI workflow:
Raw Data → ETL Processing → Structured Storage → Power BI Modeling → Business Insights

⸻

 
Dataset

 • Source: Kaggle Superstore Dataset
 
 • Link: https://www.kaggle.com/datasets/vivek468/superstore-dataset-final
 
⸻

Tech Stack
 • Google Apps Script (ETL automation)
 
 • Google Sheets / Google Drive (data processing & storage)
 
 • CSV (intermediate data layer)
 
 • Power BI (data modeling & visualization)
 
 • DAX (business metrics)

 
⸻

 
Data Pipeline Architecture

1 Kaggle Dataset

2 Google Drive (Raw Data Storage)

3 Google Apps Script ETL

  - Data cleaning
  - Validation
  - Transformation (Year + Region grouping)
  - Logging

4 Google Drive (Processed CSV files)

5 Power BI (Transform & Load)  

6 Interactive Dashboard

⸻

Key Features

- End-to-end ETL pipeline (Google Apps Script)
- Data validation and transformation
- Automated insight generation using DAX measures
- Business-ready dashboard with actionable recommendations
⸻


ETL Process Description
The ETL pipeline was implemented using Google Apps Script and includes:

 • Extraction of the latest dataset from Google Drive

 • Data cleaning (handling missing values and invalid dates)

 • Transformation logic:

 ◦ Grouping data by Year and Region

 ◦ Standardizing date formats

 • Automated CSV generation per group

 • File versioning (overwrite old files when needed)

 • Logging system to track:

 ◦ Processed rows

 ◦ Skipped rows

 ◦ Created/updated files



⸻


Power BI Dashboard

The dashboard is designed to answer the key question:
"Where is profit coming from?"

It provides:
- KPI monitoring (Sales, Profit, Margin)
- Regional and segment analysis
- Category-level performance
- Automatically generated insights using DAX
 


⸻


Dashboard Preview

Watch demo: docs/dashboard_video/power_bi_dashboard_demo.gif

Screenshots:
- Overview (docs/dashboard_screenshots/1 Overview.png
- Segment Analysis (docs/dashboard_screenshots/2 Segment Analysis.png
- Details (docs/dashboard_screenshots/3 Details.png


⸻

Key Insights

 • Sales are showing steady growth, while profits are growing more slowly. These figures are uneven across segments.
 
 • In the Consumer segment, which accounts for 50 percent of profits, profits and sales are growing, but could have grown even further if the average order value had not fallen. A detailed analysis revealed that the East is the strongest region, while Central is the weakest.
 
 • In the Corporate segment, which accounts for 30 percent of profits, sales are growing, but profits are falling. A detailed analysis revealed that East is again the strongest region, while Central is again the weakest.
 
 • In the Home Office segment, the Furniture category is not profitable at all, but thanks to the Technology category accounting for 71 percent of profits, profits and sales are again growing. Here, the West is the strongest region, while the South is the weakest.

⸻


Business Value
This project demonstrates:
 • Automated data pipeline design (ETL thinking)
 
 • BI-ready dataset preparation
 
 • End-to-end analytics workflow
 
 • This solution enables better decision-making by highlighting profitability drivers, segment performance, and regional trends.

⸻


Project Structure
superstore-etl-powerbi-pipeline/

│
├── etl/                      # Google Apps Script ETL

├── data/                     # Raw & processed data

├── powerbi/                 # Power BI dashboard file

├── docs/                    # Screenshots & architecture

├── README.md



