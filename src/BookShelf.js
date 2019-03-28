import React, { Component } from 'react';
import Book from './Book';

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        {props.books.length > 0 && (
        <ol className="books-grid">
          {props.books.map((book) => (
            <li key={book.id}>
              <Book book={book} onShelfChange={props.onShelfChange}/>
            </li>
          ))}
        </ol>
        )}
        {props.books.length == 0 && (
          <h3>Empty</h3>
        )}
      </div>
    </div>
  );
}

export default BookShelf;
