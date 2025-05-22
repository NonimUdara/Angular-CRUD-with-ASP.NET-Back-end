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

  constructor(private bookService: BookService) {}

  addBook(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      alert('Book added successfully!');
      window.location.reload(); // Reload to refresh the book list
    });
  }
}
