import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './App2.css';

import rb from './IMG/rb2.jpg';
import rb2 from './IMG/rb7.webp';
import rb3 from './IMG/rb3.jpg';

function rbproducts(){
    return (
     
        <>

              <div className="container" justify-content> 
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis"> ROAD BIKES </h1>
    </div>

    <div className='row'>
    <div className='col'>
     <div className="card" style={{ width: "26rem" }}>
        <img src={rb2}></img>
        <div className="card-body">
            <h5 className="card-title">Pinarello Road Bike</h5>
            <Link to="/login"> <button className='form-control btn btn-outline-secondary' id='prbcart'> Add to Cart </button> </Link>
        </div>
        </div>
        
    </div>

    <div className='col'>
        <div className="card" style={{ width: "26rem" }}>
        <img src={rb}></img>
            <div className="card-body">
            <h5 className="card-title">DOLAN Road Bike</h5>
            <Link to="/login"> <button className='form-control btn btn-outline-secondary' id='drbcart'> Add to Cart </button> </Link>
            </div>
        </div>
    </div>

    <div className='col'>
        <div className="card" style={{ width: "26rem" }}>
        <img src={rb3}></img>
            <div className="card-body">
            <h5 className="card-title"> GINNT Road Bike </h5>
            <Link to="/login"> <button className='form-control btn btn-outline-secondary' id='grbcart'> Add to Cart </button> </Link>
            </div>
        </div>
    </div>


    </div> 

    </div>
        
                </>
          );
}


export default rbproducts;