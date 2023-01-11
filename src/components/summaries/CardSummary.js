import React from 'react';
import PropTypes from 'prop-types';

export const CardSummary = ({ title, amount }) => {
    const handleCardHover = (ev) => ev.target.classList.add('border-primary');
    const handleCardHoverLeave = (ev) => ev.target.classList.remove('border-primary');

    return (
        <div className='card-summary border rounded d-flex justify-content-evenly align-items-center flex-column bg-white' onMouseOver={handleCardHover} onMouseLeave={handleCardHoverLeave}>
            <h2 className='m-0'>{title}</h2>
            <p className='m-0'>{amount}</p>
        </div>
    );
};

CardSummary.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};
