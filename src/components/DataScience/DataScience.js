import React from 'react';
import {CardDeck, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCart from './MyCart';

const DataScience = (props) => {
   
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <CardDeck>
                        <MyCart courseinfo={props.courses[0]} click={props.click}></MyCart>
                        <MyCart courseinfo={props.courses[1]} click={props.click}></MyCart>
                        <MyCart courseinfo={props.courses[2]} click={props.click}></MyCart>
                        <MyCart courseinfo={props.courses[3]} click={props.click}></MyCart>
                    </CardDeck>
                </Carousel.Item>
                <Carousel.Item>
                <CardDeck >
                    <MyCart courseinfo={props.courses[4]} click={props.click}></MyCart>
                    <MyCart courseinfo={props.courses[5]} click={props.click}></MyCart>
                    <MyCart courseinfo={props.courses[6]} click={props.click}></MyCart>
                    <MyCart courseinfo={props.courses[7]} click={props.click}></MyCart>
                </CardDeck>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default DataScience;