import React, {useState} from "react";
import Lottie from "lottie-react";
import { Link ,useNavigate } from "react-router-dom"
import { useNavigation } from 'react-router-dom';
import animationData from "./triangle.json"
import axios from "axios";
import NewsFeed from "./interfaces/body/newsfeed";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("Vous n'avez pas de  compte ?");
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();
    const navigation = useNavigation();

    const data = ("mandady")

    //CONNEXION
    const handle = () => {
        axios.post('http://localhost:5000/connexion', {
        username: username,
        password: password  
    })
    .then(response => { 
        console.log(response.data);
        console.log(username);
        console.log(password);        
        if(response.data.length){
            setInfo(response.data)
            navigate("/interface");
            console.log("messgae");
        }else{
            setError("Information incorrect");
        }
    })
    .catch(error => {
        console.log(error);
        setError("Erreur inconnue")
        });
    };
    

    //LOTTIE STYLE
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



    return(
    <div style={containerStyle} >
        <Lottie animationData={animationData} style={animationStyle} />
        <div className="form_box" >
            <div className="form_titre" >
               <h2>Connexion</h2>  
               <p>{error}</p> 
               <Link className="connexz" to={"/form"} >Créer un compte</Link>
            </div>
            <div className="Champ1"  >
               <input className="input2" onChange={(e) => {setUsername(e.target.value)} } placeholder="Nom d'utilisateur" />
            </div>
            <div className="Champ1"  >
               <input className="input2" onChange={(e) => {setPassword(e.target.value)} } placeholder="Mot de passe" />
            </div>
            <div className="Champ1"  >
               <button className="btn25" onClick={handle} >Se connecter</button>
            </div>    
       </div>
   </div>
    )
}

export default Login;