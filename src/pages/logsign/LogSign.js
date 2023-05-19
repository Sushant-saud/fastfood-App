import React from "react";
import "./logsign.css";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { auth } from '../../firebase'

function LogSign() {
  const navigate = useNavigate();
  const user=localStorage.getItem("name");
  const handleClick=()=>{
    localStorage.clear();
    navigate("/login") 
  }
  return (
    <div className="loginsign">
      {
        user?  <NavLink to="/login"><span className="sign" onClick={handleClick}>logout</span></NavLink>:<>
                <NavLink to="/login"><span className="sign">Login</span></NavLink>
                <NavLink to="/signup"><span className="log">SignUp</span></NavLink>
        </>
}  
    </div>
  );
}
export default LogSign;
