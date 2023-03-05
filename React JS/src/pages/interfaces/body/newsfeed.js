import React, {useState, useEffect, useContext} from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as Coms } from './coms.svg';
import { ReactComponent as Like } from './like.svg';
import { ReactComponent as Tag } from './tag.svg';
import Commentaire from './commentaire';



function NewsFeed  (props){

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [combol, setComs] = useState(false);
  const [cle, setcle] = useState(0);

  const [info, setInfo] = useState([]);

  const like = () => {

  }

  const handleclick = (event, key) => {
    console.log("key: ",key)
    setcle(key);
    axios.get('http://localhost:5000/getcoms', {id: '5'})
    .then(response => {
      setInfo(response.data);
      console.log(info);
    })
    .catch(error => {
      console.log(error);
      setIsLoading(false);
    });
      // axios.get('http://localhost:5000/coms'),{
      //   id: key
      // }
      // .then(response => {
      //   response.data(information);
      // })
      // .catch(error => {
      //   console.log(error);
      // });  
      // setComs(true);
  }

  const comsgo = () => {


  
  }

  const enregistrer = () => {
    
  }



  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        setNews(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

    function letcoms() {

      setComs(false);
      // axios.get('http://localhost:5000/coms')
      // .then(response => {
      //   setNews(response.data);
      //   setIsLoading(false);
      // })
      // .catch(error => {
      //   console.log(error);
      //   setIsLoading(false);
      // });  
    }

  if(combol){
    return(

      <div>
        {news.map(item => (
                <div key={item.id} >
                  <div className='ultm' >
                <div className='flex2' >
                  <div className='flex3' >
                    <p></p>
                    <p>{item.username}</p>
                  </div>
                  <div  >
                    <p>{item.dates}</p>
                  </div>
                </div>
                <div>
                  <h2>{item.titre}</h2>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
                <hr/>
                <div className='fix' >
                <div onClick={like} >
                  <Like className="svg1"/>    
                </div> 
                <div onClick={event=> handleclick(event, item.id)} key={item.id} >
                  <Coms  className="svg1"/>
                </div>
                <div onClick={enregistrer} >
                  <Tag className="svg1"/>
                </div>
                  
                </div>
              </div>
                </div>
        ))}
        <Commentaire letcoms={letcoms} />
      </div>

      

    )
  }else {
    return(

      <div>
        {news.map(item => (
                <div key={item.id} >
                  <div className='ultm' >
                <div className='flex2' >
                  <div className='flex3' >
                    <p></p>
                    <p>{item.username}</p>
                  </div>
                  <div  >
                    <p>{item.dates}</p>
                  </div>
                </div>
                <div>
                  <h2>{item.titre}</h2>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
                <hr/>
                <div className='fix' >
                <div onClick={like} >
                  <Like className="svg1"/>    
                </div> 
                <div onClick={event=> handleclick(event, item.id)} key={item.id} >
                  <Coms  className="svg1"/>
                </div>
                <div onClick={enregistrer} >
                  <Tag className="svg1"/>
                </div>
                  
                </div>
              </div>
                </div>
        ))}
      </div>

      

    )
  }

  }


export default NewsFeed;
