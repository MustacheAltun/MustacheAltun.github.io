import React from 'react';
import '../App.css';
import keuzedeel1 from '../Images/keuzedeel.png';
import chengeta from '../Images/chengeta-app.png';
import zorgapp from '../Images/zorgapp.PNG';
import salarisdashboard from '../Images/salaris-dashboard.png';
import { Link } from "react-router-dom";


function Work(){
  
    return (
      <div className="Wrapper">
        <div className="Project1">
            <h2>Here are a couple of my projects:</h2>  
            <section className="My-Work"> 
                <div className="Image-area right">
                    <img src= {chengeta} alt=''/>
                </div>
                <div className = "Text-box color3">
                    <div className="Text-Box-Content">
                        <h3>Chengeta wildlife mobile application</h3>
                        <h4 className = "color6">school project</h4>
                        <p className = "White">
                        The Chengeta Wildlife project involved developing a network of hardware units spread out over a nature reserve that can detect sounds and triangulate their location. 
                        Machine learning algorithms are used to classify the sounds. 
                        However, the rangers in the reserve have no way of accessing this information in a clear and understandable way to respond to events. 
                        To solve this problem, a web application was developed to provide rangers with tools to gain an overview of the current situation, respond quickly to events, and communicate with other rangers. 
                        The application works both online and offline, on mobile phones and tablets, and includes features such as event lists, maps, and notifications. 
                        The technical report provides details of the application's design, implementation, and testing.
                        </p>
                        <a href="https://github.com/Thermalight/ProjectCgroup1" target="_blank" rel="noopener noreferrer" className="Button">View project</a>
                    </div>
                </div>
            </section>
            <section className="My-Work Reserve">
                <div className="Image-area left">
                    <img src= {zorgapp} alt=''/>
                </div>
                <div className = "Text-box color3">
                    <div className="Text-Box-Content">
                        <h3>CareCareers</h3>
                        <h4 className="color6">Hobby project</h4>
                        <p className = "White">
                        CareCareers is a comprehensive platform that offers a secure and customizable login system with three distinct roles: admin, client, and freelancer. 
                        Admins have full control over account creation and management, job postings, and assigning freelancers to clients. 
                        Clients can post job listings and choose the days, times, and types of services they require, while freelancers have access to job postings that match their skills and receive push notifications. 
                        Freelancers can also create profiles, track their invoicing, and communicate with admins to establish agreements. 
                        CareCareers prioritizes security by keeping job listings private and only accessible to approved clients and freelancers.
                        </p>
                        <a href="https://github.com/MustafaAltun2/word-game" target="_blank" rel="noopener noreferrer" className="Button">View project</a>
                    </div>
                </div>
            </section>
            <section className="My-Work"> 
                <div className="Image-area right">
                    <img src= {salarisdashboard} alt=""/>
                </div>
                <div className = "Text-box color3">
                    <div className="Text-Box-Content">
                        <h3>salary dashboard</h3>
                        <h4 className = "color6">School assignment</h4>
                        <p className = "White">
                            The salary dashboard is a tool that provides an overview of clocked hours and pay rates for employees. 
                            It includes various functions such as clocking in/out, tracking time worked, and calculating wages based on different pay rates. 
                            The dashboard displays key information such as start/end times, location, total hours worked, employee name, date, and day of the week. 
                            Additionally, it allows for the customization of pay rates, including 100%, 110%, 120%, 135%, 150%, and 200%, as well as an extra field for special cases. 
                            The tool also includes the ability to edit and delete clocked hours. 
                            Overall, the salary dashboard provides an efficient and comprehensive solution for managing employee hours and compensation.
                        </p>
                        <a href="https://github.com/MustafaAltun2/garage-overzicht" target="_blank" rel="noopener noreferrer" className="Button">View project</a>
                    </div>
                </div>
            </section>
            <section className="My-Work Reserve">
                <div className="Image-area left">
                    <img src= {keuzedeel1} alt=" An computer with secure programming displayed on the screen. "/>
                </div>
                <div className = "Text-box color3">
                    <div className="Text-Box-Content">
                        <h3>secure programming</h3>
                        <h4 className = "color6">school optional subject</h4>
                        <p className = "White">
                        This is the second elective subject that I am pursuing in college. 
                        I have gained significant knowledge in this subject. Initially, I had thought that I wouldn't learn much here, but eventually, I learned a lot. 
                        Although I could have learned the same amount of information on my own, it's been enjoyable to have a laid-back teacher to discuss various topics with. 
                        The subject matter revolves around internet security and the vulnerabilities of bugs. 
                        To delve deeper into this topic, click on the following link.
                        </p>
                        <Link to="/keuzedeel" className="Button">View project</Link>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  } 



export default Work;