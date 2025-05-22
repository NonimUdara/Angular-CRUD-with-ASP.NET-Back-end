import { Component, OnInit } from '@angular/core';
import { BookService, Book } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  editBook(book: Book): void {
    this.bookService.selectedBook = { ...book }; // copy the book data
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => this.loadBooks(),
      error: (err) => {
        if (err.status === 404) {
          alert('Book not found. It may have already been deleted.');
        } else {
          alert('An error occurred while deleting the book.');
        }
      }
    });
  }

}
