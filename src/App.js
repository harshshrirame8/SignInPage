import React  , {useState , useEffect} from 'react';
import MainPage from './components/MainPage';

import { auth } from './firebase';
import './App.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import LeftBox from './components/leftBox';
import MiddleBox from './components/MiddleBox';

const App = () =>{
  const [user , setUser] = useState('')
  const [email , setEmail] = useState('')
  const [pass , setPass] = useState('')
  const [confirmpass , setConfirmPass] = useState('')
  const [error , setError] = useState('')
  const [hasAcc , setHasAcc] = useState(false)
  const [success , setSuccess] = useState(false)

  

  return (
    <div className="App">
      <LeftBox success = {success} setSuccess = {setSuccess} hasAcc = {hasAcc} setHasAcc = {setHasAcc}/>
      <MiddleBox email = {email} success = {success} setSuccess= {setSuccess}/>
      <MainPage success = {success} setSuccess= {setSuccess} confirmpass = {confirmpass} setConfirmPass = {setConfirmPass} hasAcc = {hasAcc} setHasAcc = {setHasAcc}  setUser = {setUser} user = {user} setError = {setError} error = {error} email = {email} setEmail = {setEmail} pass = {pass} setPass = {setPass} />
    </div>
  );

  }
export default App;
