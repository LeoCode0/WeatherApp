import React from 'react';
import getData from '../util/getData'

import '../css/table.css'

class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            done: false,
            loading: true,
            data: undefined,
            error: false
        };
    };
    baseApi = 'https://api.openweathermap.org/data/2.5/weather?'
    key = ''
    API = `${this.baseApi}lat=20.3&lon=-97.97&appid=${this.key}`

    async componentDidMount(){
        let data = await getData(this.API)
        this.setState({
            done: true,
            loading: false,
            data: data,
            error: false
        });
    };

    convertKelvinToCelsius = (kelvin)=> {
        let celsius = kelvin - 273.15
        return `${celsius.toFixed(1)}°C`
    }

    windDirection = (deg) => {
        switch (true){
            case deg >= 0 | 360:
                return 'North'
            case deg > 0 && deg < 90:
                return 'Northeast'
            case deg === 90:
                return 'East'
            case deg > 90 && deg < 180:
                return 'Southeast'
            case deg === 180:
                return 'South'
            case deg > 180 && deg < 270:
                return 'Southwest'
            case deg === 270:
                return 'West'
            case deg > 270:
                return 'Northwest'
            default:
                return 'North'
        }
    }

    render(){
        if(this.state.done === false && this.state.loading === true){
            return <h1>Loading</h1>
        }
        
        if (this.state.done === true){
            const weather = this.state.data.weather[0]
            const main = this.state.data.main
            const coord = this.state.data.coord
            const image = `https://openweathermap.org/img/wn/${weather.icon}.png`
            const wind = this.state.data.wind
            const windDirection = this.windDirection(wind.deg)
            return(
                <React.Fragment>
                    <div className="weather center">
                        <div className="weather--container">
                            <img src={image} alt="Weather" className="weather--container__image"/>
                        </div>
                        <span>{weather.main}: {weather.description}</span>
                        <span className="">{this.convertKelvinToCelsius(main.temp)}</span>
                        <div className="">
                            <p className="">Wind direction: {windDirection} {wind.deg}°</p>
                            <span className="">Wind speed: {wind.speed} m/s</span>
                        </div>
                    </div>
                    <div className="table">
                        <div className="table__title">
                            <h1 className="table__title--h1 center">{this.state.data.name}</h1>
                        </div>
                        <div className="table__names">
                            <span className="table__names--span center">Temperature</span>
                            <span className="table__names--span center">Feels like</span>
                            <span className="table__names--span center">humidity</span>
                            <span className="table__names--span center">coordinates</span>
                            <span className="table__names--span center">coordinates</span>
                        </div>
                        <div className="table__values">
                            <span className="table__values--span center" >{this.convertKelvinToCelsius(main.temp)}</span>
                            <span className="table__values--span center" >{this.convertKelvinToCelsius(main.feels_like)}</span>
                            <span className="table__values--span center" >{main.humidity}%</span>
                            <span className="table__values--span center" >Longitude: {coord.lon}</span>
                            <span className="table__values--span center" >Latitude: {coord.lat}</span>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default Table;