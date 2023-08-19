const buttonAddBook = document.querySelector('.button-add-book');
const buttonCloseDialog = document.querySelector('.button-close-dialog');
const dialog = document.querySelector('dialog')
const containerBooks = document.querySelector('.container-books');

buttonAddBook.addEventListener('click', () => {
  dialog.showModal();
})
buttonCloseDialog.addEventListener('click', () => {
  dialog.close();
})


const myLibrary = [
  {
      title: 'A Song of Ice: Adventures of Hodor Part III',
      pages: 300,
      "has read": false,
  },
  {
      title: 'A Game of Thrones',
      pages: 400,
      "has read": true,
  },
  {
    title: 'A Dance with Dragons',
    pages: 500,
    "has read": false,
  },
  {
    title: 'The Winds of Winter',
    pages: 600,
    "has read": true,
  },
];

function Book(title, pages, hasRead) {
  this.title = title,
  this.pages = pages,
  this["has read"] = hasRead
}

function addBookToLibrary() {
    // const newBook = new Book 
}

function displayBooks() {
  myLibrary.forEach((book) => {
    let cardBook = document.createElement('div');
    let cardTitle = document.createElement('p');
    let cardPages = document.createElement('p');
    let cardHasRead = document.createElement('button');
    let cardRemove = document.createElement('button');

    cardBook.setAttribute('class', 'book');
    cardTitle.setAttribute('class', 'book__title');
    cardPages.setAttribute('class', 'book__pages');
    cardHasRead.setAttribute('class', 'book__has-read') ;
    cardRemove.setAttribute('class', 'book__remove');

    cardTitle.textContent = `"${book.title}"`;
    cardPages.textContent = `${book.pages} pages`;
    cardHasRead.textContent = book['has read'] ? 'Read' : "Not read";
    cardRemove.textContent = 'Remove';

    cardBook.append(cardTitle, cardPages, cardHasRead, cardRemove);

    containerBooks.appendChild(cardBook);
  })
}

displayBooks();