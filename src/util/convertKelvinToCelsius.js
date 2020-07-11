const convertKelvinToCelsius = (kelvin)=> {
    let celsius = kelvin - 273.15
    return `${celsius.toFixed(1)}°C`
}

export default convertKelvinToCelsius;