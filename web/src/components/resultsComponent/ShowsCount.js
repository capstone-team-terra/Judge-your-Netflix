import React from "react";
import { Bar } from "react-chartjs-2";

export default function ShowsCount(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //sort the data to small to large
  const sorted = resultsArr.sort((a, b) => a[1] - b[1]);

  //filter only the top 20 most viewed shows/movies
  const limitToTopTwenty = sorted.slice(-20);

  //define yValues & xValues to be used with your chart
  const yValues = limitToTopTwenty.map((data) => data[1]);
  const xValues = limitToTopTwenty.map((data) => data[0]);

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        backgroundColor: "rgba(234, 87, 102, 0.6)",
        borderColor: "rgba(234, 87, 102, 0.6)",
      },
    ],
  };

  //option for Graph
  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Your Top Viewed Shows",
      fontSize: 25,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "total view count (per watch event)",
          },
        },
      ],
    },
  };
  return (
    <div>
      <h4>
        You watched{" "}
        <span style={{ color: "blue" }}>"{sorted[sorted.length - 1][0]}"</span>{" "}
        <span style={{ color: "red" }}>{sorted[sorted.length - 1][1]}</span>{" "}
        times!
      </h4>
      <h4 style={{ textAlign: "center" }}>Top 3 Results</h4>
      <ol
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        <li>
          {sorted[sorted.length - 1][0]}: {sorted[sorted.length - 1][1]}
        </li>
        <li>
          {sorted[sorted.length - 2][0]} : {sorted[sorted.length - 2][1]}
        </li>
        <li>
          {sorted[sorted.length - 3][0]}: {sorted[sorted.length - 3][1]}
        </li>
      </ol>
      <div>
        <Bar data={resultData} options={options} width={600} height={400} />
      </div>
    </div>
  );
}
