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

