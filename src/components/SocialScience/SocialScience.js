import React from 'react';
import MyCart from '../DataScience/MyCart';

const SocialScience = (props) => {
    const courses = props.courses;
    return (
        <div className="container my-container">
            {
                courses.map(course => <MyCart className="cart-business" courseinfo={course}></MyCart>)
            }
        </div>
    
    );
};

export default SocialScience;