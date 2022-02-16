/*jshint esversion: 6 */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import logo from './../../img/site_logo.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios';
import default_Img from "../../img/site_logo.png";
// import styled {css} from 'styled-components';

const Details = () => {
    // const Name = styled.p`
    // `;
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

    console.log("1", detailData.program);

    const [names] = useState ([
        // 수정 예정
        { id:1, text:"교육 과정"},
        { id:2, text:"교육 기간"},
        { id:3, text:"교육 분야"},
        { id:4, text:"가격"},
        { id:5, text:"모집 여부"},
        { id:6, text:"모집 시작일"},
        { id:7, text:"온/오프라인"},
        { id:8, text:"장소"},
        { id:9, text:"지원 자격"},
        { id:10, text:"지원 과정"},
        { id:11, text:"국민내일배움카드"},
    ]);
    
    console.log("2", detailData.program);

    const details = [
        // 수정 예정
        { id:11, text: detailData.program },
        { id:21, text: detailData.training_period },
        { id:31, text: detailData.tech_stack},
        { id:41, text: detailData.price},
        { id:51, text: detailData.accept},
        { id:61, text: detailData.apply_start},
        { id:71, text: detailData.on_offline},
        { id:81, text: detailData.place},
        { id:91, text: detailData.apply_condition},
        { id:101, text: detailData.apply_course},
        { id:111, text: detailData.k_digital},
    ];

    console.log("3", detailData.program);

    const titleList = names.map(name => <p className="title" key={name.id}>{name.text}</p>);
    const detailList = details.map(detail => <p className="detail" key={detail.id}>{detail.text}</p>);

    console.log("4", detailData.program);

    const onErrorImg = (e) => {
        e.target.src = default_Img;
     } 

    return (
        <div>
        <Header />
        <div id="details-frame">
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
                </div>
                <div id="right-side">
                    <p> {titleList} </p>
                    <p> {detailList} </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Details;