import React from 'react';

function Navbar() {
    return (
        <div className='NavBarContainer'>
            <div className="NavBarLeft">
                <span className="logo">Frog Social</span>
            </div>
            <div className="NavBarMiddle">
                <input placeholder="Search for frogs" />
                <div className="NavBarLink">Home</div>
                <div className="NavBarLink">Create</div>
                <div className="NavBarLink">Trade</div>
                <div className="NavBarLink">Community</div>
            </div>
            <div className="NavBarRight">
                <div className="Profile"></div>
            </div>
        </div>
    );
}


export default Navbar;