import React from 'react';

export default function Crystal({ name, color, chakra, healings }) {
  return (
    <div className='crystal'>
      <h2>{name}</h2>
      <p>has a {color} color.</p>
      <p>{chakra} chakra </p>
      <ul>healing properties:{healings.map((healing, i) => <li key={healing + i}>{healing}</li>)}</ul>
    </div>
  );
} 

