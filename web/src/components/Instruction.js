import React from "react";
import { Card, Container } from "react-bootstrap";

const Instruction = () => {
  return (
    <Container className="text-center">
      <p>Rendering Instruction Page</p>
      <Card className="mb-5">
        <Card.Body>
          <Card.Text className="text-dark text-left">
            <ol>
              <li>
                Go to your Netflix
                <a href="https://www.netflix.com/YourAccount"> Account </a>{" "}
                page.
              </li>
              <li>
                Open the Profile & Parental Controls settings for the profile
                you want to see.
              </li>
              <li>Open Viewing activity. </li>
              <li>If you see a limited list, use the Show More button.</li>
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Instruction;
