import React from "react";
import styles from "./styled.module.css";
import Slider from "react-slick";
import "./style.css";
import banner1 from '../../../assets/category/banner1.png'
import banner2 from '../../../assets/category/banner2.png'
import banner3 from '../../../assets/category/banner3.png'

import { BigContainer } from "../../../styled-app";
import Banner from "../../../assets/home/banner.png";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 2000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.news_section}>
        <BigContainer>
          <div className={styles.row_wrap}>
            <Slider {...settings}>
              <div>
                <img className={styles.slider_img} src={banner1} alt="" />
              </div>
              <div>
                <img className={styles.slider_img} src={banner2} alt="" />
              </div>
              <div>
                <img className={styles.slider_img} src={banner3} alt="" />
              </div>
            </Slider>
          </div>
        </BigContainer>
      </div>
    </>
  );
};

export default News;
