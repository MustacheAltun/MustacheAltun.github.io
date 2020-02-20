import React from 'react';
import '../App.css';

function Contact(){
    return (
      <div className="Contact-All">
        <div id="Contact-All"></div>
          <footer>
              <div className="Footer-Content">
                <p className="Credit">&copy;Copyright 2020 Mustafa Altun. <br/>Developed by Mustafa Altun.</p>
                <ul className="Social">
                    <li><a href="https://www.linkedin.com/in/mustafa-altun-4196a11a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/MustacheAltun/MustacheAltun.github.io" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="mailto:9004231@student.zadkine.nl" target="_blank" rel="noopener noreferrer">Mail</a></li>

                </ul>
              </div>
          </footer>
      </div>
    );
  } 



export default Contact;