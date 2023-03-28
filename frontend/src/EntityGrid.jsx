import React, { useState } from 'react';
import { useInterval } from './hooks/useInterval';
import axios from 'axios';
import Entity from './Entity';
import './EntityGrid.css';

const POLLING_INTERVAL = 2000;

const EntityGrid = () => {
  const [entityValues, setEntityValues] = useState([]);
  
  const fetchStates = async () => {
    const { data } = await axios.get('http://localhost:4000')
    setEntityValues(data.values);
  }

  useInterval(fetchStates, POLLING_INTERVAL);

  return (
    <div className='grid'>
      {
        entityValues.map((value, idx) => (
          <Entity key={idx} value={value}/>
        ))
      }
    </div>
  )
}

export default EntityGrid