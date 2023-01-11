import React from 'react';
import PropTypes from 'prop-types';
import { CardTicket } from './CardTicket';
import { CardTask } from './CardTask';

export const CardDetail = ({ tickets, tasks }) => {
    React.useEffect(() => {
        const cardTask = document.querySelector('.card-task');
        const cardTicket = document.querySelector('.card-ticket');
        cardTask.lastElementChild.classList.remove('border-bottom');
        cardTicket.lastElementChild.classList.remove('border-bottom');
        cardTask.lastElementChild.lastElementChild.classList.add('default-task-button');
        cardTask.lastElementChild.firstElementChild.firstElementChild.setAttribute('checked', 'checked');
        if ('checked' in cardTask.lastElementChild.firstElementChild.firstElementChild.attributes) {
            cardTask.lastElementChild.firstElementChild.firstElementChild.classList.remove('visually-hidden');
            cardTask.lastElementChild.firstElementChild.firstElementChild.classList.add('visible');
        };
    }, []);

    return (
        <div className='card-detail d-flex justify-content-between'>
            <CardTicket tickets={tickets} />
            <CardTask tasks={tasks} />
        </div>
    );
};

CardDetail.propTypes = {
    tickets: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
}