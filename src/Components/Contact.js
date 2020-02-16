import React from 'react';
import '../App.css';

function Contact(){
    return (
      <div className="Contact-All">
        <div id="Contact-All"></div>
          {/* <section className="Contact">
            <div className="Contact-Content">
                <h4>Do you have a project for me? Email me:<a className="Email" href="mailto:9004231@student.zadkine.nl">9004231@student.zadkine.nl</a></h4>
            </div>
          </section> */}
          <footer>
              <div className="Footer-Content">
                <p className="Credit">&copy;Copyright 2020 Mustafa Altun. <br/>Developed by Mustafa Altun.</p>
                <ul className="Social">
                    <li><a href="https://github.com/MustacheAltun/MustacheAltun.github.io" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/MustafaAltun2?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="mailto:9004231@student.zadkine.nl" target="_blank" rel="noopener noreferrer">Mail</a></li>

                </ul>
              </div>
          </footer>
      </div>
    );
  } 



export default Contact;