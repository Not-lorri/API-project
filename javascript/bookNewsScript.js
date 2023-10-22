// Fetchs the book API
const getBooks = () => {
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=zQ1er5ohNYGsdRbzBNJrMsAwAtwnNkxk')
    .then(res => res.json())
    .then(book =>  bookList(book.results))
}

// Adds the book info into the table
const bookList =  (book) => {
    console.log(book)
    book.books.forEach(element => {
        document.getElementById('bookTable').innerHTML += 
        `
        <th scope="row">${element.rank}</th>
        <td scope="row"><img class="bookImg" src="${element.book_image}" alt="booImage"></td>
        <td scope="row" class="book">${element.title}</td>
        <td scope="row" class="book">${element.author}</td>
        <td scope="row" class="book">${element.publisher}</td>
        `;
    })
}

getBooks()

