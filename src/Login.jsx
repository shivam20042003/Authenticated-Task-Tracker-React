import { useState } from 'react';
import React from "react";
import './Login.css'
import { Outlet, Link,useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    function login(){
        if(localStorage.getItem(email)==null){
            window.alert('user dosnt exist');
        }
        else if(email==''||pass==''){
            window.alert('feilds can not be empty');
        }
        else{
            
            if (JSON.parse(localStorage.getItem(email)).pass!=pass) {
                window.alert('Password incorrect');
            }
            else{
                navigate('/home', {state : {key : email} });   
            }
        }
    }
    return(
        <>
        <div className="form">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                <br/>
                <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} />
                <br/>
                <button onClick={login}>Login</button>
            </form>
            <div id="google-btn"></div>
            <p>don't have an account <Link to="/signup">signup</Link></p>
            <Outlet />
        </div>
        </>
    )
}

export default Login;