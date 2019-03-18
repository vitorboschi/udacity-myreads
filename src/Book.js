import React, { Component } from 'react';

function Book(props) {
  return (
    <div className='book'>
      <span className='book-title'>
        {props.book.title}
      </span>
    </div>
  )
}

export default Book;
