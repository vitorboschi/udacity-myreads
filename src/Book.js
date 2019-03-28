import React, { Component } from 'react';
import { shelves } from './Shelves';
import unknownThumb from './icons/unknown-thumb.png';

const Book = ({onShelfChange, book}) => {
  const {authors, imageLinks, shelf, title} = book;
  const thumbnail = imageLinks ? imageLinks.smallThumbnail : unknownThumb;

  const changeShelf = (ev) => {
    onShelfChange(book, ev.target.value);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${thumbnail}')` }}></div>
        {book.shelf && (<button className="book-remover" aria-label="Remove book" onClick={() => onShelfChange(book, 'none')}></button>)}
        <div className="book-shelf-changer">
          <select onChange={changeShelf} value={shelf || "move"}>
            <option value="move" disabled>Move to...</option>
            {shelves.map(shelf => (
              <option key={shelf.id} value={shelf.id} disabled={shelf.id === shelf}>{shelf.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      {authors && authors.length > 0 && (<div className="book-authors">{authors[0]}</div>)}
    </div>
  )
}
export default Book;
