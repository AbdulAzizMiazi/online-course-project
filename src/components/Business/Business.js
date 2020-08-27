import React from 'react';
import MyCart from '../DataScience/MyCart';
import './styleBusiness.css'

const Business = (props) => {
    const courses = props.courses;
    return (
        <div>
            <div className="container my-container">
                {
                    courses.map(course => <MyCart className="cart-business" courseinfo={course}></MyCart>)
                }
            </div>
        </div>
    );
};

export default Business;