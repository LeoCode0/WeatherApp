import React from "react";
import getData from "../util/getData";

import HighLights from "../components/HighLights";
import Week from "../components/Week";
import CurrentDay from '../components/CurrentDay';
import Container from '../components/Container'

import '../css/principal.css'

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
  key = "0d28130d18dabc0c8a5038cf0d28b917";
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

  //Cambiar props de componente week

  render() {
    if (this.state.done === false && this.state.loading === true) {
      return <h1>Loading</h1>;
    }

    if (this.state.done === true) {
      return (
        <main className="principal">
          <CurrentDay />
          <Container />
          {/* <GraphicWeather props={this.state.data} />
          <HighLights props={this.state.data} />
          <Week /> */}
        </main>
        
      );
    }
  }
}

export default Main;
