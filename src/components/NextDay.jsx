import React from "react";
import getData from "../util/getData";

class NextDay extends React.Component{
    constructor(){
        super();
        this.state = {
            done: false,
            data: undefined,
            error: false
        }
    }
    // key=''


    render(){
        return(
            <h1>Hi</h1>
        )
    }
}

export default NextDay;
