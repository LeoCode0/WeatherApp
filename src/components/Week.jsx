import React from "react";
import getData from "../util/getData";
import Day from "./Day";

import Time from "../util/time";

import "../css/week.css";
import "../css/spinner.css";

class Week extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      data: undefined,
      error: false,
      latitude: null,
      longitude: null,
    };
  }

  baseApi = "https://api.openweathermap.org/data/2.5/forecast?";
  key = "0d28130d18dabc0c8a5038cf0d28b917";

  async componentDidMount() {
    const API = `${this.baseApi}lat=${this.props.lat}&lon=${this.props.lon}&appid=${this.key}`;
    let data = await getData(API);
    this.setState({
      done: true,
      data: data,
      error: false,
      longitude: this.props.lon,
      latitude: this.props.lat,
    });
  }

  update = async () => {
    const newLocation = `${this.baseApi}lat=${this.props.lat}&lon=${this.props.lon}&appid=${this.key}`;
    const data = await getData(newLocation);
    this.setState({
      done: true,
      data: data,
      longitude: this.props.lon,
      latitude: this.props.lat,
    });
  };

  render() {
    const day = Time();
    const nextDays = [
      Time(day.dateId + 1),
      Time(day.dateId + 2),
      Time(day.dateId + 3),
      Time(day.dateId + 4),
      Time(day.dateId + 5),
    ];
    if (this.state.done === false) {
      return (
        <div className="spinner">
          <div className="recta1"></div>
          <div className="recta2"></div>
          <div className="recta3"></div>
          <div className="recta4"></div>
          <div className="recta5"></div>
        </div>
      );
    }

    if (this.state.done === true && this.state.data) {
      if (
        this.state.latitude !== this.props.lat ||
        this.state.longitude !== this.props.lon
      ) {
        this.update()
      }
      const list = this.state.data.list;
      return (
        <div className="week">
          <Day weather={list[0]} day={nextDays[0]} />
          <Day weather={list[8]} day={nextDays[1]} />
          <Day weather={list[16]} day={nextDays[2]} />
          <Day weather={list[24]} day={nextDays[3]} />
          <Day weather={list[32]} day={nextDays[4]} />
        </div>
      );
    }
  }
}

export default Week;
