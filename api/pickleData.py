import pickle
import pandas as pd


def pickleThis(fileRef):
    df_origin_history = pd.read_csv(fileRef)
    df_origin_ratings = pd.read_csv('https://firebasestorage.googleapis.com/v0/b/test-e5975.appspot.com/o/ratings.csv?alt=media&token=25e90d88-88bf-4475-834b-38de0f1722a7')

    df_origin_history['rootName'] = df_origin_history['Title'].apply(
        lambda q: q.split(":")[0] if type(q) == str else q)
    df_origin_history['root_lower'] = df_origin_history['rootName'].apply(
        lambda s: s.lower() if type(s) == str else s)
    df_origin_ratings['root_lower'] = df_origin_ratings['primaryTitle'].apply(
        lambda s: s.lower() if type(s) == str else s)
    df_origin_ratings = df_origin_ratings.sort_values(by=['numVotes'], ascending=False).drop_duplicates(subset='primaryTitle', keep='first')
    df_merged = df_origin_history.merge(
        df_origin_ratings, how="inner", on="root_lower")
    df_merged = df_merged.drop_duplicates(subset='primaryTitle', keep='first')


    mergedData_file = 'merged_data.pkl'
    pickle.dump(df_merged, open(mergedData_file, 'wb'))
