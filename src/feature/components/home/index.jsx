import { Col, Row } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Carousel from "./components/Courasel";
import FeaturesCatelory from "./components/features_catelory";
import Recommend from "./components/recomend";

function Home(props) {
  return (
    <div>
      <Row justify="center">
        <Col sm={24} md={24} lg={14}>
          <Carousel />
          <FeaturesCatelory />
          <Recommend />
  
        </Col>
      </Row>
    </div>
  );
}

export default Home;
