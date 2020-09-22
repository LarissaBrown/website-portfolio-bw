import React from "react"


function Home() {
    return (
        <>
            <div className="sideItem"></div>
            <h1 className="hello">Hello.</h1>
            <p className="name"><span>My name is</span><br></br> Larissa Brown.</p>
            <p className="iAm">I am a software engineer, passionate about learning and life.</p>
            <img className="linkedin" src="/linkedin.png" alt="linked-in"/> 
            <img className="github" src="/GitHub_Logo.png" alt="git-hub"/>
            <img className="resume" src="/resume.png" alt="resume"/>
        </>
    )
}
export default Home