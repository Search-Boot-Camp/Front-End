import './ImgBox.css';
import React from 'react';
// import bootData from './bootdata.js';

function BootCard(props)
{
  return (
    <div className="col-md-4">
      <div className="bootimg-box">
        <div className="img-info">
          {/* src={require(`./${props.boots.brand_name}.png`).default} */}
          <img alt="없음" src={'./'+(props.boots.brand_name)+'.png'} width="100%" height="100%"/>
        </div>
        <h6 id="boot-brand-name"> { props.boots.bootcamp_name } </h6>
      </div>
    </div>
  );
}

function ImgBox(props) 
{ 
  return (
    <div>
      <div className="container" id="bootimg-container">
        <div className="row">
        {
          props.data && props.data.map((item,num)=>
          { return <BootCard boots={props.data[num]} num={num} key={num}/> })
        }
        </div>
      </div>
    </div>
    );
}

export default ImgBox;