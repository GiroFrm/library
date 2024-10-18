// create Object Book
function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

const myLibrary = [
    new Book("back to the future", "George gipe", 224),
    new Book("To Kill a Mockingbird", " Harper Lee", 281)
]

function addBookToLibrary(Book) {
    myLibrary.push( Book);
}

const showDialogButton = document.getElementById('showDialog');
        const bookDialog = document.getElementById('bookDialog');
        const closeDialogButton = document.getElementById('closeDialog');
        const bookForm = document.getElementById('bookForm');
        const bookInfoContainer = document.getElementById('bookInfoContainer');

        showDialogButton.addEventListener('click', () => {
            bookDialog.showModal();
        });

        closeDialogButton.addEventListener('click', () => {
            bookDialog.close();
        });

        bookForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = document.getElementById('pages').value;

            if (title && author && pages) {
                bookDialog.close();
                const bookInfoDiv = document.createElement('div');
                bookInfoDiv.classList.add('book-info');
                bookInfoDiv.innerHTML = `<strong>Title:</strong> ${title}<br>
                                         <strong>Author:</strong> ${author}<br>
                                         <strong>Pages:</strong> ${pages}`;
                bookInfoContainer.appendChild(bookInfoDiv);
            } else {
                alert('Please fill in all fields.');
            }
        });

       
