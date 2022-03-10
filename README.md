# Data Analytics Final Project Team 2

## 🦠 COVID-19 in Mexico City
Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. 

The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 meter apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.

The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.

COVID-19 is affecting globally besides the health industry. There are economic, social and political impacts that are being shown all around the world. One of these impacts is given by the strategy taken buy each country according to the capabilities on getting vaccine contracts and the availability to have resources to pay for them. In second place, the quantity of beds in current Hospital infrastructure and the technology to treat the disease.

**🔎 Mexico & Mexico City:**
- Mexico's Government decided to control vaccine contracts not given to any private the access to the sources and execute the vaccination logistic plan.
- Mexico City has both type of hospitals (Public and Private), both with good presence, in other words, we have in the city a large quantity of hospitals that tries to cover/offer services not only to Mexico City residents, but current capabilities can also accept even foreigners from other states.
    1. In the Private Section, most Mexican hospitals are excellent, and they are staffed by highly trained and English-speaking doctors. Despite this, not all nursing and care staff speak English. 
    2. In the Public Section - Mexico City has achieved universal health coverage and its public healthcare is acceptable for most Mexican residents.

## 💡 Overview of the project

Before the arrival of COVID-19, advanced analytics was quietly starting to revolutionize the healthcare industry. Hospital systems, healthcare providers had begun to apply data science tools to optimize value, evaluate therapies, and improve patient outcomes. In a matter of months, COVID-19 revealed just how essential data science is to public health and how our healthcare system is not ready to treat these kinds of problems.

In this project, we wanted to investigate if a Clustering ML Model would classify the patients and its characteristics. But also, we wanted to investigate the most important variables that lead a patient to a Critical Infection Status.

### ❔ Question to be Answered
According to the current variables that a patient shows entering to a hospital infected with COVID - 19. Does the hospital should dedicate resources on a 1st, 2nd or 3rd level to the patient to help him/her getting better? Each one of the levels can help Hospitals being able to better manage resources for health emergency care.

### 📰 Scope of the project

- Patterns or trends that assume an insight into how the Covid pandemic played out, by clusters. -Shown in the dashboard.
- Usage of Logistic Regression ML Model to predict a patient outcome based on reduced variables.


## 📧 Team's Member and Offical Contact Informacion.

- Alexis Ángeles **(AA)** : axis.angeles@gmail.com
- David Escudero **(DE)**: davidescuderog_@hotmail.com
- Carlos Hernández **(CH)**: charly97hernandez@gmail.com
- Rebeca Osorio **(RO)**: rebeca.subs@gmail.com
- Juan Carlos Reyes **(JC)**: juancarlosreyessoto@gmail.com

### 📲 Team Communication:
* Slack:  C0325T546JH

### 👥 Team Member Responsabilities - Work As A Team:
* Square: **(CH,JC)**  The team member in the square role will be responsible for the repository.
* Triangle: **(RO,AA)** The member in the triangle role will create a mockup of a machine learning model. This can even be a diagram that explains how it will work concurrently with the rest of the project steps.
* Circle: **(DE,CH)** The member in the circle role will create a mockup of a database with a set of sample data, or even fabricated data. This will ensure the database will work seamlessly with the rest of the project.
* X: **(AA,DE,CH,RO,JC)** The member in the X role will decide which technologies will be used for each step of the project.

## 📚 Resources
- Data Source: The Data was provided by our team member David Escudero. In his work, they used a survey to collect data from Covid-19 Patients in some Hospitals from CDMX since the beggining of the pandemic. The data was gathered through patient’s interviews and medical history.
- Software: Git version 2.33.0.windows.2, Visual Studio 1.62.2, Jupiter Notebooks 6.4.6, Python 3.7.10 (default, Feb 26 2021, 13:06:18) [MSC v.1916 64 bit (AMD64)] Anaconda.
    - More details on: [Tecnologies_Used_T2.md](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/10a8587a557befa9d8261e704503c469586ad280/Technologies_Used_T2.md)

## 🗃️ Structure of this Github

