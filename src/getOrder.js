import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateList } from "./reducer/action";
const intialState = {
  name: "",
  bun: 2,
  salad: true,
  noOfCheesee: 0,
  noOfCutlet: 0,
  total: 0
};
const rateList = {
  bun: 5,
  salad: 5,
  cheesee: 1,
  cutlet: 2
};
const OrderForm = ({ submitForm }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(intialState);
  const [totalAmount, setTotalAmount] = useState(0);
  const updateFormField = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const calculateAmount = (inputs) => {
    let total = 0;
    total += inputs.bun * rateList.bun;
    if (inputs.salad) {
      total = total + rateList.salad;
    }
    total += inputs.noOfCheesee * rateList.cheesee;
    total += inputs.noOfCutlet * rateList.cutlet;
    return total;
  };
  useEffect(() => {
    setTotalAmount(calculateAmount(inputs));
  }, [inputs]);
  const submit = (e) => {
    e.preventDefault();
    dispatch(updateList({ ...inputs, total: totalAmount }));
  };
  return (
    <form>
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => updateFormField("name", e.target.value)}
          value={inputs.name}
        />
      </div>
      <div>
        <label>Bun</label>
        <input
          type="text"
          disabled
          onChange={updateFormField}
          value={inputs.bun}
        />
      </div>
      <div>
        <label>salad</label>
        <input
          name="salad"
          type="radio"
          checked={inputs.salad === true}
          onChange={(e) => updateFormField("salad", true)}
          value={inputs.salad}
        />
        <input
          name="salad"
          type="radio"
          checked={inputs.salad === false}
          onChange={(e) => updateFormField("salad", false)}
          value={inputs.salad}
        />
      </div>
      <div>
        <label>Cheese</label>
        <input
          type="number"
          onChange={(e) => updateFormField("noOfCheesee", e.target.value)}
          value={inputs.noOfCheesee}
        />
      </div>
      <div>
        <label>CutLet</label>
        <input
          type="number"
          onChange={(e) => updateFormField("noOfCutlet", e.target.value)}
          value={inputs.noOfCutlet}
        />
      </div>
      <h3>Totals:{totalAmount}</h3>
      <button onClick={submit}>Order </button>
    </form>
  );
};
export const OrderPage = () => {
  return (
    <div>
      <h4>Order</h4>
      <OrderForm />
    </div>
  );
};
