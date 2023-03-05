import React from "react";
import { useNavigate } from "react-router-dom";
import "./image/ezara.png"

const Navbar = () => {

  const navigate = useNavigate();
  const handle = () => {
    navigate("/login")
  }

  return (
    <nav className="navbar" >
      <div className="container" >
        <div className="logo" ><h2>ENI-ZARA</h2></div>
      </div>
      <div className="nav-elements" >
        <ul>
          <li className="connexion" >
            <button className="lien-a" onClick={handle}>Connexion</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;