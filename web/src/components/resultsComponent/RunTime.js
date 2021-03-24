import React from "react";
import { Line } from "react-chartjs-2";

export default function RunTime(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //total view time
  const sumMin = Object.keys(result).reduce((acc, key) => acc + result[key], 0);
  const sumHrs = Math.ceil(sumMin / 60);
  const sumDays = Math.ceil(sumHrs / 24);
  const sumMonth = Math.ceil(sumDays / 30);
  const sumYear = Math.ceil(sumMonth / 12);

  //define yValues & xValues to be used with your chart
  const xValues = resultsArr.map((data) => data[0]);
  const yValues = resultsArr.map((data) => Math.ceil(data[1] / 60));

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
        labels: "Total watch time (in minutes) per month",
        data: yValues,
        backgroundColor: "rgba(87, 20, 200, 0.6)",
        borderColor: "rgba(87, 20, 200, 0.6)",
        pointHoverRadius: 20,
        pointHoverBorderWidth: 5,
      },
    ],
  };

  //option for Graph
  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Your run time History",
      fontSize: 25,
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "total view time (hours)",
          },
        },
      ],
    },
  };
  return (
    <div>
      <h3>
        You watched total of <span style={{ color: "red" }}>{sumHrs}</span>{" "}
        hours worth of Netflix shows since you signed up....{" "}
      </h3>
      <p>
        That is about <span style={{ color: "red" }}>{sumDays}</span> days....
      </p>
      <p>
        Or,
        <span style={{ color: "red" }}>{sumMonth}</span> months....
      </p>
      <p>
        Or,
        <span style={{ color: "red" }}>{sumYear}</span> years....
      </p>
      <div>
        <Line data={resultData} options={options} width={600} height={400} />
      </div>
    </div>
  );
}
