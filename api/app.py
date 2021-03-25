# https://www.thamizhchelvan.com/python/simple-file-upload-python-flask/

import os
from flask import Flask, request, render_template, url_for, redirect, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from charts.MostViewed import viewsCounter
from pickleData import pickleThis
from charts.TopGenres import genresCounter
from charts.WatchTime import watchFrequency
from charts.MostPopular import popularityCounter
from charts.RunTime import runTime

app = Flask(__name__)
CORS(app)

@app.route("/handleUpload", methods=['POST'])
def handleFileUpload():
    print('REQUEST ----> ', request.data)
    data = request.data.decode("utf-8") 
    pickleThis(data)
    dictionary1 = viewsCounter(data)
    dictionary2 = genresCounter()
    dictionary3 = popularityCounter()
    dictionary4 = watchFrequency(data)
    dictionary5 = runTime(data)
    return {'genres': dictionary2,
            'views': dictionary1,
            'popularity': dictionary3,
            'viewcount': dictionary4,
            'runtime': dictionary5
            }
    # if 'submission' in request.files:
    #     file = request.files['submission']
    #     if file.filename != '' and allowed_file(file.filename):
    #         print('ran the if statement')
    #         filename = secure_filename(file.filename)
    #         file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    #         # return redirect(url_for('fileFrontPage'))
    #         # return redirect(url_for('uploaded_file', filename=filename))
    #         return redirect(url_for('results'))
    # return '''
    # <!doctype html>
    # <title>Upload new File</title>
    # <h1>Upload new File</h1>
    # <form method=post enctype=multipart/form-data>
    #   <input type=file name=file>
    #   <input type=submit value=Upload>
    # </form>
    # '''


if __name__ == '__main__':
    app.run(debug=True, port=3145)
