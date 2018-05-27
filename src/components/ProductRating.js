import React from 'react';
import PropTypes from 'prop-types';

function ProductRating(props) {
    let productStars = [];
    for (let i = 0; i < props.rating; i++) {
        productStars.push(<span className="glyphicon glyphicon-star"></span>)
    }
    for (let i = 0; i < 5 - props.rating; i++) {
        productStars.push(<span className="glyphicon glyphicon-star-empty"></span>)
    }
    return (
        {productStars}
    )
}

ProductRating.propTypes = {
    rating: PropTypes.number.isRequired
}