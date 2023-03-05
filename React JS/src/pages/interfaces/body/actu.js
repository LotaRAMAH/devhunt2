import React, {useState,useEffect} from "react";
import NewsFeed from "./newsfeed";

function Actu() {

    const [composant, setComposant] = useState("");
    

    useEffect(() => {
        const onSized = () => {
    
          if(window.scrollY > 400) {
           
          }
          
        }
    
        window.addEventListener('scroll', onSized);
      })

    return(
        <div className="actu" >
          <NewsFeed/>
        </div>
    )

}

export default Actu;