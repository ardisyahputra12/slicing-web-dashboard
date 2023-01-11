import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { CardDetail } from './details/CardDetail';
import { Summary } from './summaries/Summary';
import { Trends } from './trends/Trends';

export const Main = ({ summaries, trends, tickets, tasks }) => {
    return (
        <div className='main p-4 align-items-center flex-fill'>
            <Header />
            <Summary summaries={summaries} />
            <Trends trends={trends} />
            <CardDetail tickets={tickets} tasks={tasks} />
        </div>
    );
};

Main.propTypes = {
    summaries: PropTypes.array.isRequired,
    trends: PropTypes.array.isRequired,
    tickets: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
};
