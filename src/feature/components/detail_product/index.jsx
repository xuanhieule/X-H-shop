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
              <span>250.000 VNĐ</span>
            </div>
            <div className="detail__description--type">
              <p className="detail__description--name">
                <span style={{ fontWeight: 700 }}>kiểu: </span> Classic T-Shirt
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
                <span style={{ fontWeight: 700 }}>Màu: </span> Black
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
                  Số lượng:{" "}
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
              <h2>Thông tin sản phẩm</h2>
              <ul>
                <li>Gân và cổ áo khâu đôi</li>
                <li>Giặt máy an toàn</li>
                <li>Unisex</li>
                <li>Sản phẩm tự hào được in tại Hoa Kỳ</li>
              </ul>
              <p>
                Tất cả các sản phẩm được thực hiện theo đơn đặt hàng và in theo
                tiêu chuẩn tốt nhất hiện có. Chúng không bao gồm các vật trang
                trí, chẳng hạn như kim cương giả,...
              </p>
              <hr />
              <h2>Thông tin vận chuyển</h2>
              <p>Đơn đặt hàng sẽ được giao trong 2 - 4 ngày.</p>
              <p>Đơn hàng trên 300.000 sẽ được miễn phí ship.</p>
              <p>
                Tìm hiểu thêm về phí vận chuyển của chúng tôi tại đây và lợi
                nhuận của chúng tôi, hoàn lại tiền và chính sách trao đổi tại
                đây.
              </p>
              <hr />
              <h2>Keywords & Tags</h2>
              <hr />
              <h2> Báo cáo sản phẩm </h2>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

DetailProduct.propTypes = {};

export default DetailProduct;
