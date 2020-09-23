import React from "react"
import {Switch, Route} from "react-router-dom"


function Work() {
    return (
        
        <Switch>
            <Route path="/Work" render={() =>
                <> 
                    <div className="sideItem" ></div>
                    <div className="react-todo"id="work">React ToDo</div>
                    <div className="axios-todo"id="work">Axios ToDo</div>
                    <div className="js-todo"id="work">Javascript ToDo</div>
                    <div className="backend"id="work">Backend</div>
                    <div className="api-website" id="work">API Website</div>
                    <div className="group-project" id="work">Group Project</div>
                    <a className="linkedin" href="https://linkedin.com/in/larissa-j-brown"><img className="linkedin"  src={require("./linkedin.png")} alt="linked-in"/></a> 
                    <a className="github" href="https://github.com/LarissaBrown"><img className="github" src={require("./GitHub_Logo.png")} alt="git-hub"/></a>
                    <img className="resume" src={require("./resume.png")} alt="resume"/>
                </>
            }/>
        </Switch>
        
    )
}
export default Work