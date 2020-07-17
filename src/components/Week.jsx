import React from "react";
import getData from "../util/getData";
import Day from "./Day";

import Time from '../util/time'

import '../css/week.css'

class Week extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      data: undefined,
      error: false,
    };
  }

  
  async componentDidMount() {
    const lat = this.props.lat;
    const lon = this.props.lon;
    const baseApi = "https://api.openweathermap.org/data/2.5/forecast?";
    const key = "0d28130d18dabc0c8a5038cf0d28b917";
    const API = `${baseApi}lat=${lat}&lon=${lon}&appid=${key}`;
    let data = await getData(API);
    this.setState({
      done: true,
      data: data,
      error: false,
    });
  }

  render() {
    const day = Time()
    const nextDays = [Time(day.dateId + 1), Time(day.dateId + 2), Time(day.dateId + 3), Time(day.dateId + 4), Time(day.dateId + 5)]
    if (this.state.done === false) {
      return <h1>Loading</h1>;
    } 

    if (this.state.done === true) {
      const list = this.state.data.list;
      // const dates = list.map((x) => x.dt_txt.replace("-", " "));
      // console.log(dates)
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
