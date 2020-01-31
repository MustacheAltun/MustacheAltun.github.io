import React from 'react';
import '../App.css';
import Game3 from '../Images/Game3.PNG'
import Game2 from '../Images/Game2.PNG'
import Game1 from '../Images/Game1.PNG'
import School2 from '../Images/project2-school.PNG'
import School1 from '../Images/project1-school.PNG'


function Work(){
  
    return (
      <div className="Wrapper">
          
        <div className="Project1">
            <h2>Here are a couple of my projects:</h2>
            <section className="My-Work Reserve">
                <div className="Image-area left">
                    <img src= {Game3} alt=" An top down stealth game (gameplay). "/>
                </div>
                <div className = "Text-box">
                    <div className="Text-Box-Content">
                        <h3>Heist Meisters</h3>
                        <h4>Hobby project</h4>
                        <p>
                            This will be one of my best game projects I have ever made in Godot, when I am done. I use the game engine called "Godot" as I mentioned earlier. 
                            Now u would probably ask me why I would choose Godot over populair game engines like unity.
                            Well first of all Godot is open source while unity is not, but what does open source mean?
                            open source means, if someone puts his project willingly on Godot. Then other people can download the game u built and learn how you did it through watching your code.
                            Godot is also free and does not have a limit to how much money u can earn like unity.<br/><br/>
                            let's hop over to the game.<br/>
                            My first thought on this game was what type of game do I want to make?
                            First of all I wanted to make an stealth game while also making it tactical.
                            Most important thing for me in this game is the user experience, I craft the best crafted user expierence.
                            The goal of this game is to get clues from computers or letters in the rooms, about what is going on.
                            But there is a catch, you cant open all doors some doors have a pin so only if you have the pin u can continue, be sure to inspect everything muhahaha.
                            But wait what is that it is gonna be harder? well yes there will be cops and cameras, if they see you for certain ammount of time it is game over.
                            
                        </p>
                    </div>
                </div>
            </section>
        </div>
        <section className="My-Work"> 
            <div className="Image-area right">
                <img src= {Game2} alt=" An parkour game (gameplay). "/>
            </div>
            <div className = "Text-box">
                <div className="Text-Box-Content">
                    <h3>Hoppa Days</h3>
                    <h4>Hobby project</h4>
                    <p>
                        This game was my second game I have ever made. This game was also made with Godot. I think it was quite a success, but i wouldn't get my hopes to high bacause there is room possible for improvement.
                        I had a pretty straight forward idea with this game. The idea was that the bunny could jump high (because it is a bunny) and needed to avoid the angry enemies.
                        Bunny found lots of coins while he was running away from the angry enemies, so that he could buy some carrots when he survived. That was the whole concept behind the game.
                        
                    </p>
                    <a href="https://github.com/MustafaAltun2/hoppy-days" target="_blank" rel="noopener noreferrer" className="Button">View project</a>
                </div>
            </div>
        </section>
        <section className="My-Work Reserve">
            <div className="Image-area left">
                <img src= {Game1} alt=" A word game (gameplay)."/>
            </div>
            <div className = "Text-box">
                <div className="Text-Box-Content">
                    <h3>Word game(contains glitches)</h3>
                    <h4>Hobby project</h4>
                    <p>
                        This was my very first ever game made with Godot. This game was bewtween a failure and a seccess because it contained many glitches. Everyone who starts with game development
                        will experience some bad games, but in the end, you need to move on and make a better game. In the end the game was pretty fun. If you give it to a friend and he puts in some
                        gibberish then the two of you will have a great time laughing. Anyway the idea behind this game is pretty easy. There are some sentences while there are missing words.
                        the goal is to put something in the sentence to make it funny or to make an adventure/story sentence.
                    </p>
                    <a href="https://github.com/MustafaAltun2/word-game" target="_blank" rel="noopener noreferrer" className="Button">View project</a>
                </div>
            </div>
        </section>
        <section className="My-Work"> 
            <div className="Image-area right">
                <img src= {School1} alt=" A menu of choices to create,read,update or delete"/>
            </div>
            <div className = "Text-box">
                <div className="Text-Box-Content">
                    <h3>Create, Read, Update, Delete system (C.R.U.D. system)</h3>
                    <h4>School assignment</h4>
                    <p>
                        This is my Create, Read, Update, Delete system I built for school also known as CRUD system.
                        CRUD systems are actually pretty convenient to keep track of everything for webshops or garages.
                        This CRUD system is comepletely built on php with html and mysql databases.
                        This project was not only convenient how it worked out but also helpfull because it probably will come in the exams.
                        With this assignment you can create, read, update or delete customers.
                        You can also do the exact same thing for cars but for cars you can link the customer to it too.
                    </p>
                    <a href="https://github.com/MustafaAltun2/garage-overzicht" target="_blank" rel="noopener noreferrer" className="Button">View project</a>
                </div>
            </div>
        </section>
        <section className="My-Work Reserve">
            <div className="Image-area left">
                <img src= {School2} alt=" a login screen with a register button"/>
            </div>
            <div className = "Text-box">
                <div className="Text-Box-Content">
                    <h3>login screen</h3>
                    <h4>School assignment</h4>
                    <p>
                        So far This project is very usefull my eyes. I think I will be able to use this project again
                        for a site with login details. When that time comes I will probably secure it more by tenfold.
                        When you are logged in, you can leave a comment or leave a comment on a comment or delete your own comment.
                        While the admins can delete every comment for inapropriate comments. If you are logged in you can also change your password.
                        If an admin is logged in, he can see all users and make users admin if needed.
                         
                    </p>
                    <a href="https://github.com/MustafaAltun2/php-login-scherm" target="_blank" rel="noopener noreferrer" className="Button">View project</a>
                </div>
            </div>
        </section>
      </div>
    );
  } 



export default Work;