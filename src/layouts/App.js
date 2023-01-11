import React from 'react';
import { Main } from '../components/Main';
import { SideBar } from '../components/SideBar';
import {
    summaries,
    trends,
    tickets,
    tasks
} from '../utils/data';

export const App = () => {
    return (
        <>
            <main className='d-flex justify-content-between'>
                <SideBar />
                <Main
                    summaries={summaries}
                    trends={trends}
                    tickets={tickets}
                    tasks={tasks}
                />
            </main>
        </>
    );
};
