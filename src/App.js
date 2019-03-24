import React, { Component } from 'react';
import { getAll } from './BooksAPI';
import BookShelf from './BookShelf';
import BookSearch from './BookSearch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    books: [],
    shelves: [
      {id: 'wantToRead', title: 'Want to Read'},
      {id: 'currentlyReading', title: 'Currently Reading'},
      {id: 'read', title: 'Read'},
    ]
  };

  componentDidMount() {
    getAll().then((data) => {
      this.setState({books: data});
    });
  }

  render() {
    return (
      <Router className="App">
        <Route exact path="/search" component={BookSearch} />
        <Route exact path="/" render={() => (
          <div>
            <header className="list-books-title">
              <h1>MyReads</h1>
            </header>
            <main>
              {this.state.shelves.map((shelf) => (
                <BookShelf shelfName={shelf.title} books={this.state.books.filter(book => book.shelf === shelf.id)} />
              ))}
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </main>
          </div>
        )
        }
      />
      </Router>
    );
  }
}

export default App;
