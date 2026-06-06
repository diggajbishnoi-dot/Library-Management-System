
import { useState ,useEffect} from "react";
import BookCard from "../components/BookCard";
import AddBookForm from '../components/AddBookForm'

function Catalog()
 {
    
    
    
    const [books, setBooks] = useState([
  {
    title: "Dune",
    author: "Frank Herbert",
    status: "AVAILABLE"
  },
  {
    title: "1984",
    author: "George Orwell",
    status: "ISSUED"
  }
]);
const [search,setSearch] = useState("");
function addBook(newBook) {
  setBooks([
    ...books,
    newBook
  ]);
}
function toggleStatus(title){
    const updatedBooks = books.map((book) => {
        if(book.title === title){
            return {
                ...book,
                status:
                book.status === "AVAILABLE" ? "ISSUED": "AVAILABLE"
            };

            
        }
        return book;
    });
    setBooks(updatedBooks);
}
   const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(search.toLocaleLowerCase())
);

const [loading,setLoading] = useState(true);

setTimeout(() => {
    setLoading(false);
}, 3000);
if(loading){
            return <h2>Loading Books...</h2>
        }

  return (
    <div className="catalog">

      <h1>Library Management System</h1>

      <input
        type="text"
        placeholder="Search Books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
        <AddBookForm addBook={addBook}/>
      <hr />

      <h2>Add New Book</h2>

      
      <hr />
        
      <div className="book-grid">
        {filteredBooks.length === 0 ? (
            <h2>No Matching Books Found in the Library</h2>
        ) : (
    filteredBooks.map((book,index) => (
        <BookCard
        key ={index}
        title={book.title}
        author={book.author}
        status={book.status}
        toggleStatus={toggleStatus}
        />
    ))
)}
</div>

    </div>
  );
}

export default Catalog;