import React from 'react';
import TimeSeriesChart from './TimeSeriesChart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import './Statistics.css'
import { Link } from 'react-router-dom';
import { Time_datasets, Pie_data, Bar_data } from './Data';
import { Pie_options, Bar_options, Time_options_Statistics } from './Data';



const Statistics = () => {
    
    return (
        <div className="card-container">
            <div className='row'><Link to={'/statistics/categorywise'}>
                <div className='linechart'>
                    <div style={{ width: '100%', margin: 'auto', height: '100%' }}>
                        <TimeSeriesChart datasets={Time_datasets} title={''} options={Time_options_Statistics} />
                    </div>
                </div></Link>
                <div className='piechart'>
                    <div style={{ width: '100%', height: '100%',justifyContent: 'flex-end', margin:'auto', paddingLeft:'20%' }}>
                        <DonutChart datasets={Pie_data} options={Pie_options}/>
                    </div>
                </div>
            </div>
            <div className='barchart'>
            <div style={{ width: '100%', height: '100%', margin:'auto', paddingRight:'1rem'}}>
                        <BarChart datasets={Bar_data} options={Bar_options}/>
                    </div>
            </div>
        </div>
    );
};

export default Statistics;
