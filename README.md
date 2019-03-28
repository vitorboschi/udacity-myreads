# This is the MyReads project made for Udacity's Web Front-End Advanced Course

Although the project was not forked from [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter), many snippets/files came from that repository.

## Install and Run

In the project directory, you can run `npm install` to get all dependencies, and then `npm start` to start the development server. The website should be acessible from `http://localhost:3000`.

## Features
In addition to the project requirements, some enhancements were implemented:
* Remove button: a new button was included on the left side of books. Clicking it should remove the book from the shelf.
* Search books filtering: when doing a search, books that are already included in a shelf will be filtered out.
* Shelf changer: the current shelf option will be disabled, because it doesn't make sense to move the book to the current self.
* Books without thumbnail: these books will be displayed with a placeholder image.
