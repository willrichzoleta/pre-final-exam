import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App2.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import gb from './IMG/gb4.jpg';
import mb from './IMG/mb4.webp';
import abtus from './IMG/abtus2.jpg';
import rb2 from './IMG/rb9.jpg';

const Home = () => {
    return (
        <>

    <div className="banner">
    <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Theo's Bike Shop</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Where every ride is an adventure waiting to happen! <br />
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

            </div>
        </div>
    </div>

    </div>


    <div className="container">
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis"> ABOUT US </h1>

    <p className="col-lg-6 mx-auto"> Theo's Bike Shop opened its doors on March 1, 2024. Owner and Founder, Theodore Aguilo, sought to create a community-minded business that combined his passion with biking, his dedication to fitness, and his passion for environmentalism. </p>

    </div>
    </div>  

    <img src={abtus} className='img-fluid'></img>

    <div className="container" justify-content> 
    <div className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold text-body-emphasis"> LATEST PRODUCT </h1>
    </div>

    <div className='row'>
    <div className='col'>
    <Link to="/rbproducts">  <div className="card" style={{ width: "26rem" }}>
        <img src={rb2}></img>
        <div className="card-body">
            <h5 className="card-title">ROAD BIKE </h5>
        </div>
        </div>
        </Link>
    </div>

    <div className='col'>
    <Link to="/mbproducts"> <div className="card" style={{ width: "26rem" }}> 
        <img src={mb}></img>
            <div className="card-body">
            <h5 className="card-title">MOUNTAIN BIKE</h5>
            </div>
        </div>
        </Link>
    </div>

    <div className='col'>
    <Link to="/gbproducts">  <div className="card" style={{ width: "26rem" }}>
        <img src={gb}></img>
            <div className="card-body">
            <h5 className="card-title"> GRAVEL BIKE </h5>
            </div>
        </div>
        </Link>
    </div>


    </div> 

    </div>

    <br />
    <br />

    <div className="container"/>
        
        <div className="row align-items-center">
           
            <div className="col-md-6">
                <h3>Contact Information</h3>
                <p>Email: theobikeshop@gmail.com</p>
                <p>Phone: +639612983430</p>
                <p>Address: Cabangan, Zambales</p>
            </div>
            
            <div className="col-md-6">
                <p>Follow Us: </p>
                    <a href="https://www.facebook.com/example">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="gray" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/example">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="gray" className="bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/example">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="gray" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1"/>
                        </svg>
                    </a>

                </div>
            </div>

    <p>&copy; 2024 Theo's Bike Shop. All rights reserved.</p>

                </>
        );
};

export default Home;