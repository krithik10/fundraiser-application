import React,{ useState }from 'react'
import './login.css'
const Login = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className="container">
        <div className="header">
            <div className="text">
                {action}
            </div>
           <center>  <div className="underline"></div></center> 
        </div>

        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src="" alt="" />
                <input type="text" placeholder='Username'/>
            </div>}
            
            <div className="input">
                <img src="" alt="" />
                <input type="username" placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src="" alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgotpass">Forgot Password?  <span>Click here!</span></div>}
        
        <div className="submit_container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

    </div>
  )
}

export default Login;

