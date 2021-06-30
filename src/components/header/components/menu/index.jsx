import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
function Menu(props) {
  return (
    <div className="menu">
      <Row justify="center">
      <Col sm={24} md={24} lg={14} >
      <ul className="menu__list">
        <li className="menu__list--item">
          <NavLink to="/" className="menu__list--catelory" activeClassName="item-active" exact>
            Trang chủ
          </NavLink>
        </li>
        <li className="menu__list--item">
          <NavLink to="/thoi-trang" className="menu__list--catelory" activeClassName="item-active" exact>
            Thời trang
          </NavLink>
        </li>
        <li className="menu__list--item">
          <NavLink to="/lam-dep" className="menu__list--catelory" activeClassName="item-active" exact>
            Làm đẹp
          </NavLink>
        </li>
        <li className="menu__list--item">
          <NavLink to="/khau-trang" className="menu__list--catelory" activeClassName="item-active" exact>
            Khẩu trang
          </NavLink>
        </li>
        <li className="menu__list--item">
          <NavLink to="/dien-tu" className="menu__list--catelory" activeClassName="item-active" exact>
            Điện thoại
          </NavLink>
        </li>
        <li className="menu__list--item">
          <NavLink to="/phu-kien" className="menu__list--catelory" activeClassName="item-active" exact>
            Phụ kiện
          </NavLink>
        </li>
        <li className="menu__list--item">
          <NavLink to="/phu-kien" className="menu__list--catelory" activeClassName="item-active" exact>
            Đồ gia dụng
          </NavLink>
        </li>
        <li className="menu__list--item">
          <NavLink to="/phu-kien" className="menu__list--catelory" activeClassName="item-active" exact>
            Đồ ăn vặt
          </NavLink>
        </li>
        <li className="menu__list--item">
          <NavLink to="/phu-kien" className="menu__list--catelory" activeClassName="item-active" exact>
            Mã giảm giá
          </NavLink>
        </li>
      </ul>
        </Col>
      </Row>
    </div>
  );
}

Menu.propTypes = {};

export default Menu;
