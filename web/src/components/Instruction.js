import React from "react";
import { Card, Container } from "react-bootstrap";
import YouTube from "react-youtube";

//Instruction Youtube link & ID:
//ID: kmADyI4IOd4
//URL: https://youtu.be/kmADyI4IOd4

const Instruction = () => {
  const VideoOnReady = (event) => {
    event.target.stopVideo();
  };

  const videoOptions = {
    height: "390",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Container className="text-center">
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          Please follow below instruction below to download your viewing history{" "}
          <br />
          from your Netflix account and upload it here
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-chevron-compact-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
          />
        </svg>
      </div>
      <Card className="mb-5">
        <Card.Body>
          <Card.Text className="text-dark text-left">
            <ol>
              <li>
                Go to your{" "}
                <a href="https://www.netflix.com/YourAccount">
                  Netflix Account{" "}
                </a>
                page.
              </li>
              <li>
                Select the profile you want to see and open Viewing Activity
              </li>
              <li>Click "Download All" to get csv file</li>
              <li>Save the csv file locally and upload below</li>
            </ol>
          </Card.Text>
          <YouTube
            videoId="kmADyI4IOd4"
            opts={videoOptions}
            onReady={VideoOnReady}
          />{" "}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Instruction;
