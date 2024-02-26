import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../contexts/BookContext";

// eslint-disable-next-line react/prop-types
const BookDetail = ({ id }) => {
  const [book, setBook] = useState([]);
  const { books } = useContext(BookContext);
  useEffect(() => {
    setBook(books.filter((item) => item.id === parseInt(id)));
  }, [id, books]);

  return (
    <div className="book-details">
      {book.map((item, i) => {
        return (
          <div className="details-card" key={i}>
            <div className="details-img">
              <img src={item.cover_image} />
            </div>
            <div className="deatils-info">
              <h4>Title : {item.title}</h4>
              <h6>Author : {item.author}</h6>
              <h6>Description : {item.description}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookDetail;
