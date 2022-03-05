# Import Flask to build web app
from flask import Flask, render_template, redirect, url_for,jsonify
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, MetaData, Table

from config import db_password

import pandas as pd

import json


# Setup Flask
app = Flask(__name__)

# Set path to the database
db_string = f"postgresql://postgres:{db_password}@data-analytics-final-project-t2.ceptpmc0vrha.us-east-1.rds.amazonaws.com/Medical_Data"

# Create enginge to connect with db
engine = create_engine(db_string)

# Create inspector to inspect db
inspector = inspect(engine)

# Get the db as a df and save it as a json file
patients_df = pd.read_sql_table('patients_clusters',db_string, index_col='identification')
patients_df.to_json('patients.json')

# Define route for main page of our dashboard
@app.route("/")
def index():
   return render_template("home.html")

# Define route for about page of our dashboard
@app.route("/about")
def about():
   return render_template("about.html")

# Define route for random patient page of our dashboard
@app.route("/random-patient")
def random_patient():
   return render_template("random-patient.html")

# Define route for predict page of our dashboard which will run a python script which will predict the outcome.
# At the end it returns to the /random-patient
@app.route("/predict")
def predict():
   return redirect("/random-patient",code=302)

@app.route("/patients.json")
def patients():
   with open('patients.json') as json_file:
    data = json.load(json_file)
   return data

if __name__ == "__main__":
   app.run()