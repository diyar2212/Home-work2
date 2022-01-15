import React from 'react';
import "../App.css"
import{FaInstagram,FaFacebook,FaDiscord,FaTwitter,FaWhatsapp} from "react-icons/fa"
function ContactUs(){
    return(
        <div className="contact-us">
         <h1>You can follow us and communicate with us through these sites:</h1>
         <h1 className="socail"><FaInstagram/>   <FaFacebook/>   <FaDiscord/>     <FaTwitter/>   <FaWhatsapp/></h1>
         <img style={{width:'500px'}} src="https://www.pikpng.com/pngl/b/484-4844279_cartoon-transprent-png-scissors-cartoon-png-clipart.png"/>

        </div>

    );
}
export default ContactUs;