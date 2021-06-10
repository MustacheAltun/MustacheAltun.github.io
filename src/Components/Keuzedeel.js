import React from 'react';
import '../App.css';

export default class Keuzedeel extends React.Component{
  render(){
    return (
        <div className="Wrapper">
            
          <div className="Project1">
              <h2>Here I will be discussing some security subjects I learned:</h2>
              <section className="My-Work Reserve">
                  <div className = "Text-box color3">
                      <div className="Text-Box-Content">
                          <h3>Hardware</h3>
                          <h4 className = "White">school optional subject</h4>
                          <p className = "White">
                            Hardware nowadays is amazing, you can go everywhere and there would still be technology.
                            The only place where there is (possible) no technology is the jungle.
                            In all other places there would be atleast one phone or one computer or one laptop.
                            People nowadays cannot leave their laptop or phone behind.
                            This is what makes people so vulnerable against hackers.
                            Hackers could hack your laptop or phone and open the gps or open the microphone or camera.
                            The hackers would see every information about you, because you save everything in your phone.
                            There are also gameconsoles and sensors and other cool widgets that can be hacked into.
                            Like smartwatches or smartglasses, they could reveal your privacy.
                            But the hackers are not the only one getting smarter and better.
                            The anti-hackers (this is how i would call them) use everything in their power to let the hackers have a bad time.
                            So we talking about sensors and encryption in all stuff so that the hardware have hardtime getting the info about the passwords and login.
                            but this is for the next section about software.
                          </p>
                      </div>
                  </div>
              </section>
              <section className="My-Work Reserve">
                  <div className = "Text-box color3">
                      <div className="Text-Box-Content">
                          <h3>Software</h3>
                          <h4 className = "White">school optional subject</h4>
                          <p className = "White">
                            Software is a collection of instructions and data that tell a computer how to work.
                            This is in contrast to physical hardware, from which the system is built and actually performs the work.
                            In computer science and software engineering, computer software is all information processed by computer systems, including programs and data.
                            Computer software includes computer programs, libraries and related non-executable data, such as online documentation or digital media.
                            Computer hardware and software require each other and neither can be realistically used on its own.
                          </p>
                      </div>
                  </div>
              </section>
              <section className="My-Work Reserve">
                  <div className = "Text-box color3">
                      <div className="Text-Box-Content">
                          <h3>(technical) infrastructure </h3>
                          <h4 className = "White">school optional subject</h4>
                          <p className = "White">
                            In IT Infrastructure, the above technological components contribute to and drive business functions.
                            Leaders and managers within the IT field are responsible for ensuring that both the physical hardware and software networks and resources are working optimally.
                            IT infrastructure can be looked at as the foundation of an organization's technology systems, thereby playing an integral part in driving its success.
                            All organizations who rely on technology to do their business can benefit from having a robust, interconnected IT Infrastructure.
                            With the current speed that technology changes and the competitive nature of businesses, IT leaders have to ensure that their IT Infrastructure is designed such that changes can be made quickly and without impacting the business continuity.
                            While traditionally companies used to typically rely on physical data centers or colocation facilities to support their IT Infrastructure, cloud hosting has become more popular as it is easier to manage and scale.
                            IT Infrastructure can be managed by the company themselves or it can be outsourced to another company who has consulting expertise to develop robust infrastructures for an organization.
                            With advances in online outreach availability, it has become easier for end users to access technology.
                            As a result, IT infrastructures have become more complex and therefore, it is harder for managers to oversee the end to end operations.
                            In order to mitigate this issue, strong IT Infrastructures require employees with varying skill sets.
                            The fields of IT management and IT service management rely on IT infrastructure, and the ITIL framework was developed as a set of best practices with regard to IT infrastructure.
                            The ITIL framework assists companies with the ability to be responsive to technological market demands.
                            Technology can often be thought of as an innovative product which can incur high production costs. However, the ITIL framework helps address these issues and allows the company to be more cost effective which helps IT managers to keep the IT Infrastructure functioning.
                          </p>
                      </div>
                  </div>
              </section>
              <section className="My-Work Reserve">
                  <div className = "Text-box color3">
                      <div className="Text-Box-Content">
                          <h3>Security Domains </h3>
                          <h4 className = "White">school optional subject</h4>
                          <p className = "White">
                            A security domain is the determining factor in the classification of an enclave of servers/computers.
                            A network with a different security domain is kept separate from other networks. Examples: NIPRNet, SIPRNet. JWICS, NSANet are all kept separate.

                            A security domain is considered to be an application or collection of applications that all trust a common security token for authentication, authorization or session management.
                            Generally speaking, a security token is issued to a user after the user has actively authenticated with a user ID and password to the security domain.<br/>

                            Examples of a security domain include:<br/>

                            All the Web applications that trust a session cookie issued by a Web Access Management product<br/>
                            All the Windows applications and services that trust a Kerberos ticket issued by Active Directory<br/>
                            In an Identity Federation that spans two different organizations that share a business partner, customer or BPO relation - A partner domain, would be another security domain with which users and applications (from the local security domain) interact.
                          </p>
                      </div>
                  </div>
              </section>
          </div>
        </div>
      );
    } 
  }
    



// export default keuzedeel;
