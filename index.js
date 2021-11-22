const form = document.querySelector("form");
const booksList = document.querySelector(".books");

const booksData = getDataFromLocalStorage();
if (!booksData) {
  const dataToBeStored = {
    myBooks: [],
    bookCount: 0,
  };
  setDataInLocalStorage(dataToBeStored);
} else {
  renderUI(booksData.myBooks);
}

function addBook(e) {
  e.preventDefault();
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const dataFromLocalStorage = getDataFromLocalStorage();
  const Book = {
    title,
    author,
    id: dataFromLocalStorage.bookCount + 1,
  };
  dataFromLocalStorage.myBooks.push(Book);
  dataFromLocalStorage.bookCount = dataFromLocalStorage.bookCount + 1;
  setDataInLocalStorage(dataFromLocalStorage);
  const bookItem = document.createElement("li");
  bookItem.innerHTML = `
    <p>Title: ${Book.title}</p>
    <p>Author: ${Book.author}</p>
    <button onclick="removeBook(${Book.id})">Remove</button>`;
  booksList.appendChild(bookItem);
  document.querySelector(".title").value = '';
  document.querySelector(".author").value = '';
}

function removeBook(id) {
  const dataFromLocalStorage = getDataFromLocalStorage();
  dataFromLocalStorage.myBooks = dataFromLocalStorage.myBooks.filter(
    (book) => book.id !== id
  );
  setDataInLocalStorage(dataFromLocalStorage);
  renderUI(dataFromLocalStorage.myBooks);
}

function renderUI(myBooks) {
  booksList.innerHTML = "";
  myBooks.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.innerHTML = `
    <p>Title: ${book.title}</p>
    <p>Author: ${book.author}</p>
    <button onclick = "removeBook(${book.id})">Remove</button>`;
    booksList.appendChild(bookItem);
  });
}

function getDataFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem("booksData"));
}

function setDataInLocalStorage(data) {
  window.localStorage.setItem("booksData", JSON.stringify(data));
}

form.addEventListener("submit", addBook);