- 📄 Clustering_Model and Logistic Regression ML Model Jupyter Notebook (JN) files: contain the constrution of our Machine Learning Models

- 📁 DashBoard_Resources: app.py file and js files needed for the development of the Dashboard

- 📁 Image_Resources: images used in this README.md file

- 📁 PPT_ Resources: [Final PowerPoint presentation](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/RO_LogReg/PPT_Resources/COVID%2019%20in%20Mexico%20City.pptx) and Dashboard Draft

- 📁 Python_Files_Resources: initial data exploration and cleaning

- 📁 Queries_Roaources: SQL queries for the construction of the *patients_final* table used in the Machine Learning JN files.


## 🗄️ Database
The Database was obtained directly from the patients who entered to the public hospitals in Mexico City, as a result of a direct survey made to those patients with COVID diagnosis.

### 🧹 Cleaning Process
- The database started with an analysis of the columns that had less than 90% of the data. If that was the case, we selected the columns that could be filled with *NO* or *0s*, the columns that couldn't be filled, and the remaining went to further exploration analysis.
    - Exploration Analysis: we printed *value_counts* for each column, and decided how to fill or delete in consequence of the values.
- Then, we changed the names of the columns, and also some variables since those were in Spanish.
- If there were values that still remained with missing values, we deleted them. About 11.0579% of the data.
- *No seleccionados/No* and *Seleccionados/Sí* were converted to binary values
- The ***Weight*** column recieved a special treatment, because there were a lot of missing values but we wanted to keep the data. So we got rid of outliers due human errors and then used the **fillna** function from Pandas library, and the method 'bfill' which uses the average of the previous and next value in the sorted dataframe.

| <img width="293" alt="weightSimple" src="https://user-images.githubusercontent.com/90414330/157567824-b7e31fda-6c66-4bc0-bd3f-0ba588657dd3.png"> | <img width="302" alt="weightFilled" src="https://user-images.githubusercontent.com/90414330/157567821-96c15aeb-4582-4fa8-84da-902dc0d7036e.png"> |
|--|--|


This was the best method we found to fill the data, and still mantain the relationship between height and weight.

- We also made a further analysis of ***Comorbilities***. To fill this column, we has to check if the comorbilities columns were selected in the survey by making a sum of them.
- Change the type for the ***Dates*** columns.
- And finally, we exported the cleaned dataFrame into a csv file.

### Table Content

<img height="400" src="https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Image_%20Resources/Database_Exploration.png">

All steps can be veryfy in python file [Database_Exploration.ipynb](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Pytho_Files_Resources/Database_Exploration.ipynb)

### <img height="20" src="https://user-images.githubusercontent.com/90414330/157568681-ed51c230-0559-4ab5-8e8e-1712515812e2.png"> Storage

We decided to use AWS ERD service to be the host server of our database. Using PostgreSQL v.12.8. 

And created our DB with the [Queries](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Queries_Resources/Queries.sql) file, to finally JOIN all the tables to so it'll be easier for the ML Models to load and analyze the data.

## 🧠 Machine Learning Models

### Clustering Model
Clustering model allow us to categorize records into a certain number of clusters, in other words identifying groups of similar records and labeling the records according to the group to which they belong. This is done without the benefit of prior knowledge about the groups and their characteristics.

<img height="300" src="https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/b3ec6db1d8e044d8f632ed0da1c38af0a9901fb9/Image_%20Resources/ClusterModel_Roadmap.PNG">


### **Preliminary Data Preprocessing**

The clustering model data is initially taken from our **PostgreSQL** database, located within our team's Amazon Web Services (AWS) server. This dataset consists of a 5.3k patient table already cleaned through a separate python process.

Still, we assesed the loaded DataFrame to decrease, if possible, the number of features to be used by the ML model; we also select if some additional **Encoding** is necessary.

Next, the remaining numerical, not boolean data like _Age_, _weight_, _height_, _blood pressure_, etc. is standarized through a scalling process using **sklearn's StandardScaler** python module.

