import { orderTypes } from "./actionType";
const updateList = (payload) => (dispatch) => {
  const data = { type: orderTypes.ORDER_SUBMIT, payload: payload };
  return dispatch(data);
};
export { updateList };
