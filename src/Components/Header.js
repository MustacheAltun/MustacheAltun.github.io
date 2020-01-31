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
                <h2>Game &amp; Web designer and/or programmer</h2>
              </div>
                <div className="Intro-Text">
                  <h4>I learned how to use and/or made projects with the following subjects:</h4><br/>
                  <div className="Intro-Text-TAB">
                    <h5>&#9830;. Web development</h5><p>(&#9830; React and PHP &#9830;)</p><br/>
                    <h5>&#9830; &#9830; . Game development</h5><p>(&#9830; Godot &#9830;)</p><br/>
                    <h5>&#9830; &#9830; &#9830; . Database Design</h5><p>(&#9830; MySQL &#9830;)</p><br/>
                    <div id="About"></div>
                  </div>
                </div>
            </div>
          </div>
            
            
            
    </header>
  );
}

export default Header;