import React from 'react';
import './header.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    let totalCost = 0;
    const itemCount = props.cartData.length;
    for (let i = 0; i < props.cartData.length; i++) {
        const element = props.cartData[i].price;
        totalCost = totalCost + element;
    }
    console.log(totalCost);
    return (
        <div className="heder">
            <div className="project-title">
                <h5>
                    Welcome to our Educational Platform
                </h5>
                <h1>
                    Learning Zone
                </h1>
                <p>
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laudantium reprehenderit vel impedit tenetur rerum aspernatur fugit incidunt laboriosam tempora inventore quibusdam, cupiditate exercitationem."
                </p>
            </div>
            <div className="purchase-card">
                <Card border="dark" style={{ width: '30rem', margin:"0px"}}>
                    <Card.Body>
                        <Card.Title>Your Purchases:</Card.Title>
                        <div className="card-container">
                            <div className="totals">
                                <h5>Total Course: {itemCount}</h5>
                                <h6>Total Cost: {totalCost}</h6>
                                <p style={{fontSize:"15px", marginTop:"15px"}}><small>Purchase quick!
                                    <br/>20 hours are left for 30% off.
                                    Offer will be appeared at payment card.
                                    <br/><b><i>Happy Learning!</i></b></small>
                                </p>
                            </div>
                            <div className="userImage">
                                <img src="https://p.kindpng.com/picc/s/22-223863_no-avatar-png-circle-transparent-png.png" alt=""/>
                            </div>
                        </div>
                        <button className="paymentBtn">
                            <FontAwesomeIcon icon={faShoppingCart} /> Go Payment
                        </button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Header;