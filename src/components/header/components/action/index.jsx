import React from "react";
import Authentification from "./authentification";
import Cart from "./cart";
import SearchHeader from "./search";
import "./style.scss"
function Action(props) {
  return (
    <div className="action">
      <SearchHeader />
      <Authentification />
      <Cart />
    </div>
  );
}

export default Action;
