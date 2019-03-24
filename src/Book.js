import React, { Component } from 'react';
import { shelves } from './Shelves';

class Book extends Component {
  changeShelf(ev) {
    this.props.onShelfChange(this.props.book, ev.target.value);
  }

  render() {
    const book = this.props.book;
    const authors = book.authors;

    const availableShelves = shelves.filter(shelf => shelf.id !== book.shelf);

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${book.imageLinks.smallThumbnail}')` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.changeShelf.bind(this)} value={book.shelf}>
              <option value="move" disabled>Move to...</option>
              {shelves.map(shelf => (
                <option key={shelf.id} value={shelf.id} disabled={shelf.id === book.shelf}>{shelf.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {authors && authors.length > 0 && (<div className="book-authors">{authors[0]}</div>)}
      </div>
    )
  }
}

export default Book;
