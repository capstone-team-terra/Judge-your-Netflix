import React from "react";
import ChatbotPage from "./chatComponent/ChatbotPage";
import Typewriter from "typewriter-effect";

class UploadPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      loaded: false,
      Loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState({ loading: true, loaded: false, result: {} });
    const data = new FormData();
    data.append("submission", e.target[0].files[0]);
    const res = await fetch("http://127.0.0.1:3145/handleUpload", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: data,
    });
    var jsonRes = await res.json();
    console.log(jsonRes);
    this.setState({ loaded: true, result: jsonRes, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <ChatbotPage result={this.state.result} />
        ) : this.state.loading ? (
          <div>
            <img
              alt="loading"
              src="https://data.whicdn.com/images/325605417/original.gif"
            />
            <Typewriter
              options={{
                delay: 20,
                deleteSpeed: 10,
                strings: [
                  "Analyzing your watching history...",
                  "lol",
                  "omg",
                  "okay hold up",
                ],
                autoStart: true,
              }}
            />
          </div>
        ) : (
          <form
            action="/handleUpload"
            method="post"
            encType="multipart/form-data"
            onSubmit={this.handleSubmit}
          >
            Choose the file: <input type="file" name="submission" /> <br />
            <input type="submit" value="Upload" />
          </form>
        )}
      </div>
    );
  }
}
export default UploadPage;
