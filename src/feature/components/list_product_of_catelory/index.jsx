import React from "react";
import Filter from "../../../constant/filter";
import Product from "../../../constant/product";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./style.scss";
import { Select } from "antd";
import { UnorderedListOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
function ListProduct(props) {
  const product = [
    {
      id: "1",
      name: "Áo thun cotton Essential Tee",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/67A6FA5A4BF0B3/67A6FA5A4BF0B3-B318EB73D2F9-GS0-TC0-BLK/front/medium.jpg",
    },
    {
      id: "2",
      name: "Áo thun cotton compact",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/C7E5E4A8A2B5B7/C7E5E4A8A2B5B7-5C06E696BF85-GS0-TC0-BLK/front/medium.jpg",
    },
    {
      id: "3",
      name: "Áo thun cotton 100%",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/439DE122C2E4B2/439DE122C2E4B2-01353252C342-GS0-TC0-BLK/front/medium.jpg",
    },
    {
      id: "4",
      name: "Mũ lưỡi chai",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/A72385A9B7E0F7/A72385A9B7E0F7-FCBEB20C9A8E-HE2-E200-BLK/front/medium.jpg",
    },
    {
      id: "5",
      name: "Mũ lưỡi chai",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/A72385A9B7E0F7/A72385A9B7E0F7-FCBEB20C9A8E-HE2-E200-BLK/front/medium.jpg",
    },
    {
      id: "6",
      name: "Mũ lưỡi chai",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/A72385A9B7E0F7/A72385A9B7E0F7-FCBEB20C9A8E-HE2-E200-BLK/front/medium.jpg",
    },
    {
      id: "7",
      name: "Mũ lưỡi chai",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/A72385A9B7E0F7/A72385A9B7E0F7-FCBEB20C9A8E-HE2-E200-BLK/front/medium.jpg",
    },
    {
      id: "8",
      name: "Mũ lưỡi chai",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/A72385A9B7E0F7/A72385A9B7E0F7-FCBEB20C9A8E-HE2-E200-BLK/front/medium.jpg",
    },
    {
      id: "9",
      name: "Mũ lưỡi chai",
      price: 250000,
      img: "https://cdn.32pt.com/public/sl-prod-od-0/images/retail-products/A72385A9B7E0F7/A72385A9B7E0F7-FCBEB20C9A8E-HE2-E200-BLK/front/medium.jpg",
    },
  ];

  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div>
      <Row justify="center">
        <Col sm={24} md={24} lg={14}>
          <div className="main">
            <div className="main__filter">
              <Filter />
            </div>
            <div className="main__content">
              <div className="main__content--action">
                <div className="main__content--show">
                 <span> Hiển thị <span style={{color:"#fc6514"}}>{product.length} </span> sản phẩm</span>
                </div>
                <div className="main__content--sort">
                  <span><UnorderedListOutlined /> </span>  <span>Sắp xếp: </span>
                  <Select
                    bordered={false}
                    defaultValue="bestSale"
                    style={{ width: "135px", color:"#fc6514" }}
                    dropdownStyle={{color:"#fc6514"}}
                    onChange={handleChange}
                  >
                    <Option  value="bestSale">Top bán chạy</Option>
                    <Option  value="newest">Mới nhất</Option>
                    <Option  value="priceIncrease">Giá: Tăng dần</Option>
                    <Option  value="priceDecrease">Giá: Giảm dần</Option>
                  </Select>
                </div>
              </div>
              <div className="main__content--product">
                {product.map((product) => (
                  <Link to="/san-pham/123">
                  <Product product={product} />
                  </Link>
                  
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

ListProduct.propTypes = {};

export default ListProduct;
