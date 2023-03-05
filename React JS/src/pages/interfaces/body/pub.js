import React, {useEffect, useState} from "react";
import { ReactComponent as MySVG } from './epingle.svg';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "./popup";

function Pub() {

    const [titre, setTitre] = useState("");
    const [username, setUsername] = useState("");
    const [description, setDescritpion] = useState("");
    const like = 1;

    const [etat, setEtat] = useState(false);

    const navigate = useNavigate();

    const handle = () => {
        axios.post('http://localhost:5000/publication', {
        titre: titre,
        username: username,
        description: description,
        like: like
    })
    .then(response => {       
        setEtat(true);
    })
    .catch(error => {
        console.log(error);

        });
    };

    const set = () => {
        setEtat(false);
    }

    if(etat) {
        return(
            <div className="balise" >
            <div className="pub" >
                <div className="text-align">
                    <h2 className="ttr" >Commencer une discussion</h2>
                </div>
                <div className="flex" >
                    <input className="input4" placeholder="Username" onChange={ (e) => setUsername(e.target.value)} />
                </div>
                <div className="flex" >
                    <input className="input4"placeholder="Titre" onChange={ (e) => setTitre(e.target.value)} />
                </div>
                <div className="bigch" >
                    <textarea className="input3" placeholder="Description" onChange={ (e) => setDescritpion(e.target.value)} ></textarea><MySVG className="span"/>
                </div>
                <div className="text-align" >
                    <button className="btn25" onClick={handle}  >Publier</button>
                </div>
            </div>
                <div  className="pop" >
                    <h2>Publication réussi !</h2>
                    <button className="lien-a" onClick={set}  >Ok</button>
                </div>
            </div>   
        )
    }else {
        return(
            <div className="balise" >
            <div className="pub" >
                <div className="text-align">
                    <h2 className="ttr" >Commencer une discussion</h2>
                </div>
                <div className="flex" >
                    <input className="input4" placeholder="Username" onChange={ (e) => setUsername(e.target.value)} />
                </div>
                <div className="flex" >
                    <input className="input4"placeholder="Titre" onChange={ (e) => setTitre(e.target.value)} />
                </div>
                <div className="bigch" >
                    <textarea className="input3" placeholder="Description" onChange={ (e) => setDescritpion(e.target.value)} ></textarea><MySVG className="span"/>
                </div>
                <div className="text-align" >
                    <button className="btn25" onClick={handle}  >Publier</button>
                </div>
            </div>
            </div>   
        )
    }

    




}

export default Pub;