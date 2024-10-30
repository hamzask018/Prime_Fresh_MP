import React, { useEffect, useState } from 'react'
import TimeSeriesChart from '../TimeSeriesChart'
import './CategoryWise.css'

const CategoryWise = () => {
  const [filter,setFilter] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const [category1, setCategory1] = useState(false);
  const [category2, setCategory2] = useState(false);
  const [category3, setCategory3] = useState(false);
  
  
  const pasta = {
    label: 'Pasta',
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

  const rolls = {
    label: "rolls",
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

  const deserts = {
    label: "deserts",
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

const Time_datasets = [pasta, rolls, deserts];

  const addFilter = (label) => {
      setFilter((prevFilter) => [...prevFilter, label]);
  };

  const removeFilter = (label) => {
      setFilter((prevFilter) => prevFilter.filter((item) => item !== label));
  };

  useEffect(() => {
    setFilteredData(Time_datasets.filter(dataset => filter.includes(dataset.label)));
  }, [filter]);

  
  return (
    <div>
      <div className='linechart2'>
        <div style={{ width: '100%', margin: 'auto', height: '100%' }}>
          <TimeSeriesChart datasets={filteredData} title={'Category-wise sales comparisons'} />
        </div>
      </div>
      <div >
      <button className='selector' onClick={() => {
          setCategory1(!category1);
          category1 ? removeFilter('Pasta') : addFilter('Pasta');
        }}>Pasta</button>
        
        <button className='selector' onClick={() => {
          setCategory2(!category2);
          category2 ? removeFilter('rolls') : addFilter('rolls');
        }}>rolls</button>
        
        <button className='selector' onClick={() => {
          setCategory3(!category3);
          category3 ? removeFilter('deserts') : addFilter('deserts');
        }}>deserts</button>
      </div>
    </div>
  )
}

export default CategoryWise
