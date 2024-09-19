import React, { useState } from "react";
import './Signup.css';
import { Outlet, Link,useNavigate,useParams } from "react-router-dom";

function Signup(){
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [con,setCon] = useState('');
    let data = {key:"",pass:"",userD:{name:"",email:""},todoData:[]};
    function signup(){
        if(pass!=con){
            window.alert('Check pass');
        }
        else if(name==''||email==''||pass==''){
            window.alert('feilds can not be empty');
        }
        else{
            if (localStorage.getItem(email)) {
                window.alert('already a user');
            }
            else{
                data.key = email;
                data.pass = pass;
                data.userD.name = name;
                data.userD.email = email;
                localStorage.setItem(email,JSON.stringify(data));
                navigate('/home', {state : {key : email} });   
            }
        }
    }
    return(
        <>
        <div className="form">
            <h2>Register</h2>
            <form >
                <div>
                    <input type="text" placeholder="FullName" onChange={(e)=>setName(e.target.value)} />
                
                </div>
                <div>
                    <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                    
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} />
                
                </div>
                <input type="password" placeholder="ConfirmPassword" onChange={(e)=>setCon(e.target.value)} />
                <button onClick={signup}>SignUp</button>
            </form>
            <div id="google-btn">    
            </div>
            <p>Already a user <Link to='/' >login</Link></p>
            <Outlet/>
        </div>
    </>
    )
}
export default Signup;