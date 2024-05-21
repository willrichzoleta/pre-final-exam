import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './App2.css';


import mb from './IMG/mb7.webp';
import mb2 from './IMG/mb8.webp';
import mb3 from './IMG/mb5.webp';

function mbproducts(){
    return (
     
        <>

     <div className="container" justify-content> 
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis"> MOUNTAIN BIKES </h1>
    </div>

    <div className='row'>
    <div className='col'>
        <div className="card" style={{ width: "26rem" }}>
        <img src={mb}></img>
        <div className="card-body">
            <h5 className="card-title">GT Avalanche Comp 29</h5>
            <Link to="/login"><button className='form-control btn btn-outline-secondary' id='cmbcart'> Add to Cart </button> </Link>
        </div>
        </div>
    </div>

    <div className='col'>
        <div className="card" style={{ width: "26rem" }}>
        <img src={mb2}></img>
            <div className="card-body">
            <h5 className="card-title">GT Avalanche Sport 29</h5>
            <Link to="/login"> <button className='form-control btn btn-outline-secondary' id='spmbcart'> Add to Cart </button> </Link>
            </div>
        </div>
    </div>

    <div className='col'>
        <div className="card" style={{ width: "26rem" }}>
        <img src={mb3}></img>
            <div className="card-body">
            <h5 className="card-title"> Ammaco EVO IV </h5>
            <Link to="/login"> <button className='form-control btn btn-outline-secondary' id='embcart'> Add to Cart </button> </Link>
            </div>
        </div>
    </div>


    </div> 

    </div>
        
                </>
          );
}


export default mbproducts;