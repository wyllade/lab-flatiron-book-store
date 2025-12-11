// Select the header and update it with the bookstore name
const headerElement = document.getElementById("header");
headerElement.textContent = bookStore.name;

// Remove the example placeholder book if it exists
const exampleBook = document.getElementById("delete-this");
if (exampleBook) {
  exampleBook.remove();
}

// Select the book list container
const bookList = document.getElementById("book-list");

// Loop through each book in the bookstore object
bookStore.books.forEach((book) => {
  // Create a container <li> for each book
  const bookItem = document.createElement("li");

  // Create the title element and set its text
  const titleEl = document.createElement("h3");
  titleEl.textContent = book.title;

  // Create the author element and set its text
  const authorEl = document.createElement("p");
  authorEl.textContent = book.author;

  // Create the image element and set its source
  const imgEl = document.createElement("img");
  imgEl.src = book.imageUrl;  // Use the correct property from the object

  // Append title, author, and image to the book container
  bookItem.appendChild(titleEl);
  bookItem.appendChild(authorEl);
  bookItem.appendChild(imgEl);

  // Append the book container to the book list
  bookList.appendChild(bookItem);
});
