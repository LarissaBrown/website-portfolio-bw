import React from "react"
import { Switch, Route} from "react-router-dom"

function Home() {
    return (
        
         <Switch> 
            <Route path="/Home" render={() => 
            <>   
                <div className="sideItem"></div>
                <h1 className="hello">Hello.</h1>
                <p className="name"><span>My name is</span><br></br> Larissa Brown.</p>
                <p className="iAm">I am a software developer, passionate about learning and life.</p>
                <a className="linkedin" href="https://linkedin.com/in/larissa-j-brown"><img className="linkedin"  src={require("./linkedin.png")} alt="linked-in"/></a> 
                <a className="github" href="https://github.com/LarissaBrown"><img className="github" src={require("./GitHub_Logo.png")} alt="git-hub"/></a>
                <img className="resume" src={require("./resume.png")} alt="resume"/>
            </>
            }
            />
         </Switch>
        
    )
}
export default Home