### **Preliminary Feature engineering and selection**

After scalling and column dropping, the processed data has almost 80 different variables to be considered for the clustering model. This nunmber of features may seem to high for interpretation and visualization so we turn to a **Principal Component Analysis (PCA)** to reduce the features to 3.

### **Model preparation, training and testing**

After feature decreasing, clustering model requires an input for the number of clusters to run the model. 

Instead of a dty and error process, we run the model with different kMeans to plot an **Elbow Curve** to decide the optimal number of clusters. In this case, we'll use 4 kMeans. 

**Elbow Curve:**

<img height="150" src="https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/46a4e610d2db4ea30b8efe0eddfd2b1de3d7f266/Image_%20Resources/Elbow_Curve_V2.png">

### Model choice

As mentioned earlier, this clustering model was selected as we explore the data and have little to no input to clasify the different patients.

We also decided over a _hierarchical clustering_ since the kMeans model allows to define clusters by meassuring the model **inertia** instead of a more subjective approach. 

**ClusterModel_VF:**

![ClusterModel_V2.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/46a4e610d2db4ea30b8efe0eddfd2b1de3d7f266/Image_%20Resources/ClusterModel_V2.png)


### Logistic Regression ML Model 

As in the Clustering Model, the data was taken form the AWS DataBase. Table has 87 columns, or many features!

The **benefits** of using Logistic Regression ML Model, is that this is the simplest and efficient method for binary classification models. In this case, we want to know if the outcome of a patient will be: **Discharge home for improvement**, or **Death**.

Since the choices are 0 and 1, respectively, a Logistic Regression Model is ideal to solve the classification problem. 

Using this model, we expect to predict the outcome of a patient based on the most important features of the database so in the dashboard the doctors can easily know if a patient would need more attention.

This means that we'll grab 10 or 15 important features, out of 90, to predict the final outcome of a patient: *Death* or *Discharge Home for Improvement*.

**Changes made**
From the first and second delivery, all of them found in the GitHub History as LogReg_Model, we added the Mutual Info Analysis and added a second *classifier* Model, so we could compare the accuracy and the changes when reducing the features in the classification model. 
We also reduce the threshold for the normalization of the discrete variables from 5% to 1%.

 <br>**Data Preprocessing**
 
The survey tried to collect data about patients that visited the emergency room in some hospitals in the CDMX with COVID-19 symptoms. For the aim of our research, we'll **filter** only the patients that tested **positive** to the **COVID Test**.

To make the Analysis of the data easier, we separated the Data Frame by the variables:

| Continuous | Discrete |
|--|--|
| <img width="700" alt="covidPatients_varc" src="https://user-images.githubusercontent.com/90414330/157391354-ad8a36ec-7a07-4ea5-9b16-4594fd3c8738.png"> | <img width="700" alt="covidPatients_vard" src="https://user-images.githubusercontent.com/90414330/157392063-afb507b2-4c53-4dd3-b978-699936ed6c5f.png"> 

| and Gossipy Variables |
|--|
|We'll also delete some variables that would help the model  to predict the outcome and aren't possible to obtain when the patient is alive. We like to call them, the *gossipy variables*|
|<center><img width="700" alt="covidPatients_gossipyVars" src="https://user-images.githubusercontent.com/90414330/157391359-13eb74e7-4e8b-4103-8619-ab8a58fff369.png">
</center>

#### Feature Engineering and Feature Selection
*Discrete Variables*<br>
* **Analysis**. With the ***freq function***,  we can identify unary columns and those unique values that have a small frequency

<img height="100" alt="smallFrequency_2" src="https://user-images.githubusercontent.com/90414330/157511144-3558e418-0178-4d7f-9764-50dbf3ff627e.png">   <img height="100"  alt="smallFrequency_3" src="https://user-images.githubusercontent.com/90414330/157511147-1fd4a7d3-a456-458f-91e7-54a9cfabddf2.png">


