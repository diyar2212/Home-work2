
import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../App.css'

const NavBar = () => {
  const [navbar,Hidden]=useState(true)
  return (
    navbar?<nav>
      <ul className="navLinks">
        <li>
          <Link to="/clothes" style={{color:'#D3E4CD'}} className="link">Clothes</Link>
        </li>
        <li>
          <Link to="/list"  style={{color:'#D3E4CD'}} className="link">Save list</Link>
        </li>
        <li>
          <Link to="/contactUs"  style={{color:'#D3E4CD'}} className="link">Contact us</Link>
        </li>

        <li>
          <Link to="/LogOut"  style={{color:'#D3E4CD'}} className="link" onClick={()=>Hidden(false)}>Log out</Link>
        </li>
      </ul>
    </nav>:null
  );
};
 
export default NavBar;
