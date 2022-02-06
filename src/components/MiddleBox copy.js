import React from 'react';
import './MiddleBox.css'
import img from './man.png'
import {TiTick} from 'react-icons/ti'
import img1 from './img1.png'
import img2 from './img2.png'

function MiddleBox(props) {
  if(props.success){
    return(
      <div className = 'MiddleBoxx'>
        <div className = "Success">
            <p>Success !</p>
            <img src = {img1} className = "one"></img>
            <img src = {img2} className = "two"></img>
        </div>
      </div>
    )
  }
  else{
    return (<div className = 'MiddleBox'>
    <div className = "text">
          Start Your Journey.
    </div>
    <div className = 'sp'>
      We cost nothing !
    </div>
    <div >
      <img className = "img" src = {img} ></img>
    </div>
    </div>);
  }
  
}

export default MiddleBox;
