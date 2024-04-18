import React from "react";
import { useDispatch } from "react-redux";
import { changeinput, addbook } from "../store/modules/book";
import { closeaddmodal } from "../store/modules/modal";

export default function AddModal() {
  const dispatch = useDispatch();

  function handlesubmit() {
    dispatch(addbook());
    dispatch(closeaddmodal());
  }
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <form className="new-event-form" onSubmit={handlesubmit}>
          <h3>Add Book Information</h3>
          <p>
            <label> Name: </label>
            <input type="text" onChange={(e) => dispatch(changeinput({ name: e.target.name, input: e.target.value }))} name="name" placeholder="Book name" />
          </p>
          <p>
            <label>Price: </label>
            <input type="number" onChange={(e) => dispatch(changeinput({ name: e.target.name, input: e.target.value }))} name="price" placeholder="Book price" />
          </p>
          <p>
            <label>Category: </label>
            <input type="text" onChange={(e) => dispatch(changeinput({ name: e.target.name, input: e.target.value }))} name="category" placeholder="Book category" />
          </p>
          <p>
            <label>Description: </label>
            <input type="text" onChange={(e) => dispatch(changeinput({ name: e.target.name, input: e.target.value }))} name="description" maxlength="100" placeholder="Book description" />
          </p>
          <div className="modal-btn-parent">
            <button>Add</button>
            <button className="close-btn" onClick={() => dispatch(closeaddmodal())}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
