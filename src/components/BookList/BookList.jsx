import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookContext";
import { Link } from "react-router-dom";
import EditBook from "../EditBook/EditBook";

const BookList = () => {
  const { books, setBooks } = useContext(BookContext);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [editPopUp, setEditPopUp] = useState(false);
  const [editId, setEditId] = useState("")

  const deleteHandler = (id) => {
    setBooks(books.filter((item) => item.id !== id));
  };

  useEffect(() => {
    setData(books.filter((item) => item.title.toLowerCase().includes(search)));
  }, [search, books]);

  return (
    <>
      <div className="search-div">
        <input
          type="text"
          placeholder="Search Book Here..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <div className="list-container">
        {data.map((book, i) => {
          return (
            <div className="card" key={i}>
              <div className="card-img-div">
                <img src={book.cover_image} />
              </div>
              <div className="card-info-div">
                <h6>Title : {book.title}</h6>
                <h6>Author : {book.author}</h6>
              </div>
              <div className="card-div-d-b">
                <Link to={`/book/${book.id}`} className="link">
                  <div className="card-detail-div">
                    <span>&gt;</span>
                    <span>&gt;</span>
                    <span>&gt;</span>
                    <span>View Detail</span>
                  </div>
                </Link>
                <div className="card-btn-div">
                  <button
                    className="btn-delete"
                    onClick={() => deleteHandler(book.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn-edit"
                    onClick={() =>{ setEditPopUp(true); setEditId(book.id)}}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {editPopUp && <EditBook editId={editId} setEditPopUp={setEditPopUp}/>}
    </>
  );
};

export default BookList;
