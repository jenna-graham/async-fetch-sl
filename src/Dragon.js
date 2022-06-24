import React from 'react';

export default function Dragon({ name, length, fearFactor, type, alias, traits }) {
  return (
    <div className='dragon'>
      <h2>{name}</h2>
      <p> is {length} long </p>
      <p>fear factor:{fearFactor}</p>
      <p>type: {type}</p>
      <h4>alias: {alias}</h4>
      <ul>traits: {traits.map((trait, i) => <li key={trait + i}>{trait}</li>)}</ul>
    </div>
  );
}

