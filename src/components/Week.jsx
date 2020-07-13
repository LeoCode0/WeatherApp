import React from "react";
import getData from "../util/getData";
import Day from "./Day";

class Week extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      data: undefined,
      error: false,
    };
  }
  baseApi = "https://api.openweathermap.org/data/2.5/forecast?";
  key = "0d28130d18dabc0c8a5038cf0d28b917";
  API = `${this.baseApi}lat=20.3&lon=-97.97&appid=${this.key}`;

  async componentDidMount() {
    let data = await getData(this.API);
    this.setState({
      done: true,
      data: data,
      error: false,
    });
  }

  render() {
    if (this.state.done === false) {
      return <h1>Loading</h1>;
    }

    if (this.state.done === true) {
      console.log(this.state.data);
      const list = this.state.data.list;
      const dates = list.map((x) => x.dt_txt.replace("-", " "));
      console.log(dates)
      return (
        <div className="week">
          <h1>Days</h1>
          {/* <Day date={dates[3]} list={list[3]} />
          <Day date={dates[11]} list={list[11]} />
          <Day date={dates[19]} list={list[19]} />
          <Day date={dates[27]} list={list[27]} />
          <Day date={dates[35]} list={list[35]} /> */}
        </div>
      );
    }
  }
}

export default Week;
