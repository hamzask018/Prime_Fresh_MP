import React from 'react';
import TimeSeriesChart from './TimeSeriesChart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import './Statistics.css'
import { Link } from 'react-router-dom';
import { Time_datasets, Pie_data } from './Data';



const Statistics = () => {
    
    const Bar_data = [
        { label: 'Category A', value: 65 },
        { label: 'Category B', value: 59 },
        { label: 'Category C', value: 80 },
        { label: 'Category D', value: 81 },
        { label: 'Category E', value: 56 },
        { label: 'Category F', value: 55 },
        { label: 'Category G', value: 40 },
        { label: 'Category H', value: 90 },
        { label: 'Category I', value: 75 },
        { label: 'Category J', value: 62 },
        { label: 'Category K', value: 85 },
        { label: 'Category L', value: 30 },
        { label: 'Category M', value: 70 },
        { label: 'Category N', value: 95 },
        { label: 'Category O', value: 20 },
        { label: 'Category P', value: 40 },
        { label: 'Category Q', value: 72 },
        { label: 'Category R', value: 68 },
        { label: 'Category S', value: 92 },
        { label: 'Category T', value: 55 },
        { label: 'Category U', value: 30 },
        { label: 'Category V', value: 45 },
        { label: 'Category W', value: 80 },
        { label: 'Category X', value: 33 },
        { label: 'Category Y', value: 78 },
        { label: 'Category Z', value: 61 },
        { label: 'Category AA', value: 95 },
        { label: 'Category AB', value: 50 },
        { label: 'Category AC', value: 88 },
        { label: 'Category AD', value: 99 },
        { label: 'Category AE', value: 29 },
        { label: 'Category AF', value: 66 },
        { label: 'Category AG', value: 45 },
        { label: 'Category AH', value: 56 },
        { label: 'Category AI', value: 80 },
        { label: 'Category AJ', value: 90 },
        { label: 'Category AK', value: 25 },
        { label: 'Category AL', value: 70 },
        { label: 'Category AM', value: 87 },
        { label: 'Category AN', value: 40 },
        { label: 'Category AO', value: 55 },
        { label: 'Category AP', value: 60 },
      ];
    
    return (
        <div className="card-container">
            <div className='row'><Link to={'/statistics/categorywise'}>
                <div className='linechart'>
                    <div style={{ width: '100%', margin: 'auto', height: '100%' }}>
                        <TimeSeriesChart datasets={Time_datasets} title={'Category-wise sales comparsions'} />
                    </div>
                </div></Link>
                <div className='piechart'>
                    <div style={{ width: '100%', height: '100%',justifyContent: 'flex-end', margin:'auto', paddingLeft:'20%' }}>
                        <DonutChart data={Pie_data}/>
                    </div>
                </div>
            </div>
            <div className='barchart'>
            <div style={{ width: '100%', height: '100%', margin:'auto', paddingRight:'1rem'}}>
                        <BarChart data={Bar_data}/>
                    </div>
            </div>
        </div>
    );
};

export default Statistics;
