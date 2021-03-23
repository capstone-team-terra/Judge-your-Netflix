import React from "react";
import AllResults from "../resultsComponent/AllResults";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
const theme = {
  background: "#000000",
  headerBgColor: "#000000",
  headerFontColor: "#000000",
  headerFontSize: "15px",
  botBubbleColor: "#000000",
  botFontColor: "#fff",
  userBubbleColor: "#000000",
  userFontColor: "#fff",
  fontFamily: "Noto Sans JP",
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
      // { id: "7", component: <AllResults result={this.state.result} /> },
    ];
    return this.state.clicked ? (
      <AllResults result={this.state.result} />
    ) : (
      <div>
        <ThemeProvider theme={theme}>
          <ChatBot
            steps={steps}
            width="800px"
            placeholder=" "
            hideBotAvatar="true"
            hideHeader="true"
            hideUserAvatar="true"
            hideInput="true"
            delay="50"
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
