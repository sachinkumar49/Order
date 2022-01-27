import { orderTypes } from "./actionType";
export const intialState = {
  createOrder: {
    name: "",
    bun: 2,
    salad: true,
    noOfCheesee: 0,
    noOfCutlet: 0,
    total: 0
  },
  orderList: []
};

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case orderTypes.ORDER_SUBMIT: {
      return { ...state, orderList: [...state.orderList, action.payload] };
    }
    default: {
      return state;
    }
  }
};
