import React from "react"
import {Switch, Route} from "react-router-dom"


function Contact() {
    return (
        
        <Switch>
            <Route path="/Contact" render={() =>
                <> 
                    <div className="sideItem"></div>
                    <div className="contact-info">
                        <h2>Larissa Brown</h2>
                        <h3>larissa.johnson.brown@gmail.com</h3>
                        <h3>801-946-0113</h3>
                    </div>
                    
                      <form className="form" type="submit">
                          <input className="firstName" placeholder="First Name"/>
                          <br></br>
                          <input className="lastName" placeholder="Last Name"/>
                          <br></br>
                          <input className="email"placeholder="Email"/> 
                          <br></br>
                          <input type="text" size="50" className="input-comments"/>
                          <br></br>
                          <button>Submit</button>
                      </form>
                    <a className="linkedin" href="https://linkedin.com/in/larissa-j-brown"><img className="linkedin"  src={require("./linkedin.png")} alt="linked-in"/></a> 
                    <a className="github" href="https://github.com/LarissaBrown"><img className="github" src={require("./GitHub_Logo.png")} alt="git-hub"/></a>
                    <img className="resume" src={require("./resume.png")} alt="resume"/>
                </>
            }/>
        </Switch>
        
    )
}
export default Contact