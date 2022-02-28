# Data Analytics Final Project Team 2

## COVID-19 in Mexico City (Topic Selected)
Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. 

The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 meter apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.

The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.

COVID - 19 is affecting globally, not only for healthy reasons, economic, social and political impacts are being shown all around the world. One of these impacts is given by the strategy taken buy each country according to the capabilities on getting vaccine contracts and the availability to have resources to pay for them. In second place, the quantity of beds in current Hospital infrastructure and the technology to treat the disease.

**Particularly for Mexico & Mexico City:**
- Mexico's Government decided to control vaccine contracts not given to any private the access to the sources and execute the vaccination logistic plan.
- Mexico City has both type of hospitals (Public and Private), both with good presence, in other words, we have in the city a large quantity of hospitals that tries to cover/offer services not only to Mexico City residents, but current capabilities can also accept even foreigners from other states.
    1. In the Private Section, most Mexican hospitals are excellent, and they are staffed by highly trained and English-speaking doctors. Despite this, not all nursing and care staff speak English. 
    2. In the Public Section - Mexico City has achieved universal health coverage and its public healthcare is acceptable for most Mexican residents.

## Overview of the project
Mexican health professionals complain the government moved too slowly to shut down business and stop the spread of the coronavirus. Doctors say hospitals around Mexico City reached capacity rapidly. Additionally, it is a "public belief" that is you need to be treated in a public institution; the expected result is worse than if you are treated on a private Hospital. Trying to eliminate this "Public belief" and using data to try to expect the outcome from those patients which arrive to a public hospital to be treated with Covi-19 disease we will perform exploration, data analysis and hypothesis verification taking in consideration each patient data particularity.

Scope of the project may be increase/expand according to the results we get. Initially:
- We will try to find out any pattern or trends that assume an insight into how the Covid pandemic played out. 
-  Also, we are evaluating ways to predict a patients outcome based on the vital signs of him and his background.

## Team's Member and Offical Contact Informacion.

- Alexis Ángeles **(AA)** : axis.angeles@gmail.com
- David Escudero **(DE)**: davidescuderog_@hotmail.com
- Carlos Hernández **(CH)**: charly97hernandez@gmail.com
- Rebeca Osorio **(RO)**: rebeca.subs@gmail.com
- Juan Carlos Reyes **(JC)**: juancarlosreyessoto@gmail.com

### Team Communication:
* Slack:  C0325T546JH

### Team Member Responsabilities - Work As A Team:
* Square: **(CH,JC)**  The team member in the square role will be responsible for the repository.
* Triangle: **(RO,AA)** The member in the triangle role will create a mockup of a machine learning model. This can even be a diagram that explains how it will work concurrently with the rest of the project steps.
* Circle: **(DE,CH)** The member in the circle role will create a mockup of a database with a set of sample data, or even fabricated data. This will ensure the database will work seamlessly with the rest of the project.
* X: **(AA,DE,CH,RO,JC)** The member in the X role will decide which technologies will be used for each step of the project.

## Resources (Draft ... To be updated upon usage)
- Software: Git version 2.33.0.windows.2, Visual Studio 1.62.2, Jupiter Notebook 6.4.6, Python 3.7.10 (default, Feb 26 2021, 13:06:18) [MSC v.1916 64 bit (AMD64)]Anaconda.
- Details on : [Tecnologies_Used_T2.md](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/10a8587a557befa9d8261e704503c469586ad280/Technologies_Used_T2.md)

# First Segment Project Deliverable

## Machine Learning Model
In order to understand the overall relationship between health and vaccination data, we are looking forward to develop an unsupervised machine learning model to identify different clusters of patients so that we can analyze the death probability and illness seriousness among the different groups. 

The modeling process will consist of:
- Initial data processing (cleaning, encoding, scaling);
- Followed by a Principal Component Analysis to decrease features;
- Elbow curve chart to define optimal clusters;
- K-means model selected;
- Class prediction and visualization.

1. Data is taken provisionally from the DB:

