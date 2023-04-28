import React from 'react';
import '../App.css';
import $ from "jquery"


function Header() {

  $(document).ready(function(){
    $(window).scroll(function(){
      $('.Intro').css("opacity", 1 - $(window).scrollTop() / 800)
    })
  })

  return (
        <header>
          <div className= "Intro-Body">

            <div className="Intro">
              <div id="Intro"></div>
              <div className="Header-Text">
                <h1>Mustafa Altun</h1>
                <h2 className="center">Software/web developer</h2>
                
              </div>
                <div className="Intro-Text">
                  <h4>These are the programming languages I am most skilled in:</h4><br/>
                  <div className="Intro-Text-TAB">
                    <h5>&#9830; C# </h5><br/>
                    <h5>&#9830;&#9830; Python</h5><br/>
                    <h5>&#9830; &#9830; &#9830; PHP</h5><br/>
                    <div id="About"></div>
                  </div>
                </div>
            </div>
          </div>
            
            
            
    </header>
  );
}

export default Header;