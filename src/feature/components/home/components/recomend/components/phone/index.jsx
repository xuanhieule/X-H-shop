import React from "react";
import PropTypes from "prop-types";
import Product from "../../../../../../../constant/product";
import "./style.scss";

function RecommendPhone(props) {
  let banner = {
    link: "#",
    img: "https://scalable-licensing.s3.amazonaws.com/uploads/banners/2021/05/10/b5071edb1cdcc0a.jpg",
    title: "Quà tặng dành cho bạn",
    description: "đã sẵn sàng",
    button: "Nhận ngay >",
  };

  let bannerPhone = {
    link: "#",
    img: "https://scalable-licensing.s3.amazonaws.com/uploads/banners/2021/03/23/27e2d4104c8b8100.jpg",
    title: "Quà tặng dành cho bạn",
    description: "đã sẵn sàng",
    button: "Nhận ngay >",
  };

  let listProduct = [
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
      <div>
        <a href={banner.link} className="banner">
          <img src={banner.img} alt="" className="banner__img" />
          <div className="banner__content">
            <p className="banner__content--title">{banner.title}</p>
            <p className="banner__content--description">{banner.description}</p>
            <p className="banner__content--button">{banner.button}</p>
          </div>
        </a>
      </div>

      <div className="phone">
        <div className="phone__left">
          {listProduct.map((product) => (
            <Product product={product} />
          ))}
        </div>
        <div className="phone__right">
          <a href={bannerPhone.link} className="phone__right--banner">
            <img src={bannerPhone.img} alt="" className="phone__right--img" />
            <div className="phone__right--content">
              <h2 className="phone__right--title">{banner.title}</h2>
              <h3 className="phone__right--description">
                {banner.description}
              </h3>
              <p className="phone__right--button">{banner.button}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

RecommendPhone.propTypes = {};

export default RecommendPhone;
