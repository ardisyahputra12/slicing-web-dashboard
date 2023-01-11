import React from 'react';
import PropTypes from 'prop-types';
import { CardDetailHeader } from './CardDetailHeader';

export const CardTicket = ({ tickets }) => {
    return (
        <div className='card-ticket border w-50 bg-white rounded'>
            <CardDetailHeader
                titleHeader='Unresolved tickets'
                info={<p>Group: <strong>Support</strong></p>}
                button='View details'
            />
            {tickets.map(el => (
                <div key={el.title} className='card-ticket-item border-bottom pe-4 ps-4 d-flex align-items-center justify-content-between'>
                    <p className='card-ticket-title m-0'>{el.title}</p>
                    <p className='card-ticket-amount m-0'>{el.amount}</p>
                </div>
            ))}
        </div>
    );
};

CardTicket.propTypes = {
    tickets: PropTypes.array.isRequired,
};
