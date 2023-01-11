import React from 'react';
import PropTypes from 'prop-types';

export const AdditionalItem = ({ title, amount }) => {
    return (
        <div className='additional-item border-bottom d-flex justify-content-center align-items-center flex-column'>
            <h2 className='m-0'>{title}</h2>
            <p className='m-0'>{amount}</p>
        </div>
    );
};

AdditionalItem.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
};
