import React from "react";
import getData from "../util/getData";

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
    // this.handleChange = this.handleChange.bind(this)
  }
  city = 'xicotepec+de+juarez'
  baseApi = "https://api.openweathermap.org/data/2.5/weather?";
  key = "0d28130d18dabc0c8a5038cf0d28b917";
  API = `${this.baseApi}q=${this.city}&appid=${this.key}`;

  async componentDidMount() {
    let data = await getData(this.API);
    this.setState({
      done: true,
      loading: false,
      data: data,
      error: false,
      city: 'xicotepec+de+juarez',
    });
  }

  handleChange = (e) =>{
    this.city = e.target.value
    console.log(this.city)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.city)
    let ns = this.city.replace(/ /gi, '+')
    console.log(ns)
  }

  render() {
    if (this.state.done === false && this.state.loading === true) {
      return <h1>Loading</h1>;
    }

    console.log(this.state.data)

    if (this.state.done === true) {
      return (
        <main className="principal">
          <CurrentDay props={this.state.data} clickHandler={this.handleSubmit} handleChange={this.handleChange}/>
          <Container props={this.state.data} />
        </main>
        
      );
    }
  }
}

export default Main;
