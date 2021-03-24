import pandas as pd


def runThis():
    df = pd.read_csv('./NetflixViewingHistory.csv')
    dict = {}

    def countShow(title):

        if ':' in str(title):
            showName = str(title).split(':')[0]
        else:
            showName = title
        if showName in dict:
            dict[showName] += 1
        else:
            dict[showName] = 1
    df['Title'] = df['Title'].astype('str')
    df['Title'].apply(lambda x: countShow(x))
    return dict
