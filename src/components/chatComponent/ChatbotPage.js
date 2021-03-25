import React from "react";
import AllResults from "../resultsComponent/AllResults";
import ChatBot from "react-simple-chatbot";
const steps = [
  {
    id: "0",
    message: "We judge your Netflix taste.",
    trigger: "1",
  },
  {
    id: "1",
    message: "Bye!",
    end: true,
  },
];
class ChatbotPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({ result: this.props.result });
  }
  handleClick() {
    this.setState({ clicked: true });
  }
  render() {
    return this.state.clicked ? (
      <AllResults result={this.state.result} />
    ) : (
      <div>
        <h2>Rendering Chatbot!</h2>
        <ChatBot steps={steps} />
        <button type="button" onClick={this.handleClick}>
          Get Your Results!
        </button>
      </div>
    );
  }
}
export default ChatbotPage;
