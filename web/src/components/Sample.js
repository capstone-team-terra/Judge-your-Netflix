import React, { useState } from "react";
import { Container, Col, Row, Badge, Card } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import ShowsCount from "./resultsComponent/ShowsCount";
import GenresCount from "./resultsComponent/GenresCount";
import PopularityCount from "./resultsComponent/PopularityCount";
import RunTime from "./resultsComponent/RunTime";

const showData = {
  Friends: 300,
  "Shutter Island": 10,
  "Criminal Minds": 100,
  "Sherlock Holmes": 200,
  "Pans Labyrinth": 11,
  Merlin: 20,
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
  "2019-07": 800,
  "2019-08": 1094,
  "2019-09": 1800,
  "2019-10": 1294,
  "2019-11": 2098,
  "2019-12": 2400,
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
const popularityData = [20, 70, 10];

const Sample = () => {
  const [doneTyping, setTypingDone] = useState(false);

  const handleDone = () => {
    setTypingDone(true);
  };
  return (
    <Container className="text-center">
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
          <Row className="justify-content-center mt-5">
            <h2>Your score is 70 !</h2>
          </Row>
        )}
      </Container>
      <Container className="text-center">
        <Row>
          <Col md={6}>
            <Card className="text-dark mb-2">
              <Card.Header>Top Shows</Card.Header>
              <ShowsCount result={showData} />
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-dark mb-2">
              <Card.Header>View Hours</Card.Header>
              <RunTime result={timeData} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="text-dark mb-2">
              <Card.Header>Top Genre</Card.Header>
              <GenresCount result={genreData} />
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-dark mb-2">
              <Card.Header>Popularity</Card.Header>
              <PopularityCount result={popularityData} />
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Sample;
