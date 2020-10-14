import React, {useState, useEffect, useRef} from "react"
import {Link} from "react-router-dom"



const Menu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive]= useState(false);
    const onClick = () => setIsActive(!isActive);
   

    useEffect(()=> {
        const pageClickEvent = (e) => {
            // If the active element exists and is clicked outside of
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
              setIsActive(!isActive);
            }
          };
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return()=> {
            window.removeEventListener('click', pageClickEvent);
        }
     }, [isActive])

     

    return(
        <>
             <div className="menu-container" >
             <button onClick={onClick} className="menu-trigger">
                <img className="menu-img"src= "https://static.thenounproject.com/png/696519-200.png"  alt="menu"/>
             </button>
             <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Work">Work</Link></li>
                    <li><Link to="/ContactUs">Contact</Link></li>
                    <li><Link to="/Skills">Skills</Link></li>
                </ul>
             </nav>
             </div>
        </>
    )
}
export default Menu