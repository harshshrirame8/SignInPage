import React from 'react';
import './leftBox.css'
import {MdLogin, MdOutlineManageAccounts} from 'react-icons/md'
import {useEffect} from 'react';

function LeftBox (props) {

    useEffect(() =>{
        const allli = document.querySelector('.leftBox ul').querySelectorAll('li');
        function changeActive(){
            allli.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        }
        allli.forEach(n => n.addEventListener('click' , changeActive))
    } , [])

    if(props.success){
        return (<div>
            <div className = "leftBoxx">
                <ul>
                    <li className='active' onClick={() => props.setHasAcc(false)}>
                        <a href = "#">
                            <i> <MdOutlineManageAccounts/></i>
                            <p>Sign Up</p>
                        </a>
                        
                    </li>
                    <li onClick={() => props.setHasAcc(true)}>
                        <a href = "#">
                            <i> <MdLogin /></i>
                            <p>Log In</p>
                        </a>
                    </li>
                </ul>
            </div>
          </div>);
    }
    else{
        return (<div>
            <div className = "leftBox">
                <ul>
                    <li className='active' onClick={() => props.setHasAcc(false)}>
                        <a href = "#">
                            <i> <MdOutlineManageAccounts/></i>
                            <p>Sign Up</p>
                        </a>
                        
                    </li>
                    <li onClick={() => props.setHasAcc(true)}>
                        <a href = "#">
                            <i> <MdLogin /></i>
                            <p>Log In</p>
                        </a>
                    </li>
                </ul>
            </div>
          </div>);
    }
  
}

export default LeftBox;
