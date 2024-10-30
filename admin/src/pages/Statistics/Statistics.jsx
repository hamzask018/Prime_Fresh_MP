import React from 'react';
import TimeSeriesChart from './TimeSeriesChart';
import DonutChart from './DonutChart';
import BarChart from './BarChart';
import './Statistics.css'
import { Link } from 'react-router-dom';



const Statistics = () => {
    const dataset_3 = {
        label: 'Stock Price',
        data: [
            { x: '2023-10-01T08:15', y: 150 },
            { x: '2023-10-01T08:45', y: 152 },
            { x: '2023-10-01T09:30', y: 148 },
            { x: '2023-10-01T10:05', y: 155 },
            { x: '2023-10-01T10:50', y: 160 },
            { x: '2023-10-01T11:20', y: 158 },
            { x: '2023-10-01T12:05', y: 165 },
            { x: '2023-10-01T12:45', y: 162 },
            { x: '2023-10-01T13:30', y: 170 },
            { x: '2023-10-01T14:15', y: 168 },
            { x: '2023-10-01T15:00', y: 172 },
            { x: '2023-10-01T15:50', y: 175 },
            { x: '2023-10-01T16:40', y: 180 },
            { x: '2023-10-01T17:10', y: 178 },
            { x: '2023-10-01T18:00', y: 185 },
            { x: '2023-10-01T18:45', y: 190 },
            { x: '2023-10-01T19:20', y: 192 },
            { x: '2023-10-01T20:05', y: 195 },
            { x: '2023-10-01T20:55', y: 200 },
            { x: '2023-10-01T21:30', y: 198 },
            { x: '2023-10-01T22:10', y: 202 },
            { x: '2023-10-01T23:00', y: 205 },
            { x: '2023-10-01T23:45', y: 208 }
        ],
        borderColor: 'rgba(128, 128, 0, 1)',
        backgroundColor: 'rgba(100, 192, 192, 0.5)',
    };
    
    const dataset_1 = {
        label: "EEEEEE",
        data: [
            { x: '2023-10-01T08:15', y: 200 },
            { x: '2023-10-01T08:45', y: 198 },
            { x: '2023-10-01T09:30', y: 195 },
            { x: '2023-10-01T10:05', y: 190 },
            { x: '2023-10-01T10:50', y: 185 },
            { x: '2023-10-01T11:20', y: 180 },
            { x: '2023-10-01T12:05', y: 178 },
            { x: '2023-10-01T12:45', y: 175 },
            { x: '2023-10-01T13:30', y: 172 },
            { x: '2023-10-01T14:15', y: 170 },
            { x: '2023-10-01T15:00', y: 168 },
            { x: '2023-10-01T15:50', y: 165 },
            { x: '2023-10-01T16:40', y: 160 },
            { x: '2023-10-01T17:10', y: 158 },
            { x: '2023-10-01T18:00', y: 155 },
            { x: '2023-10-01T19:20', y: 150 }, 
            { x: '2023-10-01T20:05', y: 148 },
            { x: '2023-10-01T20:55', y: 145 },
            { x: '2023-10-01T21:30', y: 142 },
            { x: '2023-10-01T22:10', y: 140 },
            { x: '2023-10-01T23:00', y: 135 }, 
            { x: '2023-10-01T23:45', y: 130 }
        ],
        borderColor: 'rgba(40, 128, 0, 1)',
        backgroundColor: 'rgba(100, 192, 192, 0.5)',
    };
    
    const dataset_2 = {
        label: "Hello",
        data: [
            { x: '2023-10-01T08:15', y: 200 },
            { x: '2023-10-01T08:45', y: 195 },
            { x: '2023-10-01T09:30', y: 190 },
            { x: '2023-10-01T10:05', y: 185 },
            { x: '2023-10-01T10:50', y: 180 },
            { x: '2023-10-01T11:20', y: 175 },
            { x: '2023-10-01T12:05', y: 170 },
            { x: '2023-10-01T12:45', y: 160 },
            { x: '2023-10-01T13:30', y: 155 }, // Minimum point
            { x: '2023-10-01T14:15', y: 160 },
            { x: '2023-10-01T15:00', y: 165 },
            { x: '2023-10-01T15:50', y: 170 },
            { x: '2023-10-01T16:40', y: 175 },
            { x: '2023-10-01T17:10', y: 180 },
            { x: '2023-10-01T18:00', y: 185 },
            { x: '2023-10-01T19:20', y: 190 },
            { x: '2023-10-01T20:05', y: 195 },
            { x: '2023-10-01T20:55', y: 200 },
            { x: '2023-10-01T21:30', y: 205 }, // Rising again
            { x: '2023-10-01T22:10', y: 210 },
            { x: '2023-10-01T23:00', y: 215 },
            { x: '2023-10-01T23:45', y: 220 } 
        ],
        borderColor: 'rgba(100, 13, 192, 0.5)',
        backgroundColor: 'rgba(100, 13, 192, 0.5)',
    };
    
    const Time_datasets = [dataset_1, dataset_2, dataset_3,dataset_1, dataset_2, dataset_3,dataset_1, dataset_2, dataset_3];
    const Pie_data = [
        { label: 'Category 1', value: 30 },
        { label: 'Category 2', value: 50 },
        { label: 'Category 3', value: 40 },
        { label: 'Category 4', value: 60 }
      ];
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
