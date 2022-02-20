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

if __name__ == "__main__":
   app.run()