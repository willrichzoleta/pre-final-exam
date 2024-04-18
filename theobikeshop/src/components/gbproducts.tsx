import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import './App2.css';


import gb1 from './IMG/gb8.webp';
import gb2 from './IMG/gb7.webp';
import gb3 from './IMG/gb6.webp';


function gbproducts(){
    return (
     
        <>

              <div className="container" justify-content> 
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis"> GRAVEL BIKES </h1>
    </div>

    <div className='row'>
    <div className='col'>
        <div className="card" style={{ width: "26rem" }}>
        <img src={gb1}></img>
        <div className="card-body">
            <h5 className="card-title">Solo C50 Sram</h5>
            <Link to="/login"> <button className='form-control btn btn-outline-secondary' id='cgbcart1'> Add to Cart </button>  </Link>
        </div>
        </div>
    </div>

    <div className='col'>
        <div className="card" style={{ width: "26rem" }}>
        <img src={gb2}></img>
            <div className="card-body">
            <h5 className="card-title">Solo C90 Sram</h5>
            <Link to="/login"> <button className='form-control btn btn-outline-secondary' id='cgbcart2'> Add to Cart </button>  </Link>
            </div>
        </div>
    </div>

    <div className='col'>
        <div className="card" style={{ width: "26rem" }}>
        <img src={gb3}></img>
            <div className="card-body">
            <h5 className="card-title"> Solo A50 Sram </h5>
            <Link to="/login"> <button className='form-control btn btn-outline-secondary' id='agbcart'> Add to Cart </button>  </Link>
            </div>
        </div>
    </div>


    </div> 

    </div>
        
                </>
          );
}


export default gbproducts;