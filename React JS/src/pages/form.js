import React, {useState, useEffect} from "react";
import Lottie from "lottie-react";
import animationData from "./triangle.json"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



function Form() {

    const [matricule, setMatricule] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errror, setError] = useState("Vous avez déja un compte ?");
    const [verfication, setVerfication] = useState(false);
    const [data, setData] = useState([]);
    // const [mamafa, setMamafa] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        if(verfication) {
            regist();
        }

    })

    //VERIFICATION
    const handleClick = (e) => {
   
        axios.post('http://localhost:5000/verification', {
    
            email: email,
    
        })
        .then(response => {
            if(response.data.length > 0) {
                setVerfication(true);
            }
            else {
                setError("Email non reconnue !");
            }
        })
        .catch(error => {
            console.log(error);
        });
        
    };

    //INSERTION APRES VERIFICATION
    const regist = () => {

        axios.post('http://localhost:5000/inscription', {
            matricule: matricule,
            username: username,
            email: email,
            password: password  
        })
        .then(response => {
            console.log(response);           
            if(response.data.message){
                navigate("/message");
                console.log("messgae");
            }
        })
        .catch(error => {
            console.log(error);
        });
        
    };

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
                    <h2>Créer votre compte</h2>  
                    <p>{errror}</p> 
                    <Link className="connexz" to={"/login"} >Se connecter</Link>
                </div>
                <div className="Champ1"  >
                    <input className="input2" onChange={(e) => {setMatricule(e.target.value)} } placeholder="No Matricule" />
                </div>                  
                <div className="Champ1"  >
                    <input className="input2" onChange={(e) => {setUsername(e.target.value)} } placeholder="Nom d'utilisateur" />
                </div>
                <div className="Champ1"  >
                    <input className="input2" onChange={(e) => {setEmail(e.target.value)} } placeholder="Email" />
                </div>
                <div className="Champ1"  >
                    <input className="input2" onChange={(e) => {setPassword(e.target.value)} }  placeholder="Mot de passe" type={"password"} />
                </div>
                <div className="Champ1"  >
                    <button className="btn25" onClick={handleClick} >Créer mon compte</button>
                </div>   
            </div>
        </div>)


}

export default Form;