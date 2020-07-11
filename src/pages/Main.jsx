import React from "react";
import getData from "../util/getData";

import Table from "../components/Table";
import GraphicWeather from "../components/GraphicWeather";
import NextDay from "../components/NextDay";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      loading: true,
      data: undefined,
      error: false,
    };
  }
  baseApi = "https://api.openweathermap.org/data/2.5/weather?";
  key = "dc74b6c12c387f6a0ccaa6cd0f1fd846";
  API = `${this.baseApi}lat=20.3&lon=-97.97&appid=${this.key}`;

  async componentDidMount() {
    let data = await getData(this.API);
    this.setState({
      done: true,
      loading: false,
      data: data,
      error: false,
    });
  }

  render() {
    if (this.state.done === false && this.state.loading === true) {
      return <h1>Loading</h1>;
    }

    if (this.state.done === true) {
      return (
        <React.Fragment>
          <GraphicWeather props={this.state.data} />
          <Table props={this.state.data} />
          <NextDay />
        </React.Fragment>
      );
    }
  }
}

export default Main;
