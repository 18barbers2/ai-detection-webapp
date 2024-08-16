import React from 'react';
import './navbar.css'

function Navbar() {
    return (
        <div className="NavBarContainer">
            <div className="NavBarLeft">
                <span className="logo">Frogsocial</span>
            </div>
            <div className="NavBarMiddle">
                <span class="material-symbols-outlined">
                    search
                </span>
                <input placeholder="Search for frogs" />
                
                <span class="material-symbols-outlined">
                    home
                </span>
                <div className="NavBarLink">Home</div>
                <span class="material-symbols-outlined">
                    join
                </span>
                <div className="NavBarLink">Create</div>
                <span class="material-symbols-outlined">
                    explore
                </span>
                <div className="NavBarLink">Trade</div>
                <span class="material-symbols-outlined">
                    communities
                </span>
                <div className="NavBarLink">Community</div>
            </div>
            <div className="NavBarRight">
                <img className="Profile" src='./src/assets/person/1.jpg'></img>
            </div>
        </div>
    );
}


export default Navbar;