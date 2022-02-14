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
* Slack:  C0325T546JH**

### Team Member Responsabilities - Work As A Team:
* Square: **(CH,JC)**  The team member in the square role will be responsible for the repository.
* Triangle: **(RO,AA)** The member in the triangle role will create a mockup of a machine learning model. This can even be a diagram that explains how it will work concurrently with the rest of the project steps.
* Circle: **(DE,CH)** The member in the circle role will create a mockup of a database with a set of sample data, or even fabricated data. This will ensure the database will work seamlessly with the rest of the project.
* X: **(AA,DE,CH,RO,JC)** The member in the X role will decide which technologies will be used for each step of the project.

## Resources (Draf ... To be updated upon usage)
- Software: Git version 2.33.0.windows.2, Visual Studio 1.62.2, Jupiter Notebook 6.4.6, Python 3.7.10 (default, Feb 26 2021, 13:06:18) [MSC v.1916 64 bit (AMD64)]Anaconda.
- Details on : Tecnologies_Used_T2.md

# First Segment Project Deliverable

## Machine Learning Model
In order to understand the overall relationship between health and vaccination data, we are looking forward to develop an unsupervised machine learning model to identify different clusters of patients so that we can analyze the death probability and illness seriousness among the different groups. 

The modeling process will consist of:
- Initial data processing (cleaning, encoding, scaling);
- Followed by a Principal Component Analysis to decrease features;
- Elbow curve chart to define optimal clusters;
- K-means model selected;
- Class prediction and visualization;

1. Data is taken provisionally from the DB:

![DB_conn_Model](DB_conn_Model.png)

2. Outputs label(s) for input data is the following:

## Database
The Provisional database that stands in for the final database accomplishes the following:

- The following Entity relationship diagram (ERD) shows the initial integration of the database, this will help us create the **Final Data Base** we need to develop our machine learning model, and our dashboard which is based in mortality of patients with COVID 19.

![DBERD](DBERD.png)

- Draft machine learning module is connected to the provisional database (image from Mockup model taking information from Database in CSV format.

![DB_conn_Model](DB_conn_Model.png)


