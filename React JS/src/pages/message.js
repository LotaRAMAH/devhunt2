import React from "react";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import animationData from "./triangle.json"

function Message() {

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.5)',
      };
    
      const animationStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      };

      const navigate = useNavigate();

      const handle = () => {

        navigate("/login")

      }

    return(
        <div style={containerStyle} className="msgbox"  >
            <Lottie animationData={animationData} style={animationStyle} />
            <p className="msg" >Inscription Réussi!</p>
            <h2>Connectez-vous pour continuer</h2>
            <button className="btn_connex"  onClick={handle} >Se connecter</button>
        </div>
    )
}

export default Message;