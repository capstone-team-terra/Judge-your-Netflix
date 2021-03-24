import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

export default function RunTime(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //total view time
  const sumMin = Object.keys(result).reduce((acc, key) => acc + result[key], 0);
  const sumHrs = Math.floor(sumMin / 60);
  const sumDays = Math.floor(sumHrs / 24);
  const sumMonth = Math.floor(sumDays / 30);
  const sumYear = Math.floor(sumMonth / 12);

  //define yValues & xValues to be used with your chart
  const xValues = resultsArr.map((data) => moment(data[0]).format("MMM YY"));
  const yValues = resultsArr.map((data) => Math.ceil(data[1] / 60));

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
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
      text: "Total Hours of Shows You Watched",
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
            labelString: "total view time (per hours)",
          },
        },
      ],
    },
  };
  return (
    <div>
      <h4>
        You watched total of <span style={{ color: "red" }}>{sumHrs}</span>{" "}
        hours worth of Netflix shows since you signed up....{" "}
      </h4>
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
