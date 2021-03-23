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
        message:
          "Hey. I'm ANDY (they/them). You might know us from our hit single 'Netflix Ba-Bum' available for streaming on SoundCloud now.",
        trigger: "2",
        delay: 3000,
      },
      {
        id: "2",
        message:
          "Listen... I have been looking at your Netflix viewing history and um...",
        trigger: "3",
        delay: 3000,
      },
      {
        id: "3",
        message: "...it's something.",
        trigger: "4",
        delay: 4000,
      },
      {
        id: "4",
        options: [
          {
            value: 1,
            label: "I share this profile with someone.",
            trigger: "5",
          },
          { value: 2, label: "Excuse me?", trigger: "4" },
        ],
      },
      {
        id: "5",
        message: "lol ok.",
        trigger: "6",
      },
      {
        id: "6",
        message: `I can tell you are the type to run away from your responsibilities and problems based on how others view you.`,
        trigger: "7",
      },
      {
        id: "7",
        component: (
          <button type="button" onClick={this.handleClick}>
            Get Your Results!
          </button>
        ),
        end: true,
      },
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
            delay="20"
            userDelay="2000"
          />
        </ThemeProvider>
      </div>
    );
  }
}
export default ChatbotPage;
