import React, { useState } from "react";
import { Container, Col, Row, Badge, Button } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import ShowsCount from "./resultsComponent/ShowsCount";
import GenresCount from "./resultsComponent/GenresCount";
import PopularityCount from "./resultsComponent/PopularityCount";
import RunTime from "./resultsComponent/RunTime";
import ViewTime from "./resultsComponent/ViewCount";
import UploadPage from "./UploadPage";
const showData = {
  Friends: 300,
  "Shutter Island": 10,
  "Criminal Minds": 100,
  "Sherlock Holmes": 200,
  "Pans Labyrinth": 11,
  "The Witcher": 20,
  "The Croods": 1,
  "Breaking Bad": 50,
};
const genreData = {
  Action: 1,
  Comedy: 1,
  Fantasy: 2,
  Animation: 1,
  Drama: 1,
  Crime: 3,
};
const timeData = {
  "2020-01": 3055,
  "2020-02": 2405,
  "2020-03": 3840,
  "2020-04": 2500,
  "2020-05": 3343,
  "2020-06": 2854,
  "2020-07": 4200,
  "2020-08": 2900,
  "2020-09": 2570,
  "2020-10": 2700,
  "2020-11": 2999,
  "2020-12": 2400,
  "2021-01": 3300,
  "2021-02": 4050,
  "2021-03": 4500,
};
const viewCountData = {
  "2020-01": 120,
  "2020-02": 300,
  "2020-03": 100,
  "2020-04": 90,
  "2020-05": 40,
  "2020-06": 50,
  "2020-07": 160,
  "2020-08": 80,
  "2020-09": 260,
  "2020-10": 150,
  "2020-11": 290,
  "2020-12": 390,
  "2021-01": 200,
  "2021-02": 120,
  "2021-03": 180,
};
const popularityData = [20, 70, 10];
const Sample = () => {
  const [doneTyping, setTypingDone] = useState(false);
  const [yesButton, setYesButton] = useState(false);
  const handleDone = () => {
    setTypingDone(true);
  };
  const handleYesButton = () => {
    setYesButton(true);
  };
  return (
    <div>
      {yesButton ? (
        <UploadPage />
      ) : (
        <Container fluid>
          <Container className="text-center" style={{ height: "100vh" }}>
            <h1 className="netflix-red mt-5 mb-5">
              Your Netflix Analysis <Badge variant="warning">Sample</Badge>
            </h1>
            <Row className="justify-content-center">
              <Col>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Analyzing sample data...")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Generating the score...")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Done.")
                      .pauseFor(2500)
                      .callFunction(() => {
                        handleDone();
                      })
                      .start();
                  }}
                  options={{
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </Col>
            </Row>
            {doneTyping && (
              <Row className="justify-content-center mt-5 mb-5">
                <Col>
                  <h2>Your score is {70} !</h2>
                </Col>
                <Col md={12} className="mt-5">
                  <h5>Scroll down to see your results</h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-chevron-compact-down mt-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                    />
                  </svg>
                </Col>
              </Row>
            )}
          </Container>
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={5}>
                <ShowsCount result={showData} />
              </Col>
              <Col md={5}>
                <RunTime result={timeData} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={5}>
                <ViewTime result={viewCountData} />
              </Col>
              <Col md={5}>
                <GenresCount result={genreData} />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={12}>
                <PopularityCount result={popularityData} />
              </Col>
            </Row>
          </Container>
          <Container className="mb-5 mt-5">
            <Row className="justify-content-end">
              <Col md={5}>
                <h1 style={{ fontSize: 30 }}>
                  Ready to try with your own data?
                </h1>
              </Col>
              <Col md={2}>
                <Button variant="outline-light" onClick={handleYesButton}>
                  Yes !
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </div>
  );
};
export default Sample;
