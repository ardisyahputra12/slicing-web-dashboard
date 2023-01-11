import React from 'react';
import PropTypes from 'prop-types';
import { CardSummary } from './CardSummary';

export const Summary = ({ summaries }) => {
    return (
        <div className='summary d-flex justify-content-between'>
            {
                summaries.map(el => <CardSummary key={el.title} {...el} />)
            }
        </div>
    );
};

Summary.propTypes = {
    summaries: PropTypes.array.isRequired,
};
