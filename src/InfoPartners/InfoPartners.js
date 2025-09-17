import "./InfoPartners.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo1 from "../Images/logo/ford.png";
import logo2 from "../Images/logo/Gulf_logo.png";
import logo3 from "../Images/logo/Logo_MAN.png";
import logo4 from "../Images/logo/mercedes.png";
import logo5 from "../Images/logo/Volvo-Logo.wine.png";
import logo6 from "../Images/logo/renault.png";
import "./InfoPartnersMedia.css"

export default function InfoPartners() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  let arr_logo = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
  ];
  return (
    <>
      <div className="partners_section">
        <div className="shadow">
          <div className="info_partner">
            <h1>Information Partners</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. 
            </p>
          </div>
          <div className="slider">
            <Slider {...settings}>
              {arr_logo.map((elsel) => {
                return (
                  <div className="img_div">
                    <img src={elsel} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
