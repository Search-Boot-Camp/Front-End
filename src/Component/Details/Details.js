/*jshint esversion: 6 */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import logo from './../../img/site_logo.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
// import Ad from '../Ad/Ad';
import Ad from '../Ad/Ad';
// import styled {css} from 'styled-components';

const Details = () => {
    const { id } = useParams();
    const [detailData,setDetailData] = useState([]);
    useEffect(() => {
        let completed = false;

        async function get()
        {
            const result = await axios(`/api/bootcamp/${id}`);
            if(!completed) { setDetailData(result.data); }
        }
        get()
        return() => { completed = true }
    }, [id]);

    const curriculum = [{ id:1, text:"교육 과정"}, { id:11, text:detailData.bootcamp_name}];
    const term = [{ id:2, text:"교육 기간"}, { id:21, text:detailData.training_period}];
    const Field = [{ id:3, text:"교육 분야"}, { id:31, text:detailData.tech_stack}];
    const price = [{ id:4, text:"가격"}, { id:41, text:detailData.price}];
    const recruitment = [{ id:5, text:"모집 여부"}, { id:51, text:detailData.accept}];
    const startdate = [{ id:6, text:"모집 시작일"}, { id:61, text:detailData.apply_start}];
    const onoff = [{ id:7, text:"온/오프라인"}, { id:71, text:detailData.on_offline}];
    const Place = [{ id:8, text:"장소"}, { id:81, text:detailData.place}];
    const qualification = [{ id:9, text:"지원 자격"}, { id:91, text:detailData.apply_condition}];
    const process = [{ id:10, text:"지원 과정"}, { id:101, text:detailData.apply_course}];
    const card = [{ id:11, text:"국민내일배움카드"}, { id:111, text:detailData.k_digital}];

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


    console.log("4", detailData.program);

    const onErrorImg = (e) => {
        e.target.src = logo;
     } 


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
                    {detailData.brand_name}
                    </p>
                    <img id="bcimg" alt="" src={"../../"+(detailData.image_id)+".png"} onError={onErrorImg}/>
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