![DB_conn_Model](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/f63bf5ce4b3f0845d9a4de7401409b115fa49d6f/Image_%20Resources/DB_conn_Model.png)

2. Outputs label(s) for input data is the following:
- Data premises:
    * Processed dataset: 5.3K data points and 81 features
    * Six clusters selected (Elbow Curve)
    * 3D Plotting to visualize each cluster

- Elbow Curve:

![Elbow_Curve_V1.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/67e7223c94128c24ab2e342a089638c614490161/Image_%20Resources/Elbow_Curve_V1.png)

- Clustering as follows:

![Cluster_V1](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/67e7223c94128c24ab2e342a089638c614490161/Image_%20Resources/Cluster_V1.png)

## Classification

Preliminarily we'll use the Logistic Regression to predict the outcome of COVID patients. We hope to use this model over the clusters, but also with filtered rows in order to answer some of our questions as:  *Can we identify which vaccine has the highest mortality rate?*

| ![Predict_vs_Actual_df](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/main/Image_%20Resources/Predict_vs_Actual_df.png) | ![Card_Report](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/main/Image_%20Resources/Card_Report.png) |
|--|--|

## Database
First steps with Database were exploration and cleaning. 

1. Each column was reviewed in order to understand content  and determine which columns would be useful and which ones could be removed.

2. Using Pandas the goal was completed, obtaining the values counts for each column and also getting the count for the NaN values inside each column of the dataset. finally we determined the columns needed and included a brief description of each column and checked if it was useful or not.

![DB_Columns_V1](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/1155fda6dfa4c5bbaa167e7c404d7600b1727d25/Image_%20Resources/DB_Columns_V1.png)

3. As a result from exploration activity, we determined that some columns would be used only for the Machine Learning algorithm and some columns would be used for the Dashboard. This conclusion comes from the correlation on the columens, where some columns have direct correlation with the target we want to predict and we don’t want to skew our algorithm. The selected columns for each element can be found inside the **SelectedColumns sheet** in this work-document. 

![DB_Columns_V1](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/1155fda6dfa4c5bbaa167e7c404d7600b1727d25/Image_%20Resources/DB_Columns_V1.png)

4. Most of the unused columns of the original dataset were consired as this categorization per the fact that most this columns are compunded for NaN values above 2000 observations, No value added keeping this columns.

5. Only one exception was made on **weight** column, which shows 2,556 NaN values, howevere we this feature is a *MUST* as a characteristic in patient's health status.

The Provisional database that stands in for the final database accomplishes the following:

- The following Entity relationship diagram (ERD) shows the initial integration of the database, this will help us create the **Final Data Base** we need to develop our machine learning model, and our dashboard which is based in mortality of patients with COVID 19.

![DBERD](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/f63bf5ce4b3f0845d9a4de7401409b115fa49d6f/Image_%20Resources/DBERD.png)

  1. The first table is “Identification”. This table includes de main data of the person treated.
  2. “Comorbilities” which is our second table, this table comes Boolean values, depending on this values, the connection continue to Third  - sixth table as follows:
  3. Third table “Autoimmune Disease”
  4. Fourth table “Cancer”
  5. Fifth table “Smoking”
  6. Sixth table “Immunosuppresion” 
  7. The next table “Vital signs” is correlated to the first one “Identification”
  8. Eighth table “Evolution” also correlated with the first one
  9. Finally “Death cause” table is correlated with “Evolution” Table.

