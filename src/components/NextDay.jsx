import React from "react";
import getData from "../util/getData";

class NextDay extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      data: undefined,
      error: false,
    };
  }
  baseApi = "https://api.openweathermap.org/data/2.5/forecast?";
  key = "";
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
      console.log(list[0]);
      return (
        <div className="card">
            {/* <span>Date {list[0].replace('-', ' ')}</span> */}
        </div>
        );
    }
  }
}

export default NextDay;
