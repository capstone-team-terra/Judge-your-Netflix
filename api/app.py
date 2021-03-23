# https://www.thamizhchelvan.com/python/simple-file-upload-python-flask/

import os
from flask import Flask, request, render_template, url_for, redirect, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from pickleData import pickleThis
from charts.MostViewed import runThis
from charts.TopGenres import genresCounter
from charts.WatchTime import watchFrequency
from charts.MostPopular import popularityCounter
from charts.RunTime import runTime

UPLOAD_FOLDER = '.'
ALLOWED_EXTENSIONS = {'csv'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/done")
def results():
    pickleThis()
    most_viewed = runThis()
    top_genres = genresCounter()
    most_popular = popularityCounter()
    watch_frequency = watchFrequency()
    watch_time = runTime()
    return {'genres': top_genres,
            'views': most_viewed,
            'popularity': most_popular,
            'viewcount': watch_frequency,
            'runtime': watch_time
            }


@app.route("/handleUpload", methods=['POST'])
def handleFileUpload():
    print(request.files)
    if 'submission' in request.files:
        file = request.files['submission']
        if file.filename != '' and allowed_file(file.filename):
            print('ran the if statement')
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            return redirect(url_for('results'))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''


if __name__ == '__main__':
    app.run(debug=True, port=3145)
