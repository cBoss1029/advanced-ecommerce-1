import React from 'react';
import PropTypes from 'prop-types';

function ProductRating(props) {
    let productStars = [];
    function makeStars(){
        for (let i = 0; i < props.rating; i++) {
            productStars.push(<span className="glyphicon glyphicon-star"></span>)
        }
        for (let i = 0; i < 5 - props.rating; i++) {
            productStars.push(<span className="glyphicon glyphicon-star-empty"></span>)
        }
    }
    makeStars();
    return (
        <p>
        {productStars}
        </p>
    )
}
export default ProductRating;

ProductRating.propTypes = {
    rating: PropTypes.number.isRequired
}