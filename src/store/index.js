import { combineReducers } from "redux";
import book from "./modules/book";
import modal from "./modules/modal";

export default combineReducers({
  book,
  modal,
});
