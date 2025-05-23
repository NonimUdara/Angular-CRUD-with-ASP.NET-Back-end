using Microsoft.AspNetCore.Mvc;
using BookApi.Models;
using System.Linq;

namespace BookApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        //In memory book list
        private static List<Book> books = new List<Book>();

        //GET - api/books
        [HttpGet]
        public IActionResult GetBooks()
        {
            return Ok(books);
        }

        //POST - api/books
        [HttpPost]
        public IActionResult AddBook(Book book)
        {
            book.Id = books.Count > 0 ? books.Max(b => b.Id) + 1 : 1;
            books.Add(book);
            return Ok(book);
        }

        //PUT - api/books/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, Book updatedBook)
        {
            var book = books.FirstOrDefault(b => b.Id == id);
            if (book == null)
            {
                return NotFound();
            }

            book.Title = updatedBook.Title;
            book.Author = updatedBook.Author;
            book.ISBN = updatedBook.ISBN;
            book.PublicationDate = updatedBook.PublicationDate;

            return Ok(book);
        }

        //DELETE - api/books/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = books.FirstOrDefault(b => b.Id == id);
            if (book == null)
            {
                return NotFound();
            }

            books.Remove(book);
            return Ok();
        }
    }
}
