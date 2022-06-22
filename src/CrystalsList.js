import React from 'react';
import Crystal from './Crystal';

export default function CrystalsList({ crystals = [] }) {
  return (
    <div className='crystals-list'>
      {
        crystals.map((crystal, i) => {
          return <Crystal {...crystal}key={crystal.name + i + crystal.id}/>;
        }
    
        )}
    </div>
  );
}

