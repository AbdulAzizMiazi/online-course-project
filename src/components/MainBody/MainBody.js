import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import business from '../sources/business';
import DataScience from '../DataScience/DataScience';
import dataScience from '../sources/dataScience';
import Business from '../Business/Business';
import socialScience from '../sources/socialScience';
import SocialScience from '../SocialScience/SocialScience';

const MainBody = () => {

    return (
        <div>
            <p className="categoryTitle" style={{fontSize: "25px"}}>
                Data Science courses are here
            </p>
            <DataScience courses={dataScience}></DataScience>
            <p className="categoryTitle" style={{fontSize: "25px"}}>
                Business courses are here
            </p>
            <Business courses={business}></Business>
            <p className="categoryTitle" style={{fontSize: "25px"}}>
                Social Science courses are here
            </p>
            <SocialScience courses={socialScience}></SocialScience>


        </div>
    );
};

export default MainBody;