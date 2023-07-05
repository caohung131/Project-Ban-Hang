import React from 'react'
import "../login/login_css.css"
import { useState } from "react";
import { Input } from 'antd';
import Admin from '../Admin';
import { Route, Routes } from 'react-router-dom';

const LoginAdmin = (props) => {

  const [inputNameAdmin, setInputUseNameAdmin] = useState('') 
  const [inputPassWordAdmin, setInputPassWordAdmin] = useState('') 

  const handleOnchaneId = (e) => {
    setInputUseNameAdmin(e.target.value)
    console.log(e.target.value)
  }

  const handleOnchanePassW = (e) => {
    setInputPassWordAdmin(e.target.value)
  }

  const handleLoginAdmin = (e) => {
    e.preventDefault();
    
    const obj = {
      userName: inputNameAdmin,
      passWord: inputPassWordAdmin
    }

    console.log(obj)
    if( obj.userName == 'admin' && obj.passWord == 123456 ) {
        props.setIsLoggin(true);
    }
  }

  return (
    <>
      <div className="container-login">
        <form action className="form-login-wrap">
          <div className="title-login-admin">
            <h2>Sign In</h2>
          </div>
          <div className="itemt">
            <p>Email address</p>
            <Input type="text" placeholder="Enter email" onChange={handleOnchaneId} />
          </div>
          <div className="itemt">
            <p>Password</p>
            <Input type="text" placeholder="Enter password" onChange={handleOnchanePassW} />
          </div>
          <button type="submit" className="submit" onClick ={handleLoginAdmin}>Submit</button>
          <div className="forgot-password">
            <p>Forgot</p>
            <a href>password?</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginAdmin
