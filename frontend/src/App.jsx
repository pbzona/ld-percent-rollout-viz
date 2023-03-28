import React, { useState, useEffect } from 'react';
import EntityGrid from './EntityGrid';

export default function App() {
  return (
    <div className='App'>
      <main className='container'>
        <EntityGrid />
      </main>
    </div>
  );
}