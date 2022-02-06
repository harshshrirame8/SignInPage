import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React  , {useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import { auth } from '../firebase';
import './MainPage.css'
import {GoMail} from 'react-icons/go'
import {BiLock} from 'react-icons/bi'



const MainPage = (props) => {
    const handleSignup = async () =>{
      if(props.confirmpass !== props.pass){
        props.setPassError('Passwords do not match')
      }else{
        try{
          const user = await createUserWithEmailAndPassword(auth ,props.email,props.pass)
          props.setSuccess(true)
        }
        catch(error){
          props.setError('Invalid Credentials Entered !!')
        }
      }
        
      }
    
      const handlelogin = async () =>{
        try{
          const user = await signInWithEmailAndPassword(auth ,props.email,props.pass)
          props.setSuccess(true)
        }
        catch(error){
          props.setError('Invalid Credentials Entered !!')
        }
      }
    
      
    
      const handleLogout = () =>{
        signOut()
      }
    
      const userListener = () =>{
        auth.onAuthStateChanged((user) =>{
          if(user){
            props.setUser(user)
            
          }
          else{
            props.setUser('')
          }
        });
      };
    
      useEffect(() => {
        userListener()
      } , [])
    
      const clearInput = () =>{
        props.setEmail('')
        props.setPass('')
        props.setConfirmPass('')
      }
    
      const clearError = () =>{
        props.setError('')
      }
    const acc = props.hasAcc
    
    if(acc){
      if(props.success){
        return(
          <div className='Anibox'>
            <label className='lbl'>Email</label>
          <div className='Email'>
            <i><GoMail/></i>
            <input type='text' placeholder = "xyz@gmail.com" onChange={(e) => {props.setEmail(e.target.value)}}></input>
          </div>
          
          <label className='lbl'>Password</label>
          <div className = "Pass">
          <i><BiLock/></i>
          <input type = 'password' onChange={(e) => {props.setPass(e.target.value)}}></input>
          </div>
          <p className = "err">{props.error}</p>
            <button className = 'button' onClick={handlelogin}>Login </button><p></p>
            <p className = "warn">By Sigining in, You agree to our terms and conditions</p>
            </div>
      )
      }
      else{
        return(
          <div className = "Boxx">
            <label className='lbl'>Email</label>
          <div className='Email'>
            <i><GoMail/></i>
            <input type='text' placeholder = "xyz@gmail.com" onChange={(e) => {props.setEmail(e.target.value)}}></input>
          </div>
          
          <label className='lbl'>Password</label>
          <div className = "Pass">
          <i><BiLock/></i>
          <input type = 'password' onChange={(e) => {props.setPass(e.target.value)}}></input>
          </div>
          <p className = "err">{props.error}</p>
            <button className = 'button' onClick={handlelogin}>Login </button><p></p>
            <p className = "warn">By Sigining in, You agree to our terms and conditions</p>
            </div>
      )
      }
        
    }
    else{
      if(props.success){
        return(
          <div className='Anibox'>
              <label className='lbl'>Email</label>
              <div className='Email'>
                <i><GoMail/></i>
                <input type='text' placeholder = "xyz@gmail.com" onChange={(e) => {props.setEmail(e.target.value)}}></input>
              </div>
              
              <label className='lbl'>Password</label>
              <div className = "Pass">
              <i><BiLock/></i>
              <input type = 'password' onChange={(e) => {props.setPass(e.target.value)}}></input>
              </div>
              
              <label className='lbl'>Confirm Password</label>
              <div className = "Pass">
              <i><BiLock/></i>
              <input type = 'password' onChange={(e) => {props.setConfirmPass(e.target.value)}}></input>
              </div>
              <p className='err'>{props.error}</p>
            
              <button className = 'button' onClick={handleSignup}>Create Account</button><p></p>
              <p className = "warn">By Sigining in, You agree to our terms and conditions</p>
  
          </div>
          )
      }
      else{
        return(
          <div className='Box'>
              <label className='lbl'>Email</label>
              <div className='Email'>
                <i><GoMail/></i>
                <input type='text' placeholder = "xyz@gmail.com" onChange={(e) => {props.setEmail(e.target.value)}}></input>
              </div>
              
              <label className='lbl'>Password</label>
              <div className = "Pass">
              <i><BiLock/></i>
              <input type = 'password' onChange={(e) => {props.setPass(e.target.value)}}></input>
              </div>
              
              <label className='lbl'>Confirm Password</label>
              <div className = "Pass">
              <i><BiLock/></i>
              <input type = 'password' onChange={(e) => {props.setConfirmPass(e.target.value)}}></input>
              </div>
              <p className='err'>{props.error}</p>
            
              <button className = 'button' onClick={handleSignup}>Create Account</button><p></p>
              <p className = "warn">By Sigining in, You agree to our terms and conditions</p>
  
          </div>
          )
      }
        
    }
    
}

export default MainPage;
