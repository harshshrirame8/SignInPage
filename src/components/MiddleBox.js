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
            <div className = "stand">
            <div className = "line"><p >You have been Logged In Successfully !</p></div>
            <div className = "line2"><p >Please confirm your Email by clicking the link sent on <span className = 'ss'>{props.email}</span> !</p></div>
            </div>
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
