from flask import Flask, request, render_template
from flask import session, flash, make_response, redirect
import jinja2



app = Flask(__name__)

@app.route('/')
def home():
    """Homepage."""

    return render_template('homepage.html')


if __name__ == "__main__":
  app.run(debug=True)