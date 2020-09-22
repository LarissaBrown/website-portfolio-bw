import React, {useState, useRef} from "react"




const Menu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive]= useState(false);
    const onClick = () => setIsActive(!isActive);

    return(
        <>
             <div className="menu-container">
             <button onClick={onClick} className="menu-trigger">
                <img src= "https://img.icons8.com/ios-filled/64/squared-menu.png" alt="menu"/>
             </button>
             <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><a href="/work">Work</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
             </nav>
             </div>
        </>
    )
}
export default Menu