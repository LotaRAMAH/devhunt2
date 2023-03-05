import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./composant/navbar";
import Header from "./composant/header";
import Lottie from "lottie-react";
import animationData from "./lottie/triangle.json"
import "./App.css"
import Login from "./pages/login";
import NewsFeed from "./pages/interfaces/body/newsfeed";
import Interface from "./pages/interface";
import Pub from "./pages/interfaces/body/pub";

function App() {

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

  const handleClick = () => {
      navigate('/new-page');
  };

  return (

    <div className="App" style={containerStyle} >
      <Lottie animationData={animationData} style={animationStyle} />
      <Navbar/>
      <Header/>
    </div>

  )

}

export default App;