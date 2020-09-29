import React from "react"
import {Switch, Route} from "react-router-dom"


function Work() {
    return (
        
        <Switch>
            <Route path="/Work" render={() =>
                <> 
                    <div className="sideItem" ></div>
                    <a href="https://github.com/LarissaBrown/React-ToDo" className="react-todo"><div className="react-todo"id="work">React ToDo</div></a>
                    <a href="https://github.com/LarissaBrown/Axios-ToDo" className="axios-todo"><div className="axios-todo"id="work">Axios ToDo</div></a>
                    <a href="https://github.com/LarissaBrown/moms-shopping-list" className="js-todo"><div className="js-todo"id="work">Javascript ToDo</div></a>
                    <a href="https://github.com/LarissaBrown/todo-backend" className="backend"><div className="backend"id="work">ToDo Backend</div></a>
                    <a href="https://github.com/LarissaBrown/artku-api-website" className="api-website"><div className="api-website" id="work">API Website</div></a>
                    <div className="group-project" id="work">Group Project</div>
                    <div className="wireframe" id="work">Figma Wireframe</div>
                    <div className="meme-generator" id="work">Meme Generator</div>
                    <div className="coming-soon1" id="work">Coming Soon</div>
                    <div className="coming-soon2" id="work">Coming Soon</div>
                    <a className="linkedin" href="https://linkedin.com/in/larissa-j-brown"><img className="linkedin"  src={require("./linkedin.png")} alt="linked-in"/></a> 
                    <a className="github" href="https://github.com/LarissaBrown"><img className="github" src={require("./GitHub_Logo.png")} alt="git-hub"/></a>
                    <a className="resume" href="https://docs.google.com/document/d/1Ayf1I_4cmfYQL4Ts7uPLa3ybaIqZyEl_gwmmbd_KwuI/edit?usp=sharing"><img className="resume" src={require("./resume.png")} alt="resume"/></a>
                </>
            }/>
        </Switch>
        
    )
}
export default Work