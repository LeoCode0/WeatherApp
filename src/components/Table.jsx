import React from 'react';
import '../css/table.css'


class Table extends React.Component{
    render(){
        return(
            <div className="table">
                <div className="table__title">
                    <h1 className="table__title--h1 center">Weather in </h1>
                </div>
                <div className="table__names">
                    <span className="table__names--span center">index</span>
                    <span className="table__names--span center">index</span>
                    <span className="table__names--span center">index</span>
                    <span className="table__names--span center">index</span>
                </div>
                <div className="table__values">
                    <span className="table__values--span center" >value</span>
                    <span className="table__values--span center" >value</span>
                    <span className="table__values--span center" >value</span>
                    <span className="table__values--span center" >value</span>
                </div>
            </div>
        )
    }
}

export default Table;