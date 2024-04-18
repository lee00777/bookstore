import React from "react";
import BookList from "./BookList";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import { useDispatch, useSelector } from "react-redux";
import { showaddmodal } from "../store/modules/modal";
import "./Book.css";

export default function Book() {
  const books = useSelector((state) => state.book.books);
  const isModalActive = useSelector((state) => state.modal.isModalActive);
  const isAddModalActive = useSelector((state) => state.modal.isAddModalActive);
  const dispatch = useDispatch();

  return (
    <div className="books">
      <h2>Welcome to bookstore!</h2>
      <div className="add-btn-container">
        <button className="add-btn" onClick={() => dispatch(showaddmodal())}>
          Add Books
        </button>
      </div>

      {books.length === 0 ? (
        <p className="no-data-indicator">
          There is no book information available.<br></br> Add books by clicking the "ADD" button
        </p>
      ) : (
        <BookList />
      )}
      {isModalActive && <EditModal />}
      {isAddModalActive && <AddModal />}
    </div>
  );
}
