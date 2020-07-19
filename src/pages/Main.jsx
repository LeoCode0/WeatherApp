import React from "react";
import getData from "../util/getData";

import CurrentDay from "../components/CurrentDay";
import Container from "../components/Container";
import Modal from "../components/Modal";
import Loader from "../components/Loader";

import "../css/principal.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false,
      loading: true,
      data: undefined,
      error: false,
      modal: false,
      latitude: null,
      longitude: null,
    };
  }
  city = "mexico";
  baseApi = "https://api.openweathermap.org/data/2.5/weather?q=";
  key = "&appid=0d28130d18dabc0c8a5038cf0d28b917";
  API = `${this.baseApi}${this.city}${this.key}`;

  async componentDidMount() {
    let data = await getData(this.API);
    this.setState({
      done: true,
      loading: false,
      data: data,
      error: null,
    });
  }

  localLatitude;
  localLongitude;

  getGeolocation = async () => {
    let error;
    if (this.localLatitude === undefined && this.localLongitude === undefined) {
      navigator.geolocation.getCurrentPosition(
        async (objPosition) => {
          this.localLatitude = objPosition.coords.latitude;
          this.localLongitude = objPosition.coords.longitude;
          this.localLongitude = this.localLongitude.toFixed(2);
          this.localLatitude = this.localLatitude.toFixed(2);
          const newLocation = await getData(
            `https://api.openweathermap.org/data/2.5/weather?lat=${this.localLatitude}&lon=${this.localLongitude}${this.key}`
          );
          this.city = newLocation.name.replace(/ /gi, "+");
          this.setState({
            data: newLocation,
            error: false,
            latitude: this.localLatitude,
            longitude: this.localLongitude,
          });
        },
        (objPositionError) => {
          error = objPositionError;
          this.setState({
            error: error,
            modal: true,
          });
        }
      );
    } else {
      const local = await getData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.localLatitude}&lon=${this.localLongitude}${this.key}`
      );
      this.setState({
        data: local,
      });
    }
  };

  sendNotifications = async () => {
    if (this.localLatitude && this.localLongitude) {
      const permission = await Notification.requestPermission();
      const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.localLatitude}&lon=${this.localLongitude}&
      exclude=daily${this.key}`;
      const data = await getData(api);
      const title = "weather in next 4 hours";
      const time = data.hourly[1].weather[0];
      const hours = new Date()
      const config = {
        body: `
        ${time.main}: ${time.description} ${hours.getHours() + 1}:${hours.getMinutes()}
        ${data.hourly[2].weather[0].main}: ${data.hourly[2].weather[0].description} ${hours.getHours() + 2}:${hours.getMinutes()}
        ${data.hourly[3].weather[0].main}: ${data.hourly[3].weather[0].description} ${hours.getHours() + 3}:${hours.getMinutes()}
        ${data.hourly[4].weather[0].main}: ${data.hourly[4].weather[0].description} ${hours.getHours() + 4}:${hours.getMinutes()}
        `,
        icon: `https://openweathermap.org/img/wn/${time.icon}.png`,
      };
      const n = new Notification(title, config);
    } else {
      let noUbication = new Error(11);
      this.setState({
        error: noUbication,
        modal: true,
      });
    }
  };

  handleChange = (e) => {
    this.city = e.target.value;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let anotherCity = this.city.replace(/ /gi, "+");

    this.setState({
      loading: true,
      error: null,
    });

    this.API = `${this.baseApi}${anotherCity}${this.key}`;
    const newLocation = await getData(this.API);
    // eslint-disable-next-line eqeqeq
    if (newLocation.cod != 200) {
      const error = new Error(newLocation.message);
      this.setState({
        loading: false,
        done: true,
        data: this.state.data,
        error: error,
        modal: true,
      });
    } else {
      this.setState({
        loading: false,
        done: true,
        data: newLocation,
        error: null,
        latitude: newLocation.coord.lat,
        longitude: newLocation.coord.lon,
      });
    }
  };

  handleModal = () => {
    this.setState({
      modal: false,
    });
  };

  render() {
    if (this.state.done === false && this.state.loading === true) {
      return <Loader />;
    }

    if (this.state.done === true) {
      return (
        <main className="principal">
          <CurrentDay
            props={this.state.data}
            clickHandler={this.handleSubmit}
            handleChange={this.handleChange}
            handleLocation={this.getGeolocation}
            handleNotification={this.sendNotifications}
          />
          <Container props={this.state.data} />
          <Modal
            error={this.state.error}
            modal={this.state.modal}
            handleModal={this.handleModal}
          />
        </main>
      );
    }
  }
}

export default Main;
