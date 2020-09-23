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
                    <img className="linkedin" src={require("./linkedin.png")} alt="linked-in"/> 
                    <img className="github" src={require("./GitHub_Logo.png")} alt="git-hub"/>
                    <img className="resume" src={require("./resume.png")} alt="resume"/>
                </>
            }/>
        </Switch>
        
    )
}
export default Skills