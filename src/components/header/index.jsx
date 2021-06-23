import { Col, Row } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Action from "./components/action";
import Menu from "./components/menu";
import "./style.scss";

function Header(props) {
  return (
    <div className="header">
      <Row justify="center">
        <Col sm={24} md={24} lg={14} >
           <Action />
        </Col>
        <Col sm={24} md={24} lg={24}>
            <Menu />
        </Col>
      </Row>
    </div>
  );
}

export default Header;
