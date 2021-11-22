const myBooks = [];

const form = document.querySelector('form');
const booksList = document.querySelector('.books');
let bookCount = 0;


function addBook(e) {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const Book = {
        title,
        author,
        id:bookCount+1
    }
    bookCount = bookCount+1
    myBooks.push(Book);
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
<p>${Book.title}</p>
<p>${Book.author}</p>
<button onclick = "removeBook(${Book.id})">Remove</button>`
booksList.appendChild(bookItem);
}

function removeBook(id) {
    myBooks.splice(id, 1);
    console.log(myBooks)
}
form.addEventListener('submit', addBook);
