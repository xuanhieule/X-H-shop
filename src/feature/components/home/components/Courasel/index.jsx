import { Carousel } from "antd";
import React from "react";
import "./style.scss";
function Courasel(props) {

  let urlCarousel = [
    {
      link: "#",
      urlImage:
        "https://cdn.32pt.com/uploads/banners/2021/06/11/143a64d5497f8b78.jpeg",
      description: "none",
    },
    {
      link: "#",
      urlImage:
        "https://cdn.32pt.com/uploads/banners/2021/04/23/5b1fb44e5f5c7975.jpg",
      description: "none",
    },
    {
      link: "#",
      urlImage:
        "https://cdn.32pt.com/uploads/banners/2021/01/22/e0a168bf90615e6b.jpg",
      description: "none",
    },
  ];

  return (
    <div className = "Carousel">
      <Carousel autoplay>
        {urlCarousel.map((carousel) => (
          <div className="Carousel__content">
            <a href={carousel.link} >
              <img className="Carousel__content--img" src={carousel.urlImage} alt={carousel.description} />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

Courasel.propTypes = {};

export default Courasel;
