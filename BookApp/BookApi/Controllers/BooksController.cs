using Microsoft.AspNetCore.Mvc;
using BookApi.Models;

namespace BookApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private static List<Book> books = new List<Book>();

        [HttpGet]
        public IActionResult GetBooks() => Ok(books);

        [HttpPost]
        public IActionResult AddBook(Book book)
        {
            book.Id = books.Count + 1;
            books.Add(book);
            return Ok(book);
        }

        // Optional: update and delete methods...
    }
}
