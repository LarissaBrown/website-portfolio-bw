import React from "react"
import {Switch, Route} from "react-router-dom"
import skillsData from "./skillsData"


function Skills(props) {
    return (
        
        <Switch>
            <Route path="/Skills" render={() =>
                <> 
                    <div className="sideItem"></div>
                    <div className="skills">
                    {skillsData.map(item => 
                    <div className="skill">
                        <img alt="skill" src={item.logoImage}/>
                    </div>
                    )}
                    </div>
                    <a className="linkedin" href="https://linkedin.com/in/larissa-j-brown"><img className="linkedin"  src={require("./linkedin.png")} alt="linked-in"/></a> 
                    <a className="github" href="https://github.com/LarissaBrown"><img className="github" src={require("./GitHub_Logo.png")} alt="git-hub"/></a>
                    <a className="resume" href="https://docs.google.com/document/d/1Ayf1I_4cmfYQL4Ts7uPLa3ybaIqZyEl_gwmmbd_KwuI/edit?usp=sharing"><img className="resume" src={require("./resume.png")} alt="resume"/></a>
                </>
            }/>
        </Switch>
        
    )
}
export default Skills