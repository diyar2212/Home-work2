
import React from 'react';
import '../App.css';
import {FaCut } from "react-icons/fa";
import LogIn from './logIn';
import Clothes from './clothes';
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";



function Home(){
    return (
        <div className="App" >
           <Router> 
            <h1 className='ShopName'>scissors shop  <FaCut/></h1>
            <div className="about">
                <img  className='ShopImg' src='https://i.pinimg.com/564x/9f/29/40/9f29402359a5d962bc0252469533e185.jpg'/>
                <p className="aboutShop">
                Welcome to our online store!<br/>If you are looking for good quality clothes at a cheap price, then you are in the right place.<br/>
                You will find your favorite clothes in a high level of fashion, colors, styles and brands you like.<br/>
                We always care about your comfort and needs and receive your order in a timely manner.
                </p>
                <Link to="/log"><button className="log-in" >log in</button></Link>
                {/* <button className="log-in" ><Link to="">Blogs</Link></button> */}
                {/* <button type="button" onClick={()=>{navigate("/log")}}>Log in</button> */}
            </div>
            <Routes>
              <Route path="/log" element={<LogIn />} />
            </Routes> 
          </Router> 
         
    
         
    
        </div>
        
      );
}
    
export default Home;
