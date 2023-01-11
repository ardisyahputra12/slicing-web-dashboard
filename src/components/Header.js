import React from 'react';
import { FaSearch, FaBell, FaDotCircle } from 'react-icons/fa';

export const Header = () => {
    return (
        <div className='header d-flex justify-content-between'>
            <h2 className='w-50 m-0 align-self-center'>Overview</h2>
            <div className='d-flex justify-content-end w-50'>
                <div className='header-icon d-flex align-items-center'>
                    <button className='btn'>
                        <FaSearch fill='#C5C7CD' className='icon-fa-search' />
                    </button>
                    <button className='btn'>
                        <FaBell fill='#C5C7CD' className='icon-fa-bell' />
                        <FaDotCircle size='8' fill='#3751FF' className='notif' />
                    </button>
                </div>
                <button className='profile btn d-flex align-items-center border-start'>
                    <h3 className='m-0'>Jones Ferdinand</h3>
                    <img src='/images/avatar.png' alt='avatar' className='rounded-circle border border-secondary p-1' />
                </button>
            </div>
        </div>
    );
};