<br>Using this information, we can set a threshold so we can normalize the data.
<center><img height="200" alt="holeHospitals" src="https://user-images.githubusercontent.com/90414330/157516898-9688d314-7bbb-4bb0-b58c-2e42aa8a34e4.png">
<img  height="150" alt="normalizedHospitals" src="https://user-images.githubusercontent.com/90414330/157516901-cd62bef6-a9bb-4769-b1e7-7b6182354ab9.png">

* **Normalization**. It is desirable to have simple models that generalize well, and in turn, input data with few input variables.<br>A model with too many variables is likely to overfit the training dataset and therefore may not perform well on new data. <br> We wanted to normalize those values and reduce the variance, so the values in which their Relative Frequency is less than 1%, were replaced by the *mode* of the column or *OTHERS* value.  

This way, we located a lot of columns in which there weren't many variance in the data and they turned into univariate columns. Those columns are useless and we have to delate them.
By only this steps, we got rid of 30 columns.

* **Label Encoding**. 
	* For the *TRUE/FALSE* column-values, we used the *astype* function.
	* For the other discrete columns and the ones with *dates*, we used *LabelEncoder* from the sklearn library.
<br>

*Continuous Variables* - Statistical Analysis<br>

<img height="250"  alt="varcDescr iptions" src="https://user-images.githubusercontent.com/90414330/157526183-15e937a5-ba8f-495b-ae80-6bdcfdb6bc22.png">

* For the analysis, we filtered out the values that are in blue. Because those ones that are equal to zero, were filled just to avoid null values, or are impossible values.<br>
 > We used the 1% and 99% percentiles as the limits for the data.

| Initial Data | Filtered Data |
|--|--|
|<img alt="varcOutliers_notFiltered" src="https://user-images.githubusercontent.com/90414330/157527274-53f0c6b9-5671-4351-880c-27c22dcba191.png">|<img alt="varcOutliers_Filtered" src="https://user-images.githubusercontent.com/90414330/157527268-28b4c8b3-e7e0-4698-a2ce-4c7897ba69b6.png">|

* **Correlated Variables**. The Model only works when the variables are independent from each one.

<img width="763" alt="correlatedColumns" src="https://user-images.githubusercontent.com/90414330/157530083-ab41c9b3-723d-43d5-9937-558ee4f949b0.png">

Using a PairPlot, we can easily find that *mean_arterial_pressure* is correlated to *Systolic* and *Diastolic blood pressure*. 
We deleted  *mean_arterial_pressure* column because, in fact, the column is calculated with the blood pressure values. 

*Best Variables*
* For the selection of the best variables, we used *mutual_info_classif* function from *feature_selection* in Sklearn ML Library. <br> **Mutual Info Classification** measures the dependency between two variables. In our case, the function measures the dependency between each one of the variables in the ***X*** DataFrame and the ***y*** -> outcome of a patient.<br> 
> **Mutual Info Classification** is equal to zero if and only if two random variables are independent, and higher values mean higher dependency

<img width="409" alt="bestFeatures_plot" src="https://user-images.githubusercontent.com/90414330/157550301-38e8f89b-0963-4975-9de8-964a7f787d8a.png">

**Machine Learning Model**
* **Training and Testing Sets**. We used *train_test_split* function to split the data.
* We **trained** two Linear Regression Models, one with the entire data set and the other one with the Best 10 Features, **increasing to 150 the iterations** so the model could converge.

* **Model’s confusion matrix**, including final accuracy score. <br><img width="584" alt="accuracyScore_comparision" src="https://user-images.githubusercontent.com/90414330/157554979-08206022-0688-4d28-a0dd-2c1707db7355.png">

| All Features | Best 10 Features |
|--|--|
| <center><img alt="confusionMatrix_allFeatures" src="https://user-images.githubusercontent.com/90414330/157554064-8c85fe50-4e3e-4b9c-be81-36c6ad1a8c52.png"></center> | <center><img alt="confusionMatrix_bestFeatures" src="https://user-images.githubusercontent.com/90414330/157554067-cd9a5cf4-06b2-4880-8339-380811d2310d.png"></center> |
| <img width="217" alt="confussionMatix_allFeatures" src="https://user-images.githubusercontent.com/90414330/157552988-f0c6788e-3464-472f-9ec8-00e0121a44c1.png"> | <img width="215" alt="confussionMatix_bestFeatures" src="https://user-images.githubusercontent.com/90414330/157552995-ff013116-ebbb-43c4-891d-d02c42131939.png"> |

