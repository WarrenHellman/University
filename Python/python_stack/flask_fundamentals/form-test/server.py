# you just gotta import these modules
from flask import Flask, render_template, request, redirect, session
#need to define the app name
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes
# routing rules and rest of server.py below
#our index route handles the rendering of the form in root
@app.route('/')
def index():
    return render_template('index.html')
#This route handles form submission
#we have to define which HTTP method is allowed for this route
@app.route('/users', methods=['POST'])
def create_user():
    print 'Got Post Info'
    # this will store this info for the session
    session['name'] = request.form['name']
    session['email'] = request.form['email']
    #redirects to the '/show' root route
    return redirect('/show')
@app.route('/show')
def show_user():
    return render_template('user.html')

app.run(debug=True)