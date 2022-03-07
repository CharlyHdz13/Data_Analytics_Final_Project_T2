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
Mexican health professionals complain the government moved too slowly to shut down business and stop the spread of the coronavirus. Doctors say hospitals around Mexico City reached capacity rapidly. Additionally, it is a "public belief" that is you need to be treated in a public institution; the expected result is worse than if you are treated on a private Hospital. Trying to eliminate this "Public belief" and using data to try to expect the outcome from those patients which arrive to a public hospital to be treated with Covi-19 disease we will perform data exploration and analysis to asses each patient's conditions, comorbilities and outcome.

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

## Structure of Github
- DashBoard_Resources: This folder includes all the code and app for our Dashboard.
- Image_Resources: This folder includes the images we use for the readme update.
- PPT_ Resources: The folder includes our Powerpoint Presentation.
- Python_Files_Resources: The folder includes of Python coding files we used for data exploration and others.
- Queries_Roaources: THe foled includes the coding for our data table creation.

# Question to be Answered
According to the current variables that a patient shows entering to a hospital infected with COVID - 19. Does the hospital should dedicate resources on a 1st, 2nd or 3rd level to the patient to help him/her getting better? Each one of the levels can help Hospitals being able to better manage resources for health emergency care.

## Database
Database exploration was performed in a logic traceable steps in order to have avaiable the uinformation usefull for our analysis. We indentify thos data which has less tham 90% of availability, them we delete columns not usefull and fill those missing information. Columns names was updated and binary columns were maintain to perform the analysis. The steps performed are shown as folows:
![Database_Exploration.png](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Image_%20Resources/Database_Exploration.png)

All steps can be veryfy in python file [Database_Exploration.ipynb](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Pytho_Files_Resources/Database_Exploration.ipynb)

We decided to use AWS ERD service to be the host server of our database.

We are using PostgreSQL as our system v.12.8 because these version allows us a free version in AWS to be able to save our datasets inside. 
We decided to make exploration with Jupyter Notebook, and decided to create our DB with the next  [Queries](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/26354b848fb3e4c6fe0fff6d8a7d56148842fe9d/Queries_Resources/Queries.sql) then decided to used the following types of JOINS to make correlations in the DB for demostration purposes which will allow to make exploration for the models.

## Machine Learning Models

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

### Logistic Regression ML Model

As in the Clustering Model, the data was taken form the AWS DataBase. Table has 87 columns, or many features! From which we have some string and datetime columns, we'll need to modify those ones and reduce the size of the dataframe so it can score a better accuracy from last week.

**Description of preliminary data preprocessing**
- For this process, we used *Label Encoding* and *Min_Max Scaler* to normalize the data.

**Description of preliminary feature engineering and preliminary feature selection, including their decision-making process**
- For the selection of the columns, it was necessary to split them into categories: *vard* - discrete variables, *varc* - continue variables, *dates* and *lat_lon* for latitude and longitude.
- In the Analysis of the discrete variables, we created a *frequency* function that helped us to know the distribution of the values in each column and that simplified the normalization process.

![Univariate Frequency Table](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/main/Image_%20Resources/ExpAn_DiscNorm.png)

It was a necessary process since some values in the columns only were represented by 10 or 20 rows.

- For the Continuous ones, the percentiles where used as parameters to identify extreme values. Many of the columns had 'normal' outliers, so we didn't delete many rows in this section.
- And with a pairplot we could find that *mean_blod_preassure* is correlated with the diastolic and systolic preassures.

**Description of how data was split into training and testing sets**
- We used the help of *sklearn*

**Explanation of model choice, including limitations and benefits**
- We wanted to predict what would be the outcome of a patient based on some characteristics.

- Since the choices are 0 and 1, a Logistic Regression Model is ideal to solve the classification problem.

![Logistic Regression Explanation](https://github.com/CharlyHdz13/Data_Analytics_Final_Project_T2/blob/main/Image_%20Resources/LogReg_Explanation.png)

- We have the advantage of knowing how much is the weight of each parameter, which means that, if the user input new characteristics of a patient, we will know its outcome. This is important because we hope to use this feature in the Flask App.

- The results of the accuracy given different variances in the data preprocessing are interesting. We'll study them further in the next delivery.

## Dashboard
For the [DashBoard](https://docs.google.com/presentation/d/184yOuFpKU-F9wypu_j39GzX5Uihh3aV30aT-S8nwJlo/edit#slide=id.g1177521f176_0_0) were we based on our previous blueprint.
We used Flask to build a webapp to hold the 3 graphs and the maps. The following image is what the user sees when accessing the app.

![image](https://user-images.githubusercontent.com/89402038/156961283-1444aefc-02c3-4487-bcb9-47f2e7400f65.png)

At the top we have the NavBar, which allows the user to move freely between the main page and the page were we give a quick overview of the project.

![image](https://user-images.githubusercontent.com/89402038/156961423-84b5138d-ed7c-4e4c-951d-5d6a86f5ec92.png)

On the home page, the first graphs are built with all the data collected from our database. 

![image](https://user-images.githubusercontent.com/89402038/156961540-46a415b3-521f-4fc0-be73-456f2fa7e2a1.png)

The first graph is the clusters that we got from running an unsupervised machine learning algorithm on the data. The second graph are the total deaths through time, the third graph is the sum of comorbilities the patients had, and finally a map showing with circles the amount of deaths each institute had. The circles when clicked display a popup like the one of the following image.

![image](https://user-images.githubusercontent.com/89402038/156961747-70c0fa18-dd68-4ed3-9d57-b4b76c6ffd84.png)

At the top we have a selection bar, where you can choose which cluster the second and third graphs to be filtered with.

![image](https://user-images.githubusercontent.com/89402038/156961881-a02a7685-a286-4c33-9868-c0ac826192ee.png)

Once the graphs are filtered, we discovered the following:

![image](https://user-images.githubusercontent.com/89402038/156961960-82541ee8-b17f-4443-bea8-0be03d67c2a4.png)

That the algorithm clustered the patients according to deaths and comorbilities. The cluster 1 are predominantly patients with obesity, diabetes, and hypertension that are the ones with the most deaths.

Once one cluster is selected, the button random patient appears. When clicked a random patient from the selected cluster is taken and we arrive at the following page.

![image](https://user-images.githubusercontent.com/89402038/156962197-f2f97e38-2c48-43c9-826a-83c6b774f66a.png)

Where we are shown the basic information of the patient and the option to adjust the parameters to feed them into a previously trained supervised machine learning model to predict the outcome of the patient. This feature is at the moment not implemented.

The overall objective of our dashboard is to find new trends, that our clustering model could show. Also be able to determine with a supervised Machine Learning algorithm if a patient needs more or less resources into his treatment according to his overall conditions of the patient.

## Presentation
First presentation can be found on the folder.

Regards,

T2
