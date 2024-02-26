import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookContext";

// eslint-disable-next-line react/prop-types, no-unused-vars
const EditBook = ({ setEditPopUp, editId }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [cover_image, setCover_Image] = useState("");
  const [error, setError] = useState("");
  const { books, setBooks } = useContext(BookContext);
  const [book, setBook] = useState([])

  useEffect(()=>{
    const filteredItem = books.filter((item)=>item.id===editId)
    if(filteredItem.length > 0){
        const {title, author, description, cover_image} = filteredItem[0]
        setBook(filteredItem)
        setTitle(title)
        setAuthor(author)
        setDescription(description)
        setCover_Image(cover_image)
    }
  },[books, editId])

  const submitHandler = () => {
    const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
    if (title && author && description && cover_image) {
      if (regexURL.test(cover_image)) {
        const obj = {
          ...book[0],
          title,
          author,
          description,
          cover_image,
        };
        const updateBook = books.map((item)=>item.id===obj.id ? obj : item)
        setBooks(updateBook)
        alert("Successfully Edited Book...");
        setEditPopUp(false);
      } else {
        setError("Please Enter Valid URL!!!");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } else {
      setError("Please Fill All The Fields!!!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="add-container">
      <div className="input-card">
        <h3>Edit Book Here</h3>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter Book Title Here..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="Enter Book Author Here..."
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <input
            type="text"
            placeholder="Enter Book Description Here..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <input
            type="text"
            placeholder="Enter Book Image URL Here..."
            onChange={(e) => setCover_Image(e.target.value)}
            value={cover_image}
          />
        </div>
        <span className="error">{error}</span>
        <div className="btn-input">
          <button className="btn-delete" onClick={() => setEditPopUp(false)}>
            Cancel
          </button>
          <button className="btn-edit" onClick={submitHandler}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
