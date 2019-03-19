import React, { Component } from 'react';
import { getAll } from './BooksAPI';
import BookShelf from './BookShelf';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    books: [],
    shelves: ['currentlyReading', 'read', 'wantToRead']
  };

  componentDidMount() {
    getAll().then((data) => {
      this.setState({books: data});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
            {this.state.shelves.map((shelf) => (
              <BookShelf shelfName={shelf} books={this.state.books.filter(book => book.shelf === shelf)} />
            ))}
        </main>
      </div>
    );
  }
}

export default App;
