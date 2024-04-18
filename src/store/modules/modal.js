const SHOWMODAL = "modal/SHOWMODAL";
const CLOSEMODAL = "modal/CLOSEMODAL";
const SHOWADDMODAL = "modal/SHOWADDMODAL";
const CLOSEADDMODAL = "modal/CLOSEADDMODAL";

export const showmodal = (payload) => ({ type: SHOWMODAL, payload });
export const closemodal = () => ({ type: CLOSEMODAL });
export const showaddmodal = () => ({ type: SHOWADDMODAL });
export const closeaddmodal = () => ({ type: CLOSEADDMODAL });

const initialState = {
  isModalActive: false,
  selectedBook: {},
  isAddModalActive: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOWMODAL:
      return { isModalActive: true, selectedBook: action.payload };
    case CLOSEMODAL:
      return { isModalActive: false };
    case SHOWADDMODAL:
      return { isAddModalActive: true };
    case CLOSEADDMODAL:
      return { isAddModalActive: false };
    default:
      return state;
  }
};
export default reducer;
