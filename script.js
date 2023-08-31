const myLibrary = [
  {
      title: 'A Song of Ice and Fire: Adventures of Hodor and Gandalf Part III Electric Boogaloo',
      author: 'George R. R. Martin',
      pages: 300,
      hasRead: false,
  },
  {
      title: 'A Game of Thrones',
      author: 'George R. R. Martin',
      pages: 400,
      hasRead: true,
  },
  {
    title: 'A Dance with Dragons',
    author: 'George R. R. Martin',
    pages: 500,
    hasRead: false,
  },
  {
    title: 'The Winds of Winter',
    author: 'George R. R. Martin',
    pages: 600,
    hasRead: true,
  },
];

const buttonAddBook = document.querySelector('.button-add-book');
const buttonCloseDialog = document.querySelector('.button-close-dialog');
const buttonSubmit = document.querySelector('.button-submit');
const dialog = document.querySelector('dialog')
const containerBooks = document.querySelector('.container-books');
const inputTitle = document.getElementById('form-title');
const inputAuthor = document.getElementById('form-author');
const inputPages = document.getElementById('form-pages');
const inputHasRead = document.getElementById('form-has-read');
let buttonRemove;

buttonAddBook.addEventListener('click', () => {
  dialog.showModal();
})

buttonCloseDialog.addEventListener('click', () => {
  dialog.close();
})

buttonSubmit.addEventListener('click', (event) => {
  addBookToLibrary();
  clearDisplayBooks();
  displayBooks();
  dialog.close();
  event.preventDefault();
})

// function Book(title, author, pages, hasRead) {
//   this.title = title,
//   this.author = author,
//   this.pages = pages,
//   this["has read"] = hasRead
// }

class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
  }
}

function addBookToLibrary() {
  let title = inputTitle.value;
  let author = inputAuthor.value;
  let pages = inputPages.value;
  let hasRead = inputHasRead.checked;
  console.log(inputHasRead.checked);

  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.unshift(newBook);
}

function clearDisplayBooks() {
  while (containerBooks.firstChild) {
    containerBooks.removeChild(containerBooks.firstChild);
  }
  buttonRemove = null;
}

function deleteBook(event) {
  myLibrary.splice((event.target.parentNode.getAttribute('data-index')), 1);
  clearDisplayBooks();
  displayBooks();
}

function toggleHasRead(event) {
  let index = event.target.parentNode.getAttribute('data-index');

  if (myLibrary[index]['has read']) {
    myLibrary[index]['has read'] = false;
  } else {
    (myLibrary[index]['has read']) = true;
  }
  clearDisplayBooks();
  displayBooks();
}

function displayBooks() {
  myLibrary.forEach((book, index) => {
    let cardBook = document.createElement('div');
    let cardTitle = document.createElement('p');
    let cardAuthor = document.createElement('p');
    let cardPages = document.createElement('p');
    let cardHasRead = document.createElement('button');
    let cardRemove = document.createElement('button');

    cardBook.setAttribute('class', 'book');
    cardBook.setAttribute('data-index', `${index}`);
    cardTitle.setAttribute('class', 'book__title');
    cardAuthor.setAttribute('class', 'book__author');
    cardPages.setAttribute('class', 'book__pages');
    cardRemove.setAttribute('class', 'book__remove');

    cardTitle.textContent = `"${book.title}"`;
    cardAuthor.textContent = `By ${book.author}`;
    cardPages.textContent = `${book.pages} pages`;
    cardRemove.textContent = 'Remove';

    if (book.hasRead) {
      cardHasRead.textContent = 'Read';
      cardHasRead.setAttribute('class', 'book__has-read');
    } else {
      cardHasRead.textContent = "Not read";
      cardHasRead.setAttribute('class', 'book__has-read--false')
    }

    cardBook.append(cardTitle, cardAuthor, cardPages, cardHasRead, cardRemove);

    containerBooks.appendChild(cardBook);

    cardHasRead.addEventListener('click', toggleHasRead);
    cardRemove.addEventListener('click', deleteBook);
  })
}

displayBooks();