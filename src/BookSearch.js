import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { search } from './BooksAPI';
import BookShelf from './BookShelf';

class BookSearch extends Component {
  state = {
    query: '',
    books: []
  };

  updateQuery(ev) {
    const query = ev.target.value;

    this.setState({query});
    search(query).then(books => {
      this.setState({books});
    }).catch(error => {
        console.warn("Cannot search books!");
        console.log(error);
      });
  }

  render() {
      const currentIds = this.props.currentCollection.map(book => book.id);
      const filteredList = this.state.books.filter(book => !currentIds.find(id => id === book.id ));

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" value={this.state.query} placeholder="Search by title or author" onChange={this.updateQuery.bind(this)}/>

                </div>
              </div>
              <BookShelf shelfName="Results" books={filteredList} onShelfChange={this.props.onBookInsert}/>
            </div>

    );
  }
}

export default BookSearch;
