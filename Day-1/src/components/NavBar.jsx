import React ,{usestate} from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar(){

  return(
    <div class="topnav">
  <a class="active" href="#home">DF_Funds</a>
  <a href="About.jsx">About</a>
  <a href="#contact">Donate</a>
  <a href="Login.jsx">Sign in</a>
  </div>
  
  
    // <div className="topnav">
    //   <Link to="/" className="active">
    //     DF_Funds
    //   </Link>
    //   <Link to="/about">About</Link>
    //   {/* <Link to="/donate">Donate</Link> */}
    //   <Link to="/login">Sign in</Link>
    // </div>
  );
}

  export default NavBar;





