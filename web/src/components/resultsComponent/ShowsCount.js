import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export default function ShowsCount(props) {
  const { result } = props;

  //convert data object to arrays
  const resultsArr = Object.entries(result);

  //sort the data to small to large
  const sorted = resultsArr.sort((a, b) => b[1] - a[1]);

  //filter only the top 20 most viewed shows/movies
  const limitToTopTwenty = sorted.slice(-20);

  const top1Name = limitToTopTwenty[0][0];
  const top1Count = limitToTopTwenty[0][1];
  const top2Name = limitToTopTwenty[1][0];
  const top2Count = limitToTopTwenty[1][1];
  const top3Name = limitToTopTwenty[2][0];
  const top3Count = limitToTopTwenty[2][1];

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
      text: "Which shows do you watch the most?",
      fontSize: 20,
      fontColor: "rgb(224, 228, 228)",
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
            fontColor: "rgb(224, 228, 228)",
          },
          ticks: {
            fontColor: "rgb(224, 228, 228)",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            fontColor: "rgb(224, 228, 228)",
          },
          ticks: {
            fontColor: "rgb(224, 228, 228)",
          },
        },
      ],
    },
  };
  return (
    <Card
      style={{
        backgroundColor: "rgb(34, 36, 41)",
        boxShadow: "0 0 6px rgba(0, 0, 0, 0.1)",
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%, -50%)",
        maxWidth: "500px",
        height: "500px",
        borderRadius: "10px",
        overflow: "hidden",
        paddingTop: "1em",
        paddingBotton: "2em",
        color: "rgb(224, 228, 228)",
      }}
    >
      <div
        className="about"
        style={{ height: "150px", padding: "20px", boxSizing: "border-box" }}
      >
        {/* <h1 style={{ fontSize: "20px" }}>
          You watched <strong>{top1Name}</strong>{" "}
          <span style={{ color: "red" }}>{top1Count}</span> times!
        </h1> */}
        <div>
          <HorizontalBar
            data={resultData}
            options={options}
            width={500}
            height={250}
          />
        </div>
        {/* <h2 style={{ fontSize: "15px" }}>Your Top 3 Most Viewed Shows</h2>
        <p style={{ fontSize: "15px" }}>
          {top1Name}: {top1Count} <br />
          {top2Name} : {top2Count}
          <br />
          {top3Name}: {top3Count}
        </p> */}
      </div>
    </Card>
  );
}
