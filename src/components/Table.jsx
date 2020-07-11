import React from 'react';
import GraphicWeather from './GraphicWeather';
import getData from '../util/getData';
import convertKelvinToCelsius from '../util/convertKelvinToCelsius';
import '../css/table.css';

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
    key = 'dc74b6c12c387f6a0ccaa6cd0f1fd846'
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

    render(){
        if(this.state.done === false && this.state.loading === true){
            return <h1>Loading</h1>
        }
        
        if (this.state.done === true){
            const main = this.state.data.main
            const coord = this.state.data.coord
            return(
                <React.Fragment>
                    <h1 className="table__title--h1 center">{this.state.data.name}</h1>
                    <GraphicWeather props={this.state.data}/>
                    <div className="table">
                        <div className="table__names">
                            <span className="table__names--span center">Temperature</span>
                            <span className="table__names--span center">Feels like</span>
                            <span className="table__names--span center">humidity</span>
                            <span className="table__names--span center">coordinates</span>
                            <span className="table__names--span center">coordinates</span>
                        </div>
                        <div className="table__values">
                            <span className="table__values--span center" >{convertKelvinToCelsius(main.temp)}</span>
                            <span className="table__values--span center" >{convertKelvinToCelsius(main.feels_like)}</span>
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