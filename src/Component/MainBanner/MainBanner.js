import React, { Component } from "react";
// import { Link } from "react-router-dom";
import StyledSlider from "react-slick";
import './MainBanner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//  은빈 : 현재 이미지가 비율이 안맞는데 이미지 금방 수정하겠습니다~ 

export default class MainBanner extends Component {
  render() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerPadding: '20px',
    autoplay: true
  };


    return (
      <div id="frame">
        <div id="bannertitle">
          <div id="maintitle"> Weekly Boot Camp </div>
          <hr id="hr" />
        </div>
        <div id="mainbanner">
        <StyledSlider {...settings}>
          {/* <Link to="/"> */}
          <div className="bnrimg">
            <img className="imgs" src="cropmbti.jpg" alt="" />
          </div>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <div className="bnrimg">
            <img className="imgs" src="hang99.jpg" alt="" />
          </div>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <div className="bnrimg">
            <img className="imgs" src="ooah.jpg" alt="" />
          </div>
          {/* </Link> */}
        </StyledSlider>
        </div> 
      </div>
    );
  }
}