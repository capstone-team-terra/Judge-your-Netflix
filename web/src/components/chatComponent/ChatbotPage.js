import React from "react";
import AllResults from "../resultsComponent/AllResults";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#282c34",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#282c34",
  headerFontColor: "#282c34",
  headerFontSize: "15px",
  botBubbleColor: "#282c34",
  botFontColor: "#fff",
  userBubbleColor: "#282c34",
  userFontColor: "#4a4a4a",
};
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
    const genresCount = this.props.result.genres;
    const resultsArr = Object.entries(genresCount);
    const sorted = resultsArr.sort((a, b) => b[1] - a[1]);
    const steps = [
      {
        id: "1",
        message: "Are you ready for some serious roasting time?",
        trigger: "2",
      },
      {
        id: "2",
        options: [{ value: 1, label: "Yes go ahead!", trigger: "3" }],
      },
      {
        id: "3",
        message: "Okay. Let me see... ",
        trigger: "4",
      },
      {
        id: "4",
        message: `Did you really watch ${sorted[0][1]} ${sorted[0][0]} shows?`,
        trigger: "5",
      },
      {
        id: "5",
        options: [{ value: 1, label: "I guess so... Why?", trigger: "6" }],
      },
      { id: "6", message: "Nothing...", end: true },
    ];
    return this.state.clicked ? (
      <AllResults result={this.state.result} />
    ) : (
      <div>
        <h2>Rendering Chatbot!</h2>
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps}
            width="1000px"
            placeholder=" "
            hideBotAvatar="true"
            hideHeader="true"
            hideUserAvatar="true"
          />
        </ThemeProvider>

        <button type="button" onClick={this.handleClick}>
          Get Your Results!
        </button>
      </div>
    );
  }
}
export default ChatbotPage;
