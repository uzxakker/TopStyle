import React from "react";
import styles from "./styled.module.css";
import { BigContainer } from "../../styled-app";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "./style.css";

// import img
import logo1 from "../../assets/partner/7.png";
import logo2 from "../../assets/partner/8.png";
import logo3 from "../../assets/partner/9.png";
import logo4 from "../../assets/partner/10.png";
import logo5 from "../../assets/partner/11.png";
import logo6 from "../../assets/partner/12.png";
import logo7 from "../../assets/partner/13.png";
import logo8 from "../../assets/partner/14.png";
import logo9 from "../../assets/partner/15.png";
import logo10 from "../../assets/partner/16.png";
import logo11 from "../../assets/partner/17.png";
import logo12 from "../../assets/partner/18.png";
import logo13 from "../../assets/partner/19.png";
import logo14 from "../../assets/partner/20.png";
import logo15 from "../../assets/partner/21.png";
import logo16 from "../../assets/partner/22.png";
import logo17 from "../../assets/partner/23.png";
import logo18 from "../../assets/partner/24.png";
import logo19 from "../../assets/partner/25.png";
import logo20 from "../../assets/partner/26.png";
import logo21 from "../../assets/partner/27.png";
import partnerLogo from "../../assets/partner/partnerlogo.png";
// import img

const Partner = () => {
  const { t } = useTranslation();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    rows: 3,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2 
        },
      },
    ],
  };
  return (
    <div className={styles.partner_section}>
      <BigContainer>
        <div className={styles.row_wrap}>
          <div className={styles.choose_title}>
            <h2>{t("Order.17")}</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.scroll_div}>
            <img className={styles.position_img} src={partnerLogo} alt="" />
            <Slider {...settings}>
              <div>
                <img src={logo1} alt="" />
              </div>
              <div>
                <img src={logo2} alt="" />
              </div>
              <div>
                <img src={logo3} alt="" />
              </div>
              <div>
                <img src={logo4} alt="" />
              </div>
              <div>
                <img src={logo5} alt="" />
              </div>
              <div>
                <img src={logo6} alt="" />
              </div>
              <div>
                <img src={logo7} alt="" />
              </div>
              <div>
                <img src={logo8} alt="" />
              </div>
              <div>
                <img src={logo9} alt="" />
              </div>
              <div>
                <img src={logo10} alt="" />
              </div>
              <div>
                <img src={logo11} alt="" />
              </div>
              <div>
                <img src={logo12} alt="" />
              </div>
              <div>
                <img src={logo13} alt="" />
              </div>
              <div>
                <img src={logo14} alt="" />
              </div>
              <div>
                <img src={logo15} alt="" />
              </div>
              <div>
                <img src={logo16} alt="" />
              </div>
              <div>
                <img src={logo17} alt="" />
              </div>
              <div>
                <img src={logo18} alt="" />
              </div>
              <div>
                <img src={logo19} alt="" />
              </div>
              <div>
                <img src={logo20} alt="" />
              </div>
              <div>
                <img src={logo21} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </BigContainer>
    </div>
  );
};

export default Partner;
