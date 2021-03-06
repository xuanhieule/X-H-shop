import { Carousel, Col, Row, Select } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "./style.scss";

function DetailProduct(props) {
  const listImg = [
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC0-BLK/front/regular.jpg",
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC0-BLK/back/regular.jpg",
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC0-BLK/apparel-classic-tshirt-lifestyle-front-101/regular.jpg",
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC0-BLK/apparel-classic-tshirt-lifestyle-front-94/regular.jpg",
  ];
  const listType = [
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC0-BLK/front/thumb.jpg",
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC2-BLK/front/thumb.jpg",
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC1-BLK/front/thumb.jpg",
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC4-BLK/front/thumb.jpg",
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-MSV1-TC1003-BRN/front/thumb.jpg",
    "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC7-BLK/front/thumb.jpg",
  ];
  const listColor = [
    "red",
    "pink",
    "yellow",
    "blue",
    "green",
    "black",
    "orange",
    "gray",
  ];
  const listSize = ["S", "M", "L", "XL", "2XL", "3XL"];
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <Row justify="center">
      <Col sm={24} md={24} lg={14}>
        <div className="detail">
          <div className="detail__list-images">
            {listImg.map((url) => (
              <img src={url} alt="" className="detail__list-images--image" />
            ))}
          </div>
          <div className="detail__image">
            <div className="detail__image--number">2/4</div>
            <Carousel afterChange={onChange}>
              {listImg.map((url) => (
                <div>
                  <img src={url} alt="" className="detail__image--image" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="detail__description">
            <div className="detail__description--title">
              <h2>Limited edition Classic T-Shirt</h2>
            </div>
            <div className="detail__description--price">
              <span>250.000 VN??</span>
            </div>
            <div className="detail__description--type">
              <p className="detail__description--name">
                <span style={{ fontWeight: 700 }}>ki????u: </span> Classic T-Shirt
              </p>
              <div className="detail__description--list-type">
                {listType.map((url) => (
                  <img
                    src={url}
                    alt=""
                    className="detail__description--image"
                  />
                ))}
              </div>
            </div>
            <div className="detail__description--color">
              <p className="detail__description--name">
                <span style={{ fontWeight: 700 }}>Ma??u: </span> Black
              </p>
              <div className="detail__description--list-item">
                {listColor.map((color) => (
                  <div
                    style={{
                      background: color,
                      width: "4rem",
                      height: "4rem",
                      borderRadius: "50%",
                      marginTop: "0.5rem",
                      marginRight: "1.5rem",
                      marginBottom: "0.5rem",
                      marginLeft: "0rem",
                      boxShadow: "grey 0.3rem 0.1rem 0.4rem",
                      cursor: "pointer",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="detail__description--size">
              <p className="detail__description--name">
                <span style={{ fontWeight: 700 }}>Size: </span> M
              </p>
              <div className="detail__description--list-itemSize">
                {listSize.map((size) => (
                  <div
                    style={{
                      width: "5rem",
                      height: "5rem",
                      border: "1px solid #b2bec3",
                      borderRadius: "0.5rem",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: 500,
                      paddingTop: "0.8rem",
                      marginTop: "1.5rem",
                      marginRight: "0rem",
                      marginBottom: "0rem",
                      marginLeft: "0rem",
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="detail__description--amount">
              <p className="detail__description--name">
                <span style={{ fontWeight: 700 }}>
                  S???? l??????ng:{" "}
                  <Select
                    defaultValue="1"
                    style={{ width: 60 }}
                    onChange={handleChange}
                  >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                    <Option value="7">7</Option>
                    <Option value="8">8</Option>
                    <Option value="9">9</Option>
                    <Option value="10">10</Option>
                    
                  </Select>{" "}
                </span>
              </p>
              <div className="detail__description--number-amount"></div>
              <a href="/gio-hang"><button className="detail__description--button">Mua ngay</button></a>
              
              <hr />
            </div>

            <div className="detail__description--detail">
              <h2>Th??ng tin sa??n ph????m</h2>
              <ul>
                <li>G??n v?? c??? ??o kh??u ????i</li>
                <li>Gi????t ma??y an toa??n</li>
                <li>Unisex</li>
                <li>S???n ph???m t??? h??o ???????c in t???i Hoa K???</li>
              </ul>
              <p>
                T???t c??? c??c s???n ph???m ???????c th???c hi???n theo ????n ?????t h??ng v?? in theo
                ti??u chu???n t???t nh???t hi???n c??. Ch??ng kh??ng bao g???m c??c v???t trang
                tr??, ch???ng h???n nh?? kim c????ng gi???,...
              </p>
              <hr />
              <h2>Th??ng tin v????n chuy????n</h2>
              <p>????n ??????t ha??ng se?? ????????c giao trong 2 - 4 nga??y.</p>
              <p>????n ha??ng tr??n 300.000 se?? ????????c mi????n phi?? ship.</p>
              <p>
                T??m hi???u th??m v??? ph?? v???n chuy???n c???a ch??ng t??i t???i ????y v?? l???i
                nhu???n c???a ch??ng t??i, ho??n l???i ti???n v?? ch??nh s??ch trao ?????i t???i
                ????y.
              </p>
              <hr />
              <h2>Keywords & Tags</h2>
              <hr />
              <h2> Ba??o ca??o sa??n ph????m </h2>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

DetailProduct.propTypes = {};

export default DetailProduct;
