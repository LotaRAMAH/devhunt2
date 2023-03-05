import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as MySVG } from './svg/not.svg';
import { ReactComponent as MySVG2 } from './svg/dex.svg';

const Navbar = () => {

  const navigate = useNavigate();
  const handle = () => {
    navigate("/login")
  }

  return (

    <div className="navbar2" >
      <div className="logo2" >
        <div><p>ENI-ZARA</p></div>
      </div>
      <div className="nav-link" >
        <div className="svg-box" ><MySVG width={"20px"} height={"20px"} className="svgnav"/></div>
        <div className="svg-box" onClick={handle} ><MySVG2 width={"20px"} height={"20px"} className="svgnav"/></div>
        <div className="svg-box" ><p>Profil</p></div>
      </div>
    </div>
    
  )
}

export default Navbar;