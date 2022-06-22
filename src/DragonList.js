import React from 'react';
import Dragon from './Dragon';

export default function DragonList({ dragons = [] }) {
  return (
    <div className='dragon-list'>
      {
        dragons.map((dragon, i) => {
          return <Dragon {...dragon}key={dragon.name + i + dragon.id}/>;
        })
      }

    </div>
  );
}

