import { useState, useCallback, Fragment, useEffect } from "react";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
const LoadDynamicRows = ({ rows }) => {
  return (
    <Fragment>
      {rows.map((row) => {
        return (
          <tr key={row.name}>
            <td>{row.name}</td>
            <td>{row.salad ? "yes" : "no"}</td>
            <td>{row.noOfCheesee}</td>
            <td>{row.noOfCutlet}</td>
            <td>{row.total}</td>
          </tr>
        );
      })}
    </Fragment>
  );
};

export const OrderDetails = () => {
  const { orderList } = useSelector((state) => state);
  const updateSearch = (value) => {
    setSearchValue(value);
  };
  const [rowsData, setRowsData] = useState(orderList);
  useEffect(() => {
    setRowsData(orderList);
  }, [orderList]);
  const debounced = useCallback(debounce(updateSearch, 100), []);

  const [searchValue, setSearchValue] = useState("");
  const [rows, setRows] = useState(rowsData);
  const onSearch = (e) => {
    debounced(e.target.value);
  };
  useEffect(() => {
    const updatedRows = orderList.filter((row) =>
      row.name.includes(searchValue)
    );
    setRows(updatedRows);
  }, [searchValue]);
  return (
    <div>
      <input type="text" onChange={onSearch} value={searchValue} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salad</th>
            <th>Number of cheese </th>
            <th>number of cutlet</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{<LoadDynamicRows rows={rows} />}</tbody>
      </table>
    </div>
  );
};
