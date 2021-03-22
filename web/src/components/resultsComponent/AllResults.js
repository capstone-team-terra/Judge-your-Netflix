import React from "react";
import ShowsCount from "./ShowsCount";
import ViewCount from "./ViewCount";
import GenresCount from "./GenresCount";
import PopularityCount from "./PopularityCount";
import RunTime from "./RunTime";

export class AllResults extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {},
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({ result: this.props.result, loaded: true });
  }

  render() {
    if (!this.state.loaded) {
      return "No results available at this moment!";
    }

    return (
      <div>
        <h2>All Results</h2>
        <ShowsCount result={this.state.result.views} />
        <ViewCount result={this.state.result.viewcount} />
        <RunTime result={this.state.result.runtime} />
        <GenresCount result={this.state.result.genres} />
        <PopularityCount result={this.state.result.popularity} />
      </div>
    );
  }
}

export default AllResults;