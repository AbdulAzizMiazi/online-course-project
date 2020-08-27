import React from 'react';
import {CardDeck, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCart from './MyCart';

const DataScience = (props) => {
   
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <CardDeck>
                        <MyCart courseinfo={props.courses[0]}></MyCart>
                        <MyCart courseinfo={props.courses[1]}></MyCart>
                        <MyCart courseinfo={props.courses[2]}></MyCart>
                        <MyCart courseinfo={props.courses[3]}></MyCart>
                    </CardDeck>
                </Carousel.Item>
                <Carousel.Item>
                <CardDeck >
                    <MyCart courseinfo={props.courses[4]}></MyCart>
                    <MyCart courseinfo={props.courses[5]}></MyCart>
                    <MyCart courseinfo={props.courses[6]}></MyCart>
                    <MyCart courseinfo={props.courses[7]}></MyCart>
                </CardDeck>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default DataScience;