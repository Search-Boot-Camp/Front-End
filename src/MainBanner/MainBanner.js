import React, { Component } from "react";
import Slider from "react-slick";
import '../ResetCSS.css';
import './MainBanner.css';
import styled, { css } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MainBanner extends Component {
  render() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '20px',
  };
  const StyledSlider = styled(Slider)`
  .slick-slide div{
    /* outline: none; */
  }
`;

    const Bannertitle = styled.p`
        display: flex;
        flex-direction: row;
        /* width: 80%; */
        margin-left: 40px;
    `;



    const Frame = styled.div`
        margin: 60px 80px;
    `;

    const Maintitle = styled.p`
    margin-right: 30px;
    margin-left: 30px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    `;

    const MainBanner = styled.div`
      width: 88%;
      margin-left: 40px;
    `;

    return (
      <Frame>
        <Bannertitle>
          <Maintitle> Weekly Boot Camp </Maintitle>
          <hr className="hr" width="115vh" border="1px solid #C4C4C4" />
        </Bannertitle>
        <MainBanner>
        <StyledSlider {...settings}>
          <div className="bnrimg">
            <h3>1</h3>
          </div>
          <div className="bnrimg">
            <h3>2</h3>
          </div>
          <div className="bnrimg">
            <h3>3</h3>
          </div>
        </StyledSlider>
        </MainBanner> 
      </Frame>
    );
  }
}