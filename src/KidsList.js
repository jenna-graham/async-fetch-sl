import React from 'react';
import Kid from './Kid';

export default function KidsList({ kids = [] }) {
  return (
    <div className='kid-list'>
      {
        kids.map((kid, i) => {
          return <Kid {...kid}key={kid.name + i + kid.id}/>; 
        })
      }
        
    </div>
  );
}

