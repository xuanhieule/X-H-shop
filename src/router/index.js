
import { Route, Redirect } from "react-router";
import { Switch } from "react-router-dom";
import Home from "../feature/components/home";
import ListProduct from "../feature/components/list_product_of_catelory";
import Main from "../components/main"
import DetailProduct from "../feature/components/detail_product";
import Cart from "../feature/components/cart";
import CheckOut from "../feature/components/checkout";
function Routes() {
  return (
    <Switch>
      <Route path="/trang-chu" component={Home} />
      <Route path="/thoi-trang" component={ListProduct} />
      <Route path="/main" component={Main} />
      <Route path="/san-pham/:id" component={DetailProduct} />
      <Route path="/gio-hang" component={Cart} />
      <Route path="/thanh-toan" component={CheckOut} />

      <Redirect from="/" to="/trang-chu" exact />
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default Routes;
