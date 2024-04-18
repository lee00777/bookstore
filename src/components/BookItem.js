import React from "react";
import { useDispatch } from "react-redux";
import { showmodal } from "../store/modules/modal";
import { deletebook } from "../store/modules/book";

export default function BookItem({ book }) {
  const { id, name, price, category, description } = book;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-item-info" onClick={() => dispatch(showmodal(id))}>
        <h3>Name : {name} </h3>
        <p>
          <b>Price ($) </b> : {price}
        </p>
        <p>
          <b>Category</b> : {category}
        </p>
        <p>
          <b>Description </b>: {description}
        </p>
      </div>
      <button className="delete-btn" onClick={() => dispatch(deletebook(id))}>
        Delete
      </button>
    </div>
  );
}
