const myBooks = [];

const form = document.querySelector('form');
const booksList = document.querySelector('.books');
booksList.innerHTML = `<li>
<p>titlle</p>
<p>author</p>
<button>Remove</button>
</li>`

function addBook() {
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    const Book = {
        title,
        author
    }
    myBooks.push(Book);
}
form.addEventListener('submit', addBook);
