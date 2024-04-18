const ADDBOOK = "movie/ADDBOOK";
const UPDATEBOOK = "movie/UPDATEBOOK";
const DELETEBOOK = "movie/DELETEBOOK";
const CHANGEINPUT = "movie/CHANGEINPUT";

export const addbook = (payload) => ({ type: ADDBOOK, payload });
export const updatebook = (payload) => ({ type: UPDATEBOOK, payload });
export const deletebook = (id) => ({ type: DELETEBOOK, id });
export const changeinput = (payload) => ({ type: CHANGEINPUT, payload });

const initialState = {
  temporary: {},
  books: [
    { id: 1, name: "Harry Potter", price: 25, category: "Fantasy", description: "The novels chronicle the lives of a young wizard, Harry Potter, and his friends." },
    { id: 2, name: "Just for the Summer", price: 20, category: "Love", description: "To find their soulmate, all they need is..." },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      const { name, price, category, description } = state.temporary;
      let newBook = {
        id: state.books.length + 1,
        name: name || "N/A",
        price: price || "N/A",
        category: category || "N/A",
        description: description || "N/A",
      };
      let booksAfterAdded = [...state.books, newBook];
      return { ...state, books: booksAfterAdded, temporary: {} };
    case CHANGEINPUT:
      const updated = { ...state.temporary, [action.payload.name]: action.payload.input };
      return { ...state, temporary: updated };
    case UPDATEBOOK:
      const newData = state.books.map((book) => {
        if (book.id === action.payload) {
          return { ...book, ...state.temporary };
        }
        return book;
      });
      return { ...state, books: newData, temporary: {} };
    case DELETEBOOK:
      let booksAfterDeleted = state.books.filter((book) => {
        return book.id !== action.id;
      });
      return { ...state, books: booksAfterDeleted };
    default:
      return state;
  }
};
export default reducer;
