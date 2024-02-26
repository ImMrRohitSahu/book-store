import { useContext, useState } from "react";
import { BookContext } from "../../contexts/BookContext";

// eslint-disable-next-line react/prop-types
const AddBook = ({ setAddPopUp }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [cover_image, setCover_Image] = useState("");
  const [error, setError] = useState("");
  const { books, setBooks } = useContext(BookContext);

  const submitHandler = () => {
    const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
    if (title && author && description && cover_image) {
      if (regexURL.test(cover_image)) {
        const obj = {
          id: books[books.length - 1].id + 1,
          title,
          author,
          description,
          cover_image,
        };
        setBooks([...books, obj]);
        alert("Successfully Added New Book...")
        setAddPopUp(false)
      } else {
        setError("Please Enter Valid URL!!!");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    } else {
      setError("PleaseFill All The Fields!!!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="add-container">
      <div className="input-card">
        <h3>Add Book Here</h3>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Enter Book Title Here..."
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Author Here..."
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Description Here..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Book Image URL Here..."
            onChange={(e) => setCover_Image(e.target.value)}
          />
        </div>
        <span className="error">{error}</span>
        <div className="btn-input">
          <button className="btn-delete" onClick={() => setAddPopUp(false)}>
            Cancel
          </button>
          <button className="btn-edit" onClick={submitHandler}>
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
