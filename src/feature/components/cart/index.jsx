import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import "./style.scss";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
function Cart(props) {
  return (
    <div>
      <Row justify="center">
        <Col sm={24} md={24} lg={14}>
          <div className="cart">
            <div className="products">
              <div className="head">
                <span className="head__left">Giỏ hàng của bạn</span>
                <span className="head__right">8 sản phẩm</span>
              </div>
              <div className="main">
                <div className="product-buy">
                  <img
                    className="product-buy__img"
                    src="https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/96ADD59D5AB5E7/96ADD59D5AB5E7-FB3CA1666C50-GS0-TC0-BLK/front/medium.jpg"
                    alt=""
                  />
                  <div className="product-buy__item">
                    <div>
                      <span className="product-buy__item__name">
                        Jone watsed yore Jone watsed yore
                      </span>
                      <span>
                        <CloseOutlined className="product-buy__item__close" />
                      </span>
                    </div>
                    <p className="product-buy__item__info-product">
                      Classic T-Shirt / Black / M / Qty 1
                    </p>
                    <div>
                      <span className="product-buy__item__edit">sửa</span>
                      <span className="product-buy__item__price">250.000</span>
                    </div>
                    <button className="product-buy__item__add-product">
                      Thêm sản phẩm
                    </button>
                  </div>
                </div>
                <div className="main__line"></div>
                <div className="product-buy">
                  <img
                    className="product-buy__img"
                    src="https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/96ADD59D5AB5E7/96ADD59D5AB5E7-FB3CA1666C50-GS0-TC0-BLK/front/medium.jpg"
                    alt=""
                  />
                  <div className="product-buy__item">
                    <div>
                      <span className="product-buy__item__name">
                        Jone watsed yore Jone watsed yore
                      </span>
                      <span>
                        <CloseOutlined className="product-buy__item__close" />
                      </span>
                    </div>
                    <p className="product-buy__item__info-product">
                      Classic T-Shirt / Black / M / Qty 1
                    </p>
                    <div>
                      <span className="product-buy__item__edit">sửa</span>
                      <span className="product-buy__item__price">250.000</span>
                    </div>
                    <button className="product-buy__item__add-product">
                      Thêm sản phẩm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="buy">
              <div className="buy__subtotal">
                  <span className="buy__subtotal__title">Tổng tiền: </span>
                  <span className="buy__subtotal__price">250.000 VNĐ</span>
              </div>
              <div className="buy__line"></div>
              <div className="buy__ship">
                <span className="buy__ship__left">Phí vận chuyển</span>
                <span className="buy__ship__right">Miễn phí</span>
              </div>
              <a href="/thanh-toan">
              <button className="buy__submit">Thanh toán</button>
              </a>
              
            </div>
          </div>
          <div className="recommend"></div>
        </Col>
      </Row>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
