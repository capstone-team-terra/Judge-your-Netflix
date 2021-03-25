import React from "react";
import ShowsCount from "./ShowsCount";
import ViewCount from "./ViewCount";
import GenresCount from "./GenresCount";
import PopularityCount from "./PopularityCount";
import RunTime from "./RunTime";
import Typewriter from "typewriter-effect";

export class AllResults extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {},
      loaded: false,
      typed: false,
    };
    this.handleDoneTyping = this.handleDoneTyping.bind(this);
  }

  componentDidMount() {
    this.setState({ result: this.props.result, loaded: true });
  }
  handleDoneTyping() {
    this.setState({ typed: true });
  }
  render() {
    return this.state.typed ? (
      !this.state.loaded ? (
        "No results available at this moment!"
      ) : (
        <div>
          <h2>All Results</h2>
          <p>Based on your viewing history, you are {Math.ceil(25 + this.state.result.popularity.score)}% basic!</p>
          <ShowsCount result={this.state.result.views} />
          <ViewCount result={this.state.result.viewcount} />
          <RunTime result={this.state.result.runtime} />
          <GenresCount result={this.state.result.genres} />
          <PopularityCount result={this.state.result.popularity.percents} topShow={this.state.result.popularity.topShow} />
          <small>Want to learn more about the RoastFLIX algorithm? <a href='https://soundcloud.com/user-21005105-429685994/netflix-ba-boom' target='_blank'>Click Here</a></small>
        </div>
      )
    ) : (
      <div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("> Your Netflix was not bad.")
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "> Your Netflix was hot-topic-threw-up-on-you-awkward-middle-school-family-friendly-comedy bad."
              )
              .start()
              .pauseFor(2000)
              .deleteAll()
              .callFunction(() => {
                this.handleDoneTyping();
              });
          }}
          options={{
            delay: 35,
          }}
        />
      </div>
    );
  }
}

export default AllResults;
