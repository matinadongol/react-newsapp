import React from 'react';
import loader from './loader.gif';

const Spinner = () => {
    return (
        <div className="text-center my-5" style={{ display: "grid", placeItems: "center" }}>
            <img src={loader} alt="loading" />
        </div>
    )
}

export default Spinner
