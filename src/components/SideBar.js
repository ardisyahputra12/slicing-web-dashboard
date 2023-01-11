import React from 'react';
import { NavigationItem } from './NavigationItem';
import {
    FaBook,
    FaPuzzlePiece,
    FaTicketAlt,
    FaLightbulb,
    FaMedal,
} from 'react-icons/fa';
import {
    BsGearFill,
    BsPeopleFill,
    BsPersonFill,
} from 'react-icons/bs';

export const SideBar = () => {
    React.useEffect(() => {
        const navigationItem = document.querySelector('.navigation-item');
        navigationItem.setAttribute('style', 'background-color: rgba(159, 162, 180, 0.08);color: #DDE2FF !important;border-left: 3px solid #DDE2FF;');
    }, []);

    return (
        <div className='sidebar position-fixed top-0 bottom-0'>
            <header className='d-flex align-items-center p-4 pt-0'>
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='logo' />
                <h1 className='m-0'>Dashboard Kit</h1>
            </header>
            <NavigationItem icon={<FaPuzzlePiece />} title='Overview' />
            <NavigationItem icon={<FaTicketAlt />} title='Tickets' />
            <NavigationItem icon={<FaLightbulb />} title='Ideas' />
            <NavigationItem icon={<BsPeopleFill />} title='Contacts' />
            <NavigationItem icon={<BsPersonFill />} title='Agents' />
            <NavigationItem icon={<FaBook />} title='Articles' />
            <hr />
            <NavigationItem icon={<BsGearFill />} title='Settings' />
            <NavigationItem icon={<FaMedal />} title='Subscription' />
        </div>
    );
};
