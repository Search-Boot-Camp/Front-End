/*jshint esversion: 6 */

import React, { useState } from 'react';
import './Details.css';
import logo from './../../img/site_logo.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Ad from '../Ad/Ad';
import Ad from '../Ad/Ad';
// import styled {css} from 'styled-components';

const Details = () => {
    const curriculum = [{ id:1, text:"교육 과정"}, { id:11, text:"안녕하세요 내 이름은 안재현 자고싶은데 언제 잘까요?"}];
    const term = [{ id:2, text:"교육 기간"}, { id:21, text:"교육 기간"}];
    const Field = [{ id:3, text:"교육 분야"}, { id:31, text:"교육 분야"}];
    const price = [{ id:4, text:"가격"}, { id:41, text:"가격"}];
    const recruitment = [{ id:5, text:"모집 여부"}, { id:51, text:"모집 여부"}];
    const startdate = [{ id:6, text:"모집 시작일"}, { id:61, text:"모집 시작일"}];
    const onoff = [{ id:7, text:"온/오프라인"}, { id:71, text:"온/오프라인"}];
    const Place = [{ id:8, text:"장소"}, { id:81, text:"장소"}];
    const qualification = [{ id:9, text:"지원 자격"}, { id:91, text:"지원 자격"}];
    const process = [{ id:10, text:"지원 과정"}, { id:101, text:"지원 과정"}];
    const card = [{ id:11, text:"국민내일배움카드"}, { id:111, text:"국민내일배움카드"}];

    const curriculumList = curriculum.map(curriculum => <p className="title" key={curriculum.id}>{curriculum.text}</p>);
    const termList = term.map(term => <p className="title" key={term.id}>{term.text}</p>);
    const FieldList = Field.map(Field => <p className="title" key={Field.id}>{Field.text}</p>);
    const priceList = price.map(price => <p className="title" key={price.id}>{price.text}</p>);
    const recruitmentList = recruitment.map(recruitment => <p className="title" key={recruitment.id}>{recruitment.text}</p>);
    const startdateList = startdate.map(startdate => <p className="title" key={startdate.id}>{startdate.text}</p>);
    const onoffList = onoff.map(onoff => <p className="title" key={onoff.id}>{onoff.text}</p>);
    const PlaceList = Place.map(Place => <p className="title" key={Place.id}>{Place.text}</p>);
    const qualificationList = qualification.map(qualification => <p className="title" key={qualification.id}>{qualification.text}</p>);
    const processList = process.map(process => <p className="title" key={process.id}>{process.text}</p>);
    const cardList = card.map(card => <p className="title" key={card.id}>{card.text}</p>);

    return (
        <div>
        <Header />
        <div className='container' id="details-frame">
            <div id="logo-container">
                <img className="main-logo" src={logo} alt="없음"/>
            </div>
            <div id="details-bannertitle">
                <hr id="details-hr" />
                <div id="details-maintitle"> Search Boot Camp </div>
                <hr id="details-hr" />
            </div>
            <div id="bg">
                <div id="left-side">                   
                    <p id="name">
                        한 줄 이름
                    </p>
                    <img id="bcimg" src={logo} alt="" />
                    <button type="button" id="linkbt" onclick="location.href={링크}">➡ 더 알아보기 ➡</button>
                </div>
                <div className='lists'>
                    <div className='list'> {curriculumList} </div> 
                    <div className='list'> {termList} </div> 
                    <div className='list'> {FieldList} </div>
                    <div className='list'> {priceList} </div>
                    <div className='list'> {recruitmentList} </div>
                    <div className='list'> {startdateList} </div>
                    <div className='list'> {onoffList} </div>
                    <div className='list'> {PlaceList} </div>
                    <div className='list'> {qualificationList} </div>
                    <div className='list'> {processList} </div>
                    <div className='list'> {cardList} </div>
                </div>
            </div>
        </div>
        <Ad />
        <Footer />
    </div>
    )
}

export default Details;
