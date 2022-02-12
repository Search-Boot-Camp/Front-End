import './ImgBox.css';
import React, { useState } from 'react';
import bootData from './bootdata.js';

function BootCard(props)
{
  return (
    <div className="col-md-4">
      <div className="bootimg-box">
        <div className="img-info">
          <img src={"bootimg"+(props.i) + ".png"} width="100%" height="100%"/>
        </div>
        <h4> { props.boots.title } </h4>
        <p> {props.boots.content} and {props.boots.price}</p>
      </div>
    </div>
  );
}

function ImgBox() 
{
  let [boots,setBoots] = useState(bootData);
  
  return (
    <div>
      <div className="container" id="bootimg-container">
        <div className="row">
        {
          boots.map((a,i)=>
          { return <BootCard boots={boots[i]} i={i} key={i}/> })
        }
        </div>
      </div>
    </div>
    );
}

export default ImgBox;