import React from "react";
import "./EditModal.css";
import { useDispatch, useSelector } from "react-redux";
import { updatebook, changeinput } from "../store/modules/book";
import { closemodal } from "../store/modules/modal";

export default function EditModal() {
  const books = useSelector((state) => state.book.books);
  const modal = useSelector((state) => state.modal.selectedBook);
  const selectedBook = books.find((book) => book.id === modal);
  const dispatch = useDispatch();

  const { id, name, price, category, description } = selectedBook;

  const updateBook = (e) => {
    e.preventDefault();
    dispatch(updatebook(selectedBook.id));
    dispatch(closemodal());
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <form className="new-event-form" onSubmit={updateBook}>
          <h3>Update Book Information</h3>
          <p>
            <label>Name:</label>
            <input type="text" onChange={(e) => dispatch(changeinput({ id, name: e.target.name, input: e.target.value }))} name="name" placeholder={name} />
          </p>
          <p>
            <label>Price($): </label>
            <input type="number" onChange={(e) => dispatch(changeinput({ id, name: e.target.name, input: e.target.value }))} name="price" placeholder={price} />
          </p>
          <p>
            <label>Category:</label>
            <input type="text" onChange={(e) => dispatch(changeinput({ id, name: e.target.name, input: e.target.value }))} name="category" placeholder={category} />
          </p>
          <p>
            <label>Description: </label>
            <input type="text" onChange={(e) => dispatch(changeinput({ id, name: e.target.name, input: e.target.value }))} name="description" placeholder={description} />
          </p>
          <div className="modal-btn-parent">
            <button>Update</button>
            <button className="close-btn" onClick={() => dispatch(closemodal())}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
