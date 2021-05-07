class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
    static displayBooks(){
        const storedBooks = [
            {
                title:'Book one',
                author: 'john',
                isbn: 657565765        
            },
            {
                title:'Book two',
                author: 'john wick',
                isbn: 7878787        
            }
        ];
        const books = storedBooks;

        books.forEach( book => UI.addBookTolist(book) );


    }
    static addBookTolist(book){
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">&times;</a></td>
        `;
        list.appendChild(row);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    static clearFields(){
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("isbn").value = '';
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.getElementById("book-form").addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if(title == '' || author == '' || isbn ==''){

    }
    else{
        const book = new Book(title, author, isbn);
        UI.addBookTolist(book);
        UI.clearFields();
    }
});

document.getElementById("book-list").addEventListener('click', e => {
    UI.deleteBook(e.target);
});

