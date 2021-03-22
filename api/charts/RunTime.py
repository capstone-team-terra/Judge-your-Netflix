import pandas as pd
import numpy as np


def runTime():
    df_mydata = pd.read_csv('./NetflixViewingHistory.csv')
    # below csv includes new column (runTime) to ratings csv
    df_merged = pd.read_csv('./ratings.csv')

    # below function does similar to pickleData.py
    df_mydata['rootName'] = df_mydata['Title'].apply(
        lambda q: q.split(":")[0] if type(q) == str else q)
    df_mydata['root_lower'] = df_mydata['rootName'].apply(
        lambda s: s.lower() if type(s) == str else s)
    df_merged['root_lower'] = df_merged['primaryTitle'].apply(
        lambda s: s.lower() if type(s) == str else s)
    df_merged = df_merged.sort_values(by=['numVotes'], ascending=False).drop_duplicates(
        subset='primaryTitle', keep='first')
    df_final = df_mydata.merge(df_merged, how="inner")

    # convert date to date object & create new column "month_year" to show MM-YYYY
    df_final["Date"] = pd.to_datetime(df_final["Date"], format='%m/%d/%y')
    df_final['month_year'] = df_final['Date'].dt.to_period('M')
    df_runtime = df_final[['runtimeMinutes', 'month_year']]

    # convert string number to integer under runtimeMinutes
    df_runtime['runtimeMinutes'] = df_runtime['runtimeMinutes'].replace(
        '\\N', np.nan).astype(float)

    # calculate the sum of runtime of each month
    month_group = df_runtime.groupby(['month_year'])
    sum_per_month = month_group['runtimeMinutes'].sum()

    # conver the series to dictionary
    dictionary = dict(zip(sum_per_month.index.format(), sum_per_month))
    return dictionary
