import "./styles.css";

import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuLink } from "./menu";
import { OrderPage } from "./getOrder";
import { OrderDetails } from "./orderDetails";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MenuLink />
          <Routes>
            <Route exact path="/order" element={<OrderPage />} />
            <Route exact path="/orderDetails" element={<OrderDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
