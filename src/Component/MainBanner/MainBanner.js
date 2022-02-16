import React, {Component} from "react";
import {Link} from "react-router-dom";
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
            centerPadding: '20px',
            autoplay: true
        };

        return (
            <div id="frame">
                <div id="bannertitle">
                    <div id="maintitle">
                        Welcome to our page
                    </div>
                    <hr id="hr"/>
                </div>
                <div id="mainbanner">
                    <StyledSlider {...settings}>
                        {/* <Link to="/"> */}
                        <div className="bnrimg">
                            <a target="_blank" href="http://sbc-mbti.com.s3-website.ap-northeast-2.amazonaws.com/" rel="noreferrer">
                                <img className="introimgs" src="mbtiBanner.png" alt=""/>
                            </a>
                        </div>
                        <Link to="/introduce" className="bnrimg">
                            <img className="introimgs" src="introduceBanner.png" alt=""/>
                        </Link>
                        {/* <Link to="/"> */}
                        <div className="bnrimg">
                            <a target="_blank" href="https://www.likelion.net/univ/" rel="noreferrer">
                                <img className="introimgs" src="notionBanner.png" alt=""/>
                            </a>
                        </div>
                    </StyledSlider>
                </div>
            </div>
        );
    }
}