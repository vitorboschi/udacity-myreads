import React, { Component } from 'react';
import { shelves } from './Shelves';

function Book(props) {
  const book = props.book;
  const authors = book.authors;

  const availableShelves = shelves.filter(shelf => shelf.id !== book.shelf);

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${props.book.imageLinks.smallThumbnail}')` }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            {availableShelves.map(shelf => (
              <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      {authors && authors.length > 0 && (<div className="book-authors">{authors[0]}</div>)}
    </div>
  )
}

export default Book;
