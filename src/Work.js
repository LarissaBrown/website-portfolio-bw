import React from "react"
import {Switch, Route} from "react-router-dom"


function Work() {
    return (
        
        <Switch>
            <Route path="/Work" render={() =>
                <> 
                    <div className="sideItem" ></div>
                    <a href="https://github.com/LarissaBrown/React-ToDo" className="react-todo frame"><div id="work">React ToDo</div></a>
                    <a href="https://github.com/LarissaBrown/Axios-ToDo" className="axios-todo frame"><div id="work">Axios ToDo</div></a>
                    <a href="https://github.com/LarissaBrown/moms-shopping-list" className="js-todo frame"><div id="work">Javascript ToDo</div></a>
                    <a href="https://github.com/LarissaBrown/todo-backend" className="backend frame"><div className="backend"id="work">ToDo Backend</div></a>
                    <a href="http://artku.surge.sh/" className="api-website frame"><div className="api-website" id="work">API Website</div></a>
                    <a href="https://github.com/PhoenixTilea/mod5forum" className="group-project frame" id="work">Group Project</a>
                    <a href="https://www.figma.com/proto/kQAikPUkqrdDc0E3Y7r57C/Untitled?node-id=1%3A2&scaling=min-zoom" className="wireframe frame" id="work">Figma Wireframe</a>
                    <div className="meme-generator frame" id="work">Meme Generator</div>
                    <a href="https://github.com/LarissaBrown/React-ToDo" className="react-todo frame" id="work">React Todo</a>
                    <div className="coming-soon2 frame" id="work">Coming Soon</div>
                    <div className="coming-soon1 frame" id="work">Coming Soon</div>
                    <a className="linkedin" href="https://linkedin.com/in/larissa-j-brown"><img className="linkedin"  src={require("./linkedin.png")} alt="linked-in"/></a> 
                    <a className="github" href="https://github.com/LarissaBrown"><img className="github" src={require("./GitHub_Logo.png")} alt="git-hub"/></a>
                    <a className="resume" href="https://docs.google.com/document/d/1Ayf1I_4cmfYQL4Ts7uPLa3ybaIqZyEl_gwmmbd_KwuI/edit?usp=sharing"><img className="resume" src={require("./resume.png")} alt="resume"/></a>
                </>
            }/>
        </Switch>
        
    )
}
export default Work