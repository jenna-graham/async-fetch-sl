import React from 'react';

export default function Book({ title, author, genre, data }) {
  return (
    <div className='book'>
      <h2>{title}</h2>
      <p>written by: {author}</p>
      <p>genre: {genre}</p>
      <ul>data: {data.map((data, i) => <li key={data + i}>{data}</li>)}</ul>
    </div>
  );
}

