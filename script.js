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
const closeDialogButton = document.getElementById('closeDialog');
        const dialog = document.getElementById('bookDialog');

        showDialogButton.addEventListener('click', () => {
            dialog.showModal();
           
        });

        closeDialogButton.addEventListener('click', () => {
            dialog.close();
        });

        dialog.addEventListener('close', () => {
            if (dialog.returnValue === 'submit') {
                const title = document.getElementById('title').value;
                const author = document.getElementById('author').value;
                const pages = document.getElementById('pages').value;
                console.log(`Title: ${title}, Author: ${author}, Pages: ${pages}`);
            }
        });

