window.addEventListener("load", () => {
//   let myBooks = new Array();
//   let bookCount = 0;

  const booksData = JSON.parse(window.localStorage.getItem("booksData"));
  if (!booksData) {
    const dataToBeStored = {
      myBooks: [],
      bookCount: 0,
    };
    window.localStorage.setItem("booksData", JSON.stringify(dataToBeStored));
  }

  const form = document.querySelector("form");
  const booksList = document.querySelector(".books");

  function addBook(e) {
    e.preventDefault();
    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const Book = {
      title,
      author,
      id: bookCount + 1,
    };
    bookCount = bookCount + 1;
    myBooks.push(Book);
    const bookItem = document.createElement("li");
    bookItem.innerHTML = `
    <p>Title: ${Book.title}</p>
    <p>Author: ${Book.author}</p>
    <button onclick = "removeBook(${Book.id})">Remove</button>`;
    booksList.appendChild(bookItem);
  }

  function removeBook(id) {
    myBooks = myBooks.filter((book) => book.id !== id);
    renderUI();
  }

  function renderUI() {
    booksList.innerHTML = "";
    myBooks.forEach((book) => {
      const bookItem = document.createElement("li");
      bookItem.innerHTML = `
    <p>Title: ${book.title}</p>
    <p>${book.author}</p>
    <button onclick = "removeBook(${book.id})">Remove</button>`;
      booksList.appendChild(bookItem);
    });
  }

  form.addEventListener("submit", addBook);
});
