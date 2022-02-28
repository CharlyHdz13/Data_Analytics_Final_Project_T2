CREATE TABLE Identification (
     Identification VARCHAR(5377) NOT NULL,
     Healthcare_Center INT NOT NULL,
	 Covid_test_negative BOOL,
	 Covid_test_positive BOOL,
	 PCR_Antigen BOOL,
	 Inclusion_Positive_COVID_tests BOOL,
	 Exclusion_Nofile BOOL,
	 Birth_Date DATE,
	 Age VARCHAR,
	 Sex INT,
	 Pregnancy BOOL,
	 Admission_date DATE,
	 Leaving_date DATE,
	 Stay_length VARCHAR,
	 Symptons_onset VARCHAR,
	 Comorbilities BOOL,
	 Vaccination BOOL,
	 Height_cm VARCHAR,
	 Weight_kg VARCHAR,
	 Outcome INT,
     PRIMARY KEY (Identification),
     UNIQUE (Identification)
);

CREATE TABLE Comorbilities (
     Identification VARCHAR,
     Comorbilities BOOL,
	 Obesity BOOL,
	 Diabetes_Mellitus BOOL,
	 Arterial_Hypertension BOOL,
	 Autoimmune_Disease BOOL,
	 Immunosuppression BOOL,
	 Cancer BOOL,
	 Smoking BOOL,
	 Alcoholism BOOL,
	 COPD BOOL,
	 Interstitial_Lung_Disease BOOL,
	 Tuberculosis BOOL,
	 Asthma BOOL,
	 Cardiovascular_disease BOOL,
	 Renal_Disease BOOL,
	 Hepatic_Disease BOOL,
	 Neurological_Disease BOOL,  
  PRIMARY KEY (Comorbilities)
);

CREATE TABLE Autoimmune_Disease(
	 Identification VARCHAR,
     Autoimmune_Disease BOOL,
	 Systemic_Lupus_Erythematosus BOOL,
	 Rheumatoid_Arthritis BOOL,
	 Scleroderma BOOL,
	 Psoriasis BOOL,
	 Inflammatory_bowel_disease BOOL,
	 Vasculitis BOOL,
  PRIMARY KEY (Autoimmune_Disease)
);


CREATE TABLE Cancer(
	 Identification VARCHAR,
     Cancer BOOL,
	 Hematological_Cancer BOOL,
	 Active_Cancer BOOL,
	 Others_Cancer BOOL,
  PRIMARY KEY (Cancer)
);

CREATE TABLE Smoking(
	 Identification VARCHAR,
     Smoking BOOL,
	 Active_Smoking BOOL,
	 Years_smoking BOOL,
	 Cigarrettes_per_day BOOL,
 PRIMARY KEY (Smoking)
);

CREATE TABLE Death(
	 Identification VARCHAR,
     Outcome VARCHAR,
	 Death_with_IMV BOOL,
	 Acute_myocardial_infarction BOOL,
	 Respiratory_failure_due_to_COVID BOOL,
	 TIA BOOL,
	 Sudden_death_not_specified BOOL,
	 Pulmonary_thromboembolism BOOL,
	 Sepsis BOOL,
	 Nosocomial_infection BOOL,
	 Other BOOL,
	 Massive_TIA_Heart_Attack_Pulmonary_Embolism BOOL,
	 Rejected_Intubation_or_Terminal_Disease BOOL,
	 Fan_Unavailability BOOL,
	 Other_cause BOOL,
	 Died_in_the_first_24_hours_of_hospitalization BOOL,	 
 PRIMARY KEY (Outcome)
);

CREATE TABLE Vital_Signs(
	Identification VARCHAR,
	Height_cm VARCHAR,
	Weight_kg VARCHAR,
	Temperature_C VARCHAR,
	Respiratory_rate VARCHAR,
	Heart_rate VARCHAR,
	Oximeter_saturation VARCHAR,
	Systolic_Blood_Pressure VARCHAR,
	Diastolic_blood_pressure VARCHAR,
	Mean_arterial_pressure VARCHAR,
	Glasgow_Coma_Scale VARCHAR,
  PRIMARY KEY (Identification)
);

CREATE TABLE Evolution(
	Identification VARCHAR,
	Use_of_oxygen_before_arrival BOOL,
	Administration_of_oxygen_in_any_modality_at_any_time_during_the_hospital_stay BOOL,
	Maximum_respiratory_support_during_any_time_of_the_hospitalization VARCHAR,
	IMV_respiratory_support BOOL,
	Pronation BOOL,
	ECMO BOOL,
	Date_of_intubation DATE,
	Date_of_extubation DATE,
	Peritoneal_dialysis BOOL,
	Hemodialysis BOOL,
	Outcome VARCHAR,
	Admission_date DATE,
	Leaving_date DATE,
	Stay_length VARCHAR,
 PRIMARY KEY (Stay_length)		
);

