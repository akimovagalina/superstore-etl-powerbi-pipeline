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

⸻

Key Insights
 • Sales performance varies significantly by region, with certain regions outperforming others in profitability
 
 • Consumer segment drives the majority of revenue but has lower average margin
 
 • Some product categories generate high revenue but low profit efficiency
 
 • Seasonal trends can be observed in sales distribution over time
 


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



