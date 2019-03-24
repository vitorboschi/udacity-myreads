import React, { Component } from 'react';
import { shelves } from './Shelves';

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${props.book.imageLinks.smallThumbnail}')` }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>Move to...</option>
            {shelves.map(shelf => (
              <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book.authors && props.book.authors.length > 0 && (<div className="book-authors">{props.book.authors[0]}</div>)}
    </div>
  )
}

export default Book;