CREATE TABLE Immunosuppression(
	 Identification VARCHAR,
     Immunosuppression BOOL,
	 HIV BOOL,
	 Organ_transplantation BOOL,
	 Use_of_immunosuppressants BOOL,
	 Primary_Immunodeficiency BOOL,
	 Splenectomy BOOL,
 PRIMARY KEY (Immunosuppression)
);


CREATE TABLE patients_final(
	 identification VARCHAR(5377) NOT NULL,
     Healthcare_Center VARCHAR,
	 Covid_test_negative BOOL,
	 Covid_test_positive BOOL,
	 PCR_Antigen VARCHAR,
	 Inclusion_Positive_COVID_tests BOOL,
	 Exclusion_Nofile BOOL,
	 Birth_Date DATE,
	 Age VARCHAR,
	 Sex VARCHAR,
	 Pregnancy BOOL,
	 Admission_date DATE,
	 Symptons_onset VARCHAR,
	 Comorbilities BOOL,
	 Obesity BOOL,
	 Diabetes_Mellitus BOOL,
	 Arterial_Hypertension BOOL,
	 Autoimmune_Disease BOOL,
	 Immunosuppression BOOL,
	 Cancer BOOL,
	 Smoking BOOL,
	 Alcoholism BOOL,
	 COPD BOOL,
	 Interstitial_Lung_Disease BOOL,
	 Tuberculosis BOOL,
	 Asthma BOOL,
	 Cardiovascular_disease BOOL,
	 Renal_Disease BOOL,
	 Hepatic_Disease BOOL,
	 Neurological_Disease BOOL,
	 Systemic_Lupus_Erythematosus BOOL,
	 Rheumatoid_Arthritis BOOL,
	 Scleroderma BOOL,
	 Psoriasis BOOL,
	 Inflammatory_bowel_disease BOOL,
	 Vasculitis BOOL,
	 HIV BOOL,
	 Organ_transplantation BOOL,
	 Use_of_immunosuppressants BOOL,
	 Primary_Immunodeficiency BOOL,
	 Splenectomy BOOL,
	 Hematological_Cancer BOOL,
	 Active_Cancer BOOL,
	 Others_Cancer BOOL,
	 Active_Smoking BOOL,
	 Years_smoking VARCHAR,
	 Cigarrettes_per_day VARCHAR,
     Vaccination BOOL,
	 Temperature_C VARCHAR,
	 Respiratory_rate VARCHAR,
	 Heart_rate VARCHAR,
	 Oximeter_saturation VARCHAR,
	 Systolic_Blood_Pressure VARCHAR,
	 Diastolic_blood_pressure VARCHAR,
	 Height_cm VARCHAR,
	 Weight_kg VARCHAR,
	 Glasgow_Coma_Scale VARCHAR,
	 Dopamine BOOL,
	 Dosis_of_Dopamine_or_norepinephrine VARCHAR,
	 Mean_arterial_pressure VARCHAR,
	 Use_of_oxygen_before_arrival VARCHAR,
	 Administration_of_oxygen_in_any_modality_at_any_time_during_the_hospital_stay BOOL,
	 Maximum_respiratory_support_during_any_time_of_the_hospitalization VARCHAR,
	 IMV_respiratory_support BOOL,
	 Pronation_respiratory_support BOOL,
	 ECMO_respiratory_support BOOL,
	 Date_of_intubation DATE,
	 Date_of_extubation DATE,
	 Peritoneal_dialysis BOOL,
	 Hemodialysis BOOL,
	 Outcome VARCHAR,
	 Leaving_date DATE,
	 Stay_lenght VARCHAR,
	 Death_with_IMV BOOL,
	 Acute_myocardial_infarction BOOL,
	 Respiratory_failure_due_to_COVID BOOL,
	 TIA BOOL,
	 Sudden_death_not_specified BOOL,
	 Pulmonary_thromboembolism BOOL,
	 Sepsis BOOL,
	 Nosocomial_infection BOOL,
	 Other BOOL,
	 Sudden_Death_Massive_TIA_Heart_Attack_Pulmonary_Embolism BOOL,
	 Rejected_Intubation_or_Terminal_Disease BOOL,
	 Fan_Unavailability BOOL,
	 Other_cause BOOL,
	 Died_in_the_first_24_hours_of_hospitalization BOOL,
	 Latitude VARCHAR,
	 Longitude VARCHAR
)








	 





















	 