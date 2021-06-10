import React from 'react';
import '../App.css';
import { HashLink } from "react-router-hash-link";
function Navigation(){
  
  document.addEventListener('scroll', function(navscroll)
  {
    if(document.location.pathname === "/") {
        if(navscroll.target.scrollingElement.scrollTop >= window.innerHeight)
        {
            document.querySelector("#navigation").setAttribute("style", "background-color:black; transition-duration:1s")
        }
        else
        {
            document.querySelector("#navigation").setAttribute("style", "background-color:None")
        }
      }else{
        document.querySelector("#navigation").setAttribute("style", "background-color:black;")
      }
  });

    return (
      <nav id="navigation">
        <ul>
          <li><HashLink to="/#Intro">Intro</HashLink></li>
          <li><HashLink to="/#About">About</HashLink></li>
          <li><HashLink to="/#Project1">Work</HashLink></li>
          <li><HashLink to="/#Contact-All">Contact</HashLink></li>
        </ul>
      </nav>
    );
  } 



export default Navigation;