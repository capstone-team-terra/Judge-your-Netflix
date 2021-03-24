import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

export default function ViewCount(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //define yValues & xValues to be used with your chart
  const yValues = resultsArr.map((data) => data[1]);
  const xValues = resultsArr.map((data) => moment(data[0]).format("MMM YY"));

  //main data set for Graph
  const resultData = {
    labels: xValues,
    datasets: [
      {
        labels: "Your View Count",
        data: yValues,
        backgroundColor: "rgba(87, 121, 234, 0.6)",
        borderColor: "rgba(87, 121, 234, 0.6)",
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
      text: "Your View Count History",
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
      <div>
        <Line data={resultData} options={options} width={600} height={400} />
      </div>
    </div>
  );
}
