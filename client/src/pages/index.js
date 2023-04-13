import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import background from '../images/home.jpg'
import { Link} from 'react-router-dom';
//import {Button} from "mui/material";  

const Home = () => {
  return (
    
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        //backgroundColor: "#A13D77",
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundSize:"100%",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        
      }}
    > 
      {/*<img src={require('../images/home.jpg')} alt='logo'
       className='imagess' position="absolute"
    />*/}
    <div className='text'>
        <h2 >WELCOME <br/>TO MEDBOT</h2>
        
        <p ><br/><br/>We help people figure out health issues <br/> and help find the right care. We provide<br/>support every support of the way. MedBot 
        <br/>will give you the right service based <br/> on your condition.</p>
        <br/><br/>
    
        <Link to="/Letschat">
          <input className='chatbutton' type="button" value="Chat about Symptoms"></input>
        </Link>
    </div>
        <hr style={{
   background: "white",
   height: "5px",
   border: "none",
   }}
/>        

    </div>
   
  );
};

export default Home;