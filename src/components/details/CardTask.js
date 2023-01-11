import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { CardDetailHeader } from './CardDetailHeader';

export const CardTask = ({ tasks }) => {
    return (
        <div className='card-task border w-50 bg-white rounded'>
            <CardDetailHeader
                titleHeader='Tasks'
                info={<p>Today</p>}
                button='View all'
            />
            <div className='card-task-item border-bottom ps-4 pe-4 d-flex justify-content-between align-items-center'>
                <input className='card-task-title-add m-0 p-2 w-75 form-control' placeholder='Create new task' />
                <button className='card-task-icon-add btn'>
                    <FaPlus fill='#9FA2B4' size='12' />
                </button>
            </div>
            {tasks.map(el => (
                <div key={el.title} className='card-task-item border-bottom pe-4 ps-4 d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <input type='radio' value={el.title} name='task' />
                        <span className="custom-radio position-absolute visually-hidden">
                            <img src='/images/active.png' alt='active' />
                        </span>
                        <p className='m-0 ps-4'>{el.title}</p>
                    </div>
                    <button className='btn text-uppercase rounded-3' style={{ backgroundColor: el.btnColor }}>{el.button}</button>
                </div>
            ))}
        </div>
    );
};

CardTask.propTypes = {
    tasks: PropTypes.array.isRequired,
};
