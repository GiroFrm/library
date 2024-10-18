// create Object Book
const showDialogButton = document.getElementById('showDialog');
        const bookDialog = document.getElementById('bookDialog');
        const closeDialogButton = document.getElementById('closeDialog');
        const bookForm = document.getElementById('bookForm');
        const bookInfoContainer = document.getElementById('bookInfoContainer');



function Book(id,title, author, pages, read = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    Book.prototype.readStatus = function() {
        this.read = !this.read;
    }

}
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

let myLibrary = [
    new Book(95,"back to the future", "George gipe", 224),
    new Book(45,"To Kill a Mockingbird", " Harper Lee", 281)
]

function addBookToLibrary(Book) {
    myLibrary.push( Book);
}

function displayBooks() {
myLibrary.map((book)=>{
    createBookContainer(book)
})
}

displayBooks();

        showDialogButton.addEventListener('click', () => {
            bookDialog.showModal();
            console.log(myLibrary);
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
                const book = {id:generateId(), title, author, pages}
                bookDialog.close();
                addBookToLibrary(new Book(book));
                createBookContainer(new Book(book));

            } else {
                alert('Please fill in all fields.');
            }
        });


        function createBookContainer(book) {
            const {id, title, author, pages, read } = book;

            const bookInfoDiv = document.createElement('div');
            bookInfoDiv.classList.add('book-info');
            bookInfoDiv.innerHTML = `<strong>Title:</strong> ${title}<br>
                                     <strong>Author:</strong> ${author}<br>
                                     <strong>Pages:</strong> ${pages}<br>
                                     <strong class="read-status">Read: ${read}</strong>;`
            const removeButton = document.createElement('button');
            const toggleButton = document.createElement('button');
            removeButton.textContent = 'remove';
            toggleButton.textContent = 'Read Status'
            removeButton.addEventListener('click', () => {
                bookInfoContainer.removeChild( bookInfoDiv);
                bookInfoContainer.removeChild( removeButton);
                bookInfoContainer.removeChild( toggleButton);
                myLibrary = myLibrary.filter(b => b.id !== id);
                
            });
            toggleButton.addEventListener('click', ()=>{
               book.readStatus();
               bookInfoDiv.querySelector('.read-status').innerHTML = " "
               bookInfoDiv.querySelector('.read-status').textContent = `Read: ${book.read}`;
               console.log( book.read);
            })
            bookInfoContainer.appendChild( bookInfoDiv);
            bookInfoContainer.appendChild(removeButton);
            bookInfoContainer.appendChild(toggleButton);
        }

       
