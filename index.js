const myBooks = [];

const form = document.querySelector('form');
const booksList = document.querySelector('.books');


function addBook(e) {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const Book = {
        title,
        author
    }
    myBooks.push(Book);
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
<p>${Book.title}</p>
<p>${Book.author}</p>
<button>Remove</button>`
booksList.appendChild(bookItem);
}
form.addEventListener('submit', addBook);
