function BookCard(props) {
  return (
    <div className="book-card">

      <h3>{props.title}</h3>

      <p>{props.author}</p>

      <span className={props.status === "AVAILABLE" ? "status available" : 'status issued'}>
      {props.status}
      </span>

      <button 
  onClick={() => props.toggleStatus(props.title)}
>
        {props.status ==="AVAILABLE" ? "Borrow Book" : "Return Book"
        }
      </button>
    </div>
  );
}

export default BookCard;