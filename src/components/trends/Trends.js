import React from 'react';
import PropTypes from 'prop-types';
import { AdditionalItem } from './AdditionalItem';
import { TrendChart } from './TrendChart';

export const Trends = ({ trends }) => {
    React.useEffect(() => {
        const additionalInfo = document.querySelector('.additional-info');
        additionalInfo.lastElementChild.classList.remove('border-bottom')
    }, []);

    return (
        <div className='trends bg-white border d-flex'>
            <div className='w-75 border-end p-4'>
                <div className='d-flex flex-column justify-content-between'>
                    <h2>Today’s trends</h2>
                    <div className='d-flex justify-content-between'>
                        <p>as of 25 May 2019, 09:41 PM</p>
                        <div className='d-flex justify-content-between w-25'>
                            <p>
                                <span className='pe-2'><img src='/images/divider-blue.png' /></span>
                                Today
                            </p>
                            <p>
                                <span className='pe-2'><img src='/images/divider-grey.png' /></span>
                                Yesterday
                            </p>
                        </div>
                    </div>
                </div>
                <TrendChart />
            </div>
            <div className='additional-info w-25'>
                {
                    trends.map(el => <AdditionalItem key={el.title} {...el} />)
                }
            </div>
        </div>
    );
};

Trends.propTypes = {
    trends: PropTypes.array.isRequired,
};
