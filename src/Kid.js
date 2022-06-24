import React from 'react';

export default function Kid({ name, age, food, hobbies }) {
  return (
    <div className='kid'>
      <h2>{name}</h2>
      <p>is {age} years old.</p>
      <p>{food} is their favorite food.</p>
      <ul>hobbies: {hobbies.map((hobby, i) => <li key={hobby + i}>{hobby}</li>)}</ul>
      

    </div>
  );
}

