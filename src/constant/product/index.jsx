import React from "react";
import PropTypes from "prop-types";
import FormatPrice from "../format_price";
import "./style.scss";

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
Product.defauldProps = {
  product: {},
};
function Product(props) {
  let { product } = props;
  return (
    <div className="product">
      <img src={product.img} alt="" className="product__img" />
      <p className="product__name">{product.name}</p>
      <p className="product__price">
        {FormatPrice(String(product.price))} VNĐ{" "}
      </p>
    </div>
  );
}

export default Product;