We can see a slight change in the Type I and II Errors in the Confusion Matrix, from the All Features and Best 10 Features Models. And also, since the difference between the models isn't "meaningful" --2.14%, the 10 features selected by the Mutual Info Model are enough to predict the outcome of a patient

### Conclusion
With this Analysis, we were able to select 10 features and predict a patient outcome with an accuracy of 80.6%

<center><img width="127" alt="testPrediction" src="https://user-images.githubusercontent.com/90414330/157555224-ea65b323-b587-4854-82cb-3983bea7b129.png"></center>

Unfurtunately, the model can't answer by itself what kind of sources should the hospital give to the patient. It'll only help the doctor to know, according to previous data, the most probable outcome of the patient.
    
But using the outcome, together with the data obtained from charts of the Dashboard that groups the patients into the clusters, the doctors can be one step closer to know what kind of resources the patient will need. 

    
## 📊 Dashboard

We based on our previous blueprint for the construction of the [DashBoard](https://docs.google.com/presentation/d/184yOuFpKU-F9wypu_j39GzX5Uihh3aV30aT-S8nwJlo/edit#slide=id.g1177521f176_0_0), and used Flask to build a webapp to 3 informative graphs and an interactive map. 
    
The following image is what the user sees when accessing the app.

![image](https://user-images.githubusercontent.com/89402038/156961283-1444aefc-02c3-4487-bcb9-47f2e7400f65.png)


At the very top, we have the NavBar; which allows the user to move between the Main page and the Overview Page.

![image](https://user-images.githubusercontent.com/89402038/156961423-84b5138d-ed7c-4e4c-951d-5d6a86f5ec92.png)

In the Home Page, we can find the graphs that were build with the data that lives in our database. 

![image](https://user-images.githubusercontent.com/89402038/156961540-46a415b3-521f-4fc0-be73-456f2fa7e2a1.png)

In the first graph, we can find the clusters that we got from running an unsupervised machine learning algorithm on the data.
    
The second graph are the total deaths through time and the third graph is the sum of comorbilities the patients had. 
    
Finally we have a map showing circle markers, sized by the amount of deaths that each hospital. The circle  markers, also pop-up a marker when clicked.

![image](https://user-images.githubusercontent.com/89402038/156961747-70c0fa18-dd68-4ed3-9d57-b4b76c6ffd84.png)

At the top we have a filter, where you can choose to filter the data according the cluster.

<img height="150" src="https://user-images.githubusercontent.com/89402038/156961881-a02a7685-a286-4c33-9868-c0ac826192ee.png">


<img height="20" src="https://img.icons8.com/material-two-tone/24/000000/filter--v2.png"/> Once we filter the dashboard, we find that 

![image](https://user-images.githubusercontent.com/89402038/156961960-82541ee8-b17f-4443-bea8-0be03d67c2a4.png)

That the algorithm clustered the patients according to deaths and comorbilities. The cluster 1 are predominantly patients with obesity, diabetes, and hypertension that are the ones with the most deaths.

Once one cluster is selected, the button random patient appears. When clicked a random patient from the selected cluster is taken and we arrive at the following page.

![image](https://user-images.githubusercontent.com/89402038/156962197-f2f97e38-2c48-43c9-826a-83c6b774f66a.png)

Where we are shown the basic information of the patient and the option to adjust the parameters to feed them into a previously trained supervised machine learning model to predict the outcome of the patient. This feature is at the moment not implemented.

The overall objective of our dashboard is to find new trends, that our clustering model could show. Also be able to determine with a supervised Machine Learning algorithm if a patient needs more or less resources into his treatment according to his overall conditions of the patient.

Regards,

T2
