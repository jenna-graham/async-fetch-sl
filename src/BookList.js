import React from 'react';
import Book from './Book';

export default function BookList({ books = [] }) {
  return (
    <div className="book-list">
      {
        books.map((book, i) => {
          return <Book {...book}key={book.title + i + book.id}/>; 
        })
      }
    </div>
  );
}

