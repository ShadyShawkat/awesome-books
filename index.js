const form = document.querySelector('form');
const booksList = document.querySelector('.books');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

// function getDataFromLocalStorage() {
//   return JSON.parse(window.localStorage.getItem('booksData'));
// }

// function setDataInLocalStorage(data) {
//   window.localStorage.setItem('booksData', JSON.stringify(data));
// }

function renderUI(myBooks) {
  console.log(myBooks)
  booksList.innerHTML = '';
  myBooks.forEach((book) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
    <p>Title: ${book.title}</p>
    <p>Author: ${book.author}</p>
    <button onclick = "${book.removeBook}">Remove</button>`;
    booksList.appendChild(bookItem);
  });
}

function removeBook(id) {
  if (!id) return; // Just for linters
  const dataFromLocalStorage = getDataFromLocalStorage();
  dataFromLocalStorage.myBooks = dataFromLocalStorage.myBooks.filter(
    (book) => book.id !== id,
  );
  setDataInLocalStorage(dataFromLocalStorage);
  renderUI(dataFromLocalStorage.myBooks);
}
removeBook(null);

// const booksData = getDataFromLocalStorage();
// if (!booksData) {
//   const dataToBeStored = {
//     myBooks: [],
//     bookCount: 0,
//   };
//   setDataInLocalStorage(dataToBeStored);
// } else {
//   renderUI(booksData.myBooks);
// }

// function addBook(e) {
// const title = document.querySelector('.title').value;
// const author = document.querySelector('.author').value;
// const dataFromLocalStorage = getDataFromLocalStorage();
// const Book = {
//   title: title.value,
//   author: author.value,
//   id: dataFromLocalStorage.bookCount + 1,
// };
// dataFromLocalStorage.myBooks.push(Book);
// dataFromLocalStorage.bookCount += 1;
// setDataInLocalStorage(dataFromLocalStorage);
// const bookItem = document.createElement('li');
// bookItem.innerHTML = `
//   <p>Title: ${Book.title}</p>
//   <p>Author: ${Book.author}</p>
//   <button onclick="removeBook(${Book.id})">Remove</button>`;
// booksList.appendChild(bookItem);
// document.querySelector('.title').value = '';
// document.querySelector('.author').value = '';
// }


class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id;
  }

  static books = [];

  static getDataFromLocalStorage() {
    const data = JSON.parse(window.localStorage.getItem('booksData'));
    data.myBooks.forEach((book) => {})
  }

  static setDataInLocalStorage(data) {
    window.localStorage.setItem('booksData', JSON.stringify(data));
  }

  addBook() {
    const books = Book.getDataFromLocalStorage();
    this.id = books.bookCount + 1
    books.myBooks.push(this);
    books.bookCount += 1;
    Book.setDataInLocalStorage(books);
    renderUI(books.myBooks);
    title.value = '';
    author.value = '';
  }

  removeBook() {
    const books = Book.getDataFromLocalStorage();
    books.myBooks = books.myBooks.filter(
      (book) => book.id !== this.id,
    );
    Book.setDataInLocalStorage(books);
    renderUI(books.myBooks);
  }

}




form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newBook = new Book(title.value, author.value);
  newBook.addBook();
});

const booksData = Book.getDataFromLocalStorage();
if (!booksData) {
  const dataToBeStored = {
    myBooks: [],
    bookCount: 0,
  };
  Book.setDataInLocalStorage(dataToBeStored);
} else {
  renderUI(booksData.myBooks);
}