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
      <Card className="mb-5">
        <Card.Body className="text-dark text-left">
          <ol>
            <li>
              Go to your{" "}
              <a href="https://www.netflix.com/YourAccount">Netflix Account </a>
              page.
            </li>
            <li>
              Select the profile you want to see and open Viewing Activity
            </li>
            <li>Click "Download All" to get csv file</li>
            <li>Save the csv file locally and upload above</li>
          </ol>
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