- Draft machine learning module is connected to the provisional database (image from Mockup model taking information from Database in CSV format.

![DB_conn_Model](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/f63bf5ce4b3f0845d9a4de7401409b115fa49d6f/Image_%20Resources/DB_conn_Model.png)

## Questions to be Answered
* Using unsupervised machine learning, can we cluster to find differentiators to help us identify the severity of the infection?
* Using a machine learning model, can we predict the outcome of a patient with certain characteristics?
* Can we identify Covid-19 infected patients who will need more resources?
* Is it possible to estimate the probability of death from patient data?
* Can we identify which vaccine has the highest mortality rate?
* Can we identify patients affected by coronavirus who will not overcome the disease?

# Second Segment Project Deliverable :point_left:

## Database (2SDP) :point_left:
Database exploration was performed in a logic traceable steps in order to have avaiable the uinformation usefull for our analysis. We indentify thos data which has less tham 90% of availability, them we delete columns not usefull and fill those missing information. Columns names was updated and binary columns were maintain to perform the analysis. The steps performed are shown as folows:
![Database_Exploration.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Image_%20Resources/Database_Exploration.png)

All steps can be veryfy in python file [Database_Exploration.ipynb] (https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Pytho_Files_Resources/Database_Exploration.ipynb)


We decided to use AWS ERD service to be the host server of our database.
![Database_Storage_AWS.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Image_%20Resources/Database_Storage_AWS.png)

We are using PostgreSQL as our system v.12.8 because these version allows us a free version in AWS to be able to save our datasets inside. 
We decided to make exploration with Jupyter Notebook, and decided to create our DB with the next  [Queries](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Queries_Resources/Queries.sql) then decided to used the following types of JOINS to make correlations in the DB for demostration purposes which will allow to make exploration for the models.

![Joins.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/main/Image_%20Resources/Joins.png)

## Machine Learning Models (2SDP) :point_left:

### **Clustering Model**
Clustering model allow us to categorize records into a certain number of clusters, in other words identifying groups of similar records and labeling the records according to the group to which they belong. This is done without the benefit of prior knowledge about the groups and their characteristics.

![ClusterModel_Roadmap.PNG](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/b3ec6db1d8e044d8f632ed0da1c38af0a9901fb9/Image_%20Resources/ClusterModel_Roadmap.PNG) 


### **Preliminary Data Preprocessing**

The clustering model data is initially taken from our **PostgreSQL** database, located within our team's Amazon Web Services (AWS) server. This dataset consists of a 5.3k patient table already cleaned through a separate python process.

Still, we assesed the loaded DataFrame to decrease, if possible, the number of features to be used by the ML model; we also select if some additional **Encoding** is necessary.
This dataset is 

Next, the remaining numerical, not boolean data like _Age_, _weight_, _height_, _blood pressure_, etc. is standarized through a scalling process using **sklearn's StandardScaler** python module.

### **Preliminary Feature engineering and selection**

After scalling and column dropping, the processed data has almost 80 different variables to be considered for the clustering model. This nunmber of features may seem to high for interpretation and visualization so we turn to a **Principal Component Analysis (PCA)** to reduce the features to 3.

### **Model preparation, training and testing**

After feature decreasing, clustering model requires an input for the number of clusters to run the model. 

Instead of a dty and error process, we run the model with different kMeans to plot an **Elbow Curve** to decide the optimal number of clusters. In this case, we'll use 4 kMeans. 

**Elbow Curve:**
![Elbow_Curve_V2.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/46a4e610d2db4ea30b8efe0eddfd2b1de3d7f266/Image_%20Resources/Elbow_Curve_V2.png)

### **Model choice**

As mentioned earlier, this clustering model was selected as we explore the data and have little to no input to clasify the different patients.

We also decided over a _hierarchical clustering_ since the kMeans model allows to define clusters by meassuring the model **inertia** instead of a more subjective approach. 

**ClusterModel_VF:**
![ClusterModel_V2.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/46a4e610d2db4ea30b8efe0eddfd2b1de3d7f266/Image_%20Resources/ClusterModel_V2.png)

## Dashboard (2SDP) :point_left:
For this second deliverable we sketched out how our dashboard will work and look like. With the following [DashBoard](https://docs.google.com/presentation/d/184yOuFpKU-F9wypu_j39GzX5Uihh3aV30aT-S8nwJlo/edit#slide=id.g1177521f176_0_0) were a blueprint of how we want our dashboard to work and look.

![DashBoard.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Image_%20Resources/Dashboard.png)

The overall objective of our dashboard is to find new trends, that our clustering model could show. Also be able to determine with a supervised Machine Learning algorithm if a patient needs more or less resources into his treatment according to his overall conditions of the patient.

Regards,

T2
