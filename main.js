// book class: represent a book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

// ul class: Handle storage
 class UI {
    static displayBooks(){
        const StoredBooks = [
        {
            title : 'Book One',
            author: 'John Doe',
            isbn : '455545'
        },
        {
            title: 'book two',
            author: 'Jane Doe',
            isbn: '343434'
        }
    ];

     const books = StoredBooks;
     books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td> <a href = '#' class='btn btn-danger btn-sm delete'>X</a> </td>
        `;

        list.appendChild(row)
    }
      
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
 }

// event : display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a book

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    // prevent actial submit
    e.preventDefault()
    
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // instatiate book
    const book = new Book(title, author, isbn);

    // ADD book to ui
    UI.addBookToList(book);

    // clear filed
    UI.clearFields();
});
