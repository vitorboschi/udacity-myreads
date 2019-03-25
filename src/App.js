import React, { Component } from 'react';
import { getAll, update } from './BooksAPI';
import BookShelf from './BookShelf';
import BookSearch from './BookSearch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import { shelves } from './Shelves';

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

  insertBookInShelf(book, shelf) {
    update(book, shelf).then(resp => {
      if (resp[shelf].includes(book.id)) {
        book.shelf = shelf;
        this.setState(state => {
          state.books.push(book);
          return {books: state.books};
        });
      }
      else {
        console.log('Cannot insert book:', resp);
      }
    });
  }

  moveBookToShelf(book, shelf) {
    update(book, shelf).then(resp => {
      console.log(resp);
      if (resp[shelf].includes(book.id)) {
        //everything is fine. Lets update our collection
        this.setState(state => {
          const idx = state.books.findIndex(el => el.id === book.id);
          state.books[idx].shelf = shelf;
          return {books: state.books};
        });
      }
      else {
        console.warn("Cannot update collection correctly");
        //trigger a full reload to make sure we are displaying up to date info to the user
        getAll().then((data) => {
          this.setState({books: data});
        });

      }
    });
  }

  render() {
    return (
      <Router className="App">
        <Route exact path="/search" render={() => (
          <BookSearch onBookInsert={this.insertBookInShelf.bind(this)} currentCollection={this.state.books} />
        )}/>
        <Route exact path="/" render={() => (
          <div>
            <header className="list-books-title">
              <h1>MyReads</h1>
            </header>
            <main>
              {shelves.map((shelf) => (
                <BookShelf onShelfChange={this.moveBookToShelf.bind(this)} key={shelf.id} shelfName={shelf.title} books={this.state.books.filter(book => book.shelf === shelf.id)} />
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
