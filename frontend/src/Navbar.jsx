import React from 'react';


function Navbar() {
    return (
        <div className='NavBarContainer'>
            <div className="NavBarLeft">
                <span className="logo">Frog Social</span>
            </div>
            <div className="NavBarMiddle">
                <span class="material-symbols-outlined">
                    search
                </span>
                <input placeholder="Search for frogs" />
                
                <div className="NavBarLink">Home</div>
                <span class="material-symbols-outlined">
                    home
                </span>
                <div className="NavBarLink">Create</div>
                <span class="material-symbols-outlined">
                    join
                </span>
                <div className="NavBarLink">Trade</div>
                <span class="material-symbols-outlined">
                    explore
                </span>
                <div className="NavBarLink">Community</div>
                <span class="material-symbols-outlined">
                    communities
                </span>
            </div>
            <div className="NavBarRight">
                <img className="Profile"></img>
            </div>
        </div>
    );
}


export default Navbar;