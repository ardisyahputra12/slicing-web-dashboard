import React from 'react';
import PropTypes from 'prop-types';

export const NavigationItem = ({ icon, title }) => {
    return (
        <div className='navigation-item nav-item active d-flex align-items-center ps-4 pe-4'>
            <div className='align-self-center'>{icon}</div>
            <p className='m-0 align-self-center'>{title}</p>
        </div>
    );
};

NavigationItem.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
};
