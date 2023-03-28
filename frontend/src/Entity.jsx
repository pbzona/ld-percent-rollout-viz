import React from 'react';
import './Entity.css';

const Entity = ({ value }) => {
  return (
    <div className='entity-container'>
      <div className={`entity ${value ? 'true' : 'false entity-closed'}`} />
    </div>
  )
}

export default Entity