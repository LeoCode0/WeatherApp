const getData = async(api) => {
    try{
        let response = await fetch(api)
        let json = await response.json()
        return json
    }catch(error){
        console.error(`Ocurrio un error ${error.name}`)
    }

}

export default getData;