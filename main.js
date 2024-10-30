class Library {
   constructor(name) {
    this.name = name;
    this.books = []
   }

   addBook(book) {
     this.books.push(book)
   };
   
   removeBook(ISBN) {
     this.books = this.books.filter(book => book.ISBN !== ISBN)
   };

   bookList() {
    this.books.forEach(book => book.bookInfo());
   };
};


class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
    }

  // Method to display information about the book
      bookInfo() {
        console.log(`Title: ${this.title}, Author:${this.author}, ISBN:${this.ISBN}`)
    };
};

// Create an instance of the Library

const myLibrary = new Library("myLibrary ");

// Create instances of Book

const dune = new Book("Dune", "Frank Herbert", "978-0441172719");
const beloved = new Book("Beloved", "Chinua Achebe", "978-0375708255"); 
const emma = new Book("Emma", "Jane Austen", "978-0141439518");




myLibrary.addBook(dune);
myLibrary.addBook(beloved);
myLibrary.addBook(emma);

// List all books in the library
console.log("Books in the library:");
myLibrary.bookList();
console.log("Total books in library:", myLibrary.books.length);

// Remove a book by ISBN
myLibrary.removeBook("978-0141439518");  // Removing "Emma"

// List books again to confirm removal
console.log("Books in library after removal:");
myLibrary.bookList();


