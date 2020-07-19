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
    this.getGeolocation()
  }

  async getGeolocation() {
    let latitude;
    let longitude;
    let error;

    navigator.geolocation.getCurrentPosition(
      async (objPosition) => {
        latitude = objPosition.coords.latitude;
        longitude = objPosition.coords.longitude;
        longitude = longitude.toFixed(2)
        latitude = latitude.toFixed(2)
        const newLocation = await getData(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}${this.key}`)
        this.setState({
          data: newLocation,
          error: false
        })
      },
      (objPositionError) => {
        error = objPositionError;
        this.setState({
          error: error,
          modal: true
        })
      }
    );
  }


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
