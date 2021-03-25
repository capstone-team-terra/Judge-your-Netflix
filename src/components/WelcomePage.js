import React from "react";
import UploadPage from "./UploadPage";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const snd = new Audio("https://firebasestorage.googleapis.com/v0/b/test-e5975.appspot.com/o/Netflix-Intro.wav?alt=media&token=c51293bc-06c4-40dd-b55d-867dd01b3472"); // buffers automatically when created
    snd.play();

    this.setState({ clicked: true });
  }

  render() {
    console.log("state in welcomePage", this.state);
    return (
      <div>
        {this.state.clicked ? (
          <UploadPage />
        ) : (
          <div>
            <h2>Welcome Page</h2>
            <button type="button" onClick={this.handleClick}>
              Find Out
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default WelcomePage;
