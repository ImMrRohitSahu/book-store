import { createContext, useEffect, useState } from "react";
import allbook from "/src/app/books.json";

export const BookContext = createContext();

// eslint-disable-next-line react/prop-types
const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(allbook);
  }, []);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {" "}
      {children}{" "}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
