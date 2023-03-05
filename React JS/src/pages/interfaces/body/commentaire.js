import React from "react";

function Commentaire(props) {

    return(
        <div className="cmntr" >

            <div className="text-align" >
                <h2>Commentaires du publication de Julio</h2>
            </div>

            <div className="coms_gl" >
                <div className="coms_container" >
                    <p>PDP</p>
                    <p>Username</p>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, rerum.</p>
                </div>
            </div>


            <div className="coms_champ">
                <div className="cmx" >
                    <input className="coms_get " placeholder="Entrez votre commentaire" />
                </div>
                <span className="coms_post" onClick={props.letcoms}>E</span>
            </div>
        </div>
    )

}

export default Commentaire;

