import React from 'react';
import PropTypes from 'prop-types';

export const CardDetailHeader = ({ titleHeader, info, button }) => {
    return (
        <div className='card-detail-header pt-4 ps-4 pe-4 d-flex justify-content-between align-items-center'>
            <div>
                <h2>{titleHeader}</h2>
                {info}
            </div>
            <button className='btn p-0'>{button}</button>
        </div>
    );
};

CardDetailHeader.propTypes = {
    titleHeader: PropTypes.string.isRequired,
    info: PropTypes.element.isRequired,
    button: PropTypes.string.isRequired,
};
