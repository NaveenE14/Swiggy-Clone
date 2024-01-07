import React from 'react'
import { Link, Router } from "react-router-dom";

function About() {
  return (
    <>
    <div >
    <h1 className='header'><p>SWIGGY CLONE</p></h1>
    <p >Check out the code on GitHub: <a href="https://github.com/NaveenE14/Swiggy-Clone" target="_blank">GitHub</a></p>
    <p  >Install the CORS extension in your browser from Chrome Web Store: <a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf" target="_blank">Allow CORS: Access-Control-Allow-Origin</a></p>
    <p> Toggle ON CORS extension to view the website</p>
    <img src="https://lh3.googleusercontent.com/1wCZM8Py3IzeamnPWn1E1vW9BvECRS0tTnDbQGBUjFzsJTqxjax7pu7pUZugPd8vfaOtInhldnRQbuCIvCD_ifWR=s1280-w1280-h800" alt="Swiggy Clone Image"/>
    </div>
    </>
  )
}

export default About