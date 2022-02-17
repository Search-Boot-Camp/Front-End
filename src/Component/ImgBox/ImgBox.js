import './ImgBox.css';
import React from 'react';
import default_Img from "../../img/site_logo.png";
import {Link} from 'react-router-dom';

const onErrorImg = (e) => {
    e.target.src = default_Img;
 } 

function BootCard(props) {
    return (
        <div className="col-md-4">
            <div className="bootimg-box">
                <div className="img-info">
                    <Link to={`/detail/${props.boots.id}`}>
                        <img alt="" src={'../../' + (props.boots.image_id) + '.png'} onError={onErrorImg} width="100%" height="100%"/>
                    </Link>
                </div>
                <p id="boot-brand-name">
                    {props.boots.bootcamp_name}
                </p>
            </div>
        </div>
    );
}

function ImgBox(props) {
    return (
        <div>
            <div className="container" id="bootimg-container">
                <div className="row">
                    {
                        props.data && props
                            .data
                            .map((item, num) => {
                                return <BootCard boots={props.data[num]} num={num} key={num}/>
                            })
                    }
                </div>
            </div>
        </div>
    );
}

export default ImgBox;