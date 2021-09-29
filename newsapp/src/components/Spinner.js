import React, { Component } from 'react';
import loader from './loader.gif';

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-5" style={{height: "65vh", display: "grid", placeItems: "center"}}>
                <img src={loader} alt="loading" />
            </div>
        )
    }
}

export default Spinner
