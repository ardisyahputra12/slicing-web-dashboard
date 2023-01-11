import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts/es6/index';
import { lineChartData } from '../../utils/data';

export const TrendChart = () => {
    return (
        <>
            <ResponsiveContainer width='100%' aspect={2} >
                <LineChart data={lineChartData} margin={{ top: 45, bottom: -10 }}>
                    <CartesianGrid strokeDasharray='2 2' />
                    <Tooltip contentStyle={{ backgroundColor: 'lightgray' }} />
                    <Line dataKey='Today' stroke='#3751FF' activeDot={{ r: 10 }} type='monotone' />
                    <Line dataKey='Yesterday' stroke='grey' activeDot={{ r: 10 }} type='monotone' />
                    <XAxis dataKey='date' />
                    <YAxis />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
};
