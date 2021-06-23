import "antd/dist/antd.css";
import React from "react";
import Product from "../../../../../../../constant/product";
import "./style.scss";
function RecommendMen(props) {
  const list = [
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
  ];
  return (
    <div>
      <p className="title-catelogy">Đề xuất dành cho bạn</p>
        <div className="catelory__men">
          {list.map((product) => (
            <Product product={product} />
          ))}
        </div>
    </div>
  );
}

export default RecommendMen;
