# Import Flask to build web app
from flask import Flask, render_template, redirect, url_for

# Setup Flask
app = Flask(__name__)

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

if __name__ == "__main__":
   app.run()