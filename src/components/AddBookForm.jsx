import { useState } from "react";

function AddBookForm(props) {
const [title,setTitle] = useState("");
const [author,setAuthor] = useState("");

function handleSubmit(){
    if(title ===""|| author===""){
        alert("Please fill all fields");
        return;
    }
   const newBook = {
    title: title, 
    author: author, 
    status: "AVAILABLE"};
    props.addBook(newBook);
    setTitle("")
    setAuthor("")
   }




  return (
    <div className="form-card">

      <h2>Add New Book</h2>

      <input
        type="text"
        placeholder="Enter Book Title"
        value={title}
        onChange={(e) =>setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Book
      </button>

    </div>
  );
}

export default AddBookForm;