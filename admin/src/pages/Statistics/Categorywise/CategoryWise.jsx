import React, { useEffect, useState } from 'react'
import TimeSeriesChart from '../TimeSeriesChart'
import { Time_datasets } from '../Data'
import './CategoryWise.css'

const CategoryWise = () => {
  const [filter,setFilter] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  const [category1, setCategory1] = useState(false);
  const [category2, setCategory2] = useState(false);
  const [category3, setCategory3] = useState(false);
  const [category4, setCategory4] = useState(false);
  const [category5, setCategory5] = useState(false);
  const [category6, setCategory6] = useState(false);
  const [category7, setCategory7] = useState(false);
  const [category8, setCategory8] = useState(false);

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
          category2 ? removeFilter('Rolls') : addFilter('Rolls');
        }}>rolls</button>
        
        <button className='selector' onClick={() => {
          setCategory3(!category3);
          category3 ? removeFilter('Deserts') : addFilter('Deserts');
        }}>Deserts</button>

        <button className='selector' onClick={() => {
          setCategory4(!category4);
          category4 ? removeFilter('Cake') : addFilter('Cake');
        }}>Cake</button>
        
        <button className='selector' onClick={() => {
          setCategory5(!category5);
          category5 ? removeFilter('Pure Veg') : addFilter('Pure Veg');
        }}>Pure Veg</button>
        
        <button className='selector' onClick={() => {
          setCategory6(!category6);
          category6 ? removeFilter('Salad') : addFilter('Salad');
        }}>Salad</button>
        
        <button className='selector' onClick={() => {
          setCategory7(!category7);
          category7 ? removeFilter('Noodles') : addFilter('Noodles');
        }}>Noodles</button>

        <button className='selector' onClick={() => {
          setCategory8(!category8);
          category8 ? removeFilter('Sandwich') : addFilter('Sandwich');
        }}>Sandwich</button>
      </div>
    </div>
  )
}

export default CategoryWise
