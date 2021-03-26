# https://www.thamizhchelvan.com/python/simple-file-upload-python-flask/

import os
from flask import Flask, request, render_template, url_for, redirect, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from pickleData import pickleThis
from charts.MostViewed import viewsCounter
from charts.TopGenres import genresCounter
from charts.WatchTime import watchFrequency
from charts.MostPopular import popularityCounter
from charts.RunTime import runTime

app = Flask(__name__, static_folder="../build", static_url_path='/')
CORS(app)

@app.route('/')
def index():
    return app.send_static_file("index.html")

@app.route("/handleUpload", methods=['POST'])
def handleFileUpload():
    print('REQUEST ----> ', request.data)
    data = request.data.decode("utf-8") 
    pickleThis(data)
    mostViewed = viewsCounter(data)
    topGenres = genresCounter()
    mostPopular = popularityCounter()
    watchFreq = watchFrequency(data)
    watchTime = runTime()
    return {'genres': topGenres,
            'views': mostViewed,
            'popularity': mostPopular,
            'viewcount': watchFreq,
            'runtime': watchTime
            }

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))