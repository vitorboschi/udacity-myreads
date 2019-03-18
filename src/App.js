import React, { Component } from 'react';
import { getAll } from './BooksAPI';
import Book from './Book';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    books: []
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
          <ul>
            {this.state.books.map((book) => (
              <Book book={book} />
            )
            )}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
