import { Row } from "antd";
import "antd/dist/antd.css";
import React from "react";
import ListCatelory from "./components/list_catelory";
import "./style.scss";

function FeaturesCatelory(props) {
  let listImg = [
    {
      id: "1",
      name: "Thời trang nam",
      link: "/nam",
      img: "https://scalable-licensing.s3-us-west-2.amazonaws.com/public/images/category-cards/t-shirts-shop.png",
      background: "#d7ebfa",
    },
    {
      id: "2",
      name: "Thời trang nữ",
      link: "/nu",
      img: "https://i.pinimg.com/originals/ab/61/c6/ab61c6f51f67cccfbcb633bfa168cc4d.png",
      background: "#ffc8c7",
    },
    {
      id: "3",
      name: "Khẩu trang",
      link: "/khau-trang",
      img: "https://scalable-licensing.s3-us-west-2.amazonaws.com/public/images/category-cards/printed-face-masks.png",
      background: "#ffeabf",
    },
    {
      id: "4",
      name: "Điện thoại",
      link: "/dien-thoai",
      img: "https://scalable-licensing.s3-us-west-2.amazonaws.com/public/images/category-cards/phone-cases.png",
      background: "#beecd9",
    },
    {
      id: "5",
      name: "Laptop",
      link: "/laptop",
      img: "https://i.dell.com/das/xa.ashx/global-site-design%20web/00000000-0000-0000-0000-000000000000/1/LargePNG?id=Dell/Product_Images/Dell_Client_Products/Workstations/Mobile_Workstations/Precision/5520/workstation-precision-5520-non-touch-black-right-usage-hero-504x350-ng.psd",
      background: "#dfe6e9",
    },
    {
      id: "6",
      name: "Phụ kiện",
      link: "#",
      img: "https://i.pinimg.com/originals/86/c1/ac/86c1ac8bac43ea337f7fe9da5c87a7fd.png",
      background: "#e7e4fb",
    },
  ];
  return (
    <div>
      <p className="title-catelogy">Danh mục nổi bật</p>
      <Row gutter={[40, 40]} justify="space-around" >
        {listImg.map((catelory) => (
          <ListCatelory catelory={catelory} />
        ))}
      </Row>
    </div>
  );
}

FeaturesCatelory.propTypes = {};

export default FeaturesCatelory;
