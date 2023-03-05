import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./logo";

function Header() {

    const [etat, setEtat] = useState(false);

    const navigate = useNavigate();

    const handleClick = () => {

      navigate("/form");

    } 

    useEffect(() => {
        const onSized = () => {
    
          if(window.innerWidth > 1000) {
            setEtat(false)
          }
          else {
            setEtat(true)
          }
    
        }
    
        window.addEventListener('resize', onSized);
      })

      if(etat){
        return (

            <div className="centrage_box" >
                <div className="test" >
                    <div className="centrage" >
                        <h1>Bienvenue</h1>
                        <p className="bienvenue" >
                          ENI-ZARA est une plateforme de partage privée<br/> concue spécialement pour les étudiants de l'ENI.<br/>
                          Vous devez utiliser une adresse e-mail reconnue pour créer un compte <br/>. Pour cela veuillez contacté vos délégués de classe<br/> pour un ajout devore adresse e-mail .
                        </p>
                        <button className="btn_connex" onClick={handleClick} >S'inscrire</button>
                    </div>
                </div>
            </div>
    
        )      
    
      }else {
        return (

            <div className="centrage_box" >
                <div className="test" >
                    <div className="centrage" >
                        <h1>Bienvenue</h1>
                        <p className="bienvenue" >
                        ENI-ZARA est une plateforme de partage privée<br/> concue spécialement pour les étudiants de l'ENI.<br/>
                          Vous devez utiliser une adresse e-mail reconnue pour créer un compte <br/>. Pour cela veuillez contacté vos délégués de classe<br/> pour un ajout devore adresse e-mail .
                        </p>
                        
                        <button className="btn_connex" onClick={handleClick} >S'inscrire</button>
                    </div>
                </div>
                <div className="test"  >
                    <div  className="centrage"  >
                        <Logo/>
                    </div>
                </div>
            </div>
    
        )    
      }
}

export default Header;