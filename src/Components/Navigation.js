import React from 'react';
import '../App.css';

function Navigation(){
  
  document.addEventListener('scroll', function(navscroll)
  {
      if(navscroll.target.scrollingElement.scrollTop >= window.innerHeight)
      {
          document.querySelector("#navigation").setAttribute("style", "background-color:black; transition-duration:1s")
      }
      else
      {
          document.querySelector("#navigation").setAttribute("style", "background-color:None")
      }
  });

    return (
      <nav id="navigation">
        <ul>
          <li><a href="#Intro">Intro</a></li>
          <li><a href="#About">about</a></li>
          <li><a href="#Project1">Work</a></li>
          <li><a href="#Contact-All">Contact</a></li>
        </ul>
      </nav>
    );
  } 



export default Navigation;