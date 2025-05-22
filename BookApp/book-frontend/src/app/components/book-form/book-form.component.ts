import { Component } from '@angular/core';
import { BookService, Book } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  constructor(private bookService: BookService) { }

  // addBook(): void {
  //   this.bookService.addBook(this.book).subscribe(() => {
  //     alert('Book added successfully!');
  //     window.location.reload(); // ✅ Reloads the page to refresh the book list
  //   });
  // }
  addBook(): void {
    if (this.book.id === 0) {
      // Add new book
      this.bookService.addBook(this.book).subscribe(() => {
        alert('Book added!');
        window.location.reload();
      });
    } else {
      // Update existing book
      this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
        alert('Book updated!');
        window.location.reload();
      });
    }
  }

}
