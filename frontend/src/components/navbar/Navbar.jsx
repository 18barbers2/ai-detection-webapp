import React from 'react';
import './navbar.css'

function Navbar() {
    return (
        <div className="NavBarContainer">
            <div className="NavBarLeft">
                <span className="logo">Frogsocial</span>
            </div>
            <div className="NavBarMiddle">
                
                <div className="SearchBar" placeholder="Search for frogs">
                    <span class="material-symbols-outlined searchIcon">
                        search
                    </span>
                    <input className="SearchInput" placeholder="Search for frogs" />
                </div>
                <span class="material-symbols-outlined homeIcon">
                    home
                </span>
                <div className="NavBarLink">Home</div>
                <span class="material-symbols-outlined joinIcon">
                    join
                </span>
                <div className="NavBarLink">Create</div>
                <span class="material-symbols-outlined exploreIcon">
                    explore
                </span>
                <div className="NavBarLink">Trade</div>
                <span class="material-symbols-outlined tradeIcon">
                    communities
                </span>
                <div className="NavBarLink">Community</div>
            </div>
            <div className="NavBarRight">
                <img className="Profile profileIcon" src='./src/assets/person/1.jpg'></img>
            </div>
        </div>
    );
}


export default Navbar;