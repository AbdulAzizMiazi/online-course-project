import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import business from '../sources/business';
import DataScience from '../DataScience/DataScience';
import dataScience from '../sources/dataScience';
import Business from '../Business/Business';
import socialScience from '../sources/socialScience';
import SocialScience from '../SocialScience/SocialScience';
import Header from '../Header.js/Header';

const MainBody = () => {

    const[dsCourses, setdsCourses] = useState([]);
    const[bsnsCourses, setbsnsCourses] = useState([]);
    const[ssCourses, setssCourses] = useState([]);
    const[cart, setCart] = useState([]);

    
    function dsClick(clickedItem) {
        const newItem = [...dsCourses, clickedItem];
        setdsCourses(newItem);
        cartDataAdd(clickedItem);
    }
    function bsnsClick(clickedItem) {
        const newItem = [...bsnsCourses, clickedItem];
        setbsnsCourses(newItem);
        cartDataAdd(clickedItem);
    }
    function ssClick(clickedItem) {
        const newItem = [...ssCourses, clickedItem];
        setssCourses(newItem);
        cartDataAdd(clickedItem);
    }

    function cartDataAdd(addItem){
        const newerItem = [...cart, addItem];
        setCart(newerItem);
    }
    return (
        <div>
            <Header cartData={cart}></Header>
            <br/><br/><br/>
            <div style={{margin: "2% 0% 0px 5%"}}>
                <p className="categoryTitle" style={{fontSize: "25px"}}>
                    Data Science courses are here
                </p>
                <DataScience courses={dataScience} click={dsClick}></DataScience>
                <br/><br/><br/>
            </div>
            <div style={{margin:"0px 5%"}}>
                <p className="categoryTitle" style={{fontSize: "25px"}}>
                    Business courses are here
                </p>
                <Business courses={business} click={bsnsClick}></Business>
                <br/><br/><br/>
                <p className="categoryTitle" style={{fontSize: "25px"}}>
                    Social Science courses are here
                </p>
                <SocialScience courses={socialScience} click={ssClick}></SocialScience>
                <br/><br/><br/>
            </div>


        </div>
    );
};

export default MainBody;