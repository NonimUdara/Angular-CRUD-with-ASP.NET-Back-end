import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BookService, Book } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnChanges {
  @Input() editBook: Book | null = null;

  book: Book = {
    id: 0,
    title: '',
    author: '',
    isbn: '',
    publicationDate: ''
  };

  constructor(private bookService: BookService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editBook'] && this.editBook) {
      this.book = { ...this.editBook };
    }
  }

  submit(): void {
    if (this.book.id === 0) {
      this.bookService.addBook(this.book).subscribe(() => {
        alert('Book added!');
        window.location.reload();
      });
    } else {
      this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
        alert('Book updated!');
        window.location.reload();
      });
    }
  }
}
