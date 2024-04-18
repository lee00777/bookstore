import React from "react";
import BookItem from "./BookItem";
import { useSelector } from "react-redux";
import "./BookList.css";

export default function BookList() {
  const books = useSelector((state) => state.book.books);

  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookItem key={book.id} book={book} />;
      })}
    </div>
  );
}
