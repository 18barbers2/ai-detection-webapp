import React from 'react';
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <span className="logo">Frogsocial</span>
            </div>
            <div className="navbar-middle">
                <div className="search-bar">
                    <span class="material-symbols-outlined search-icon">
                        search
                    </span>
                    <input className="search-input" placeholder="Search for frogs" />
                </div>
                <span class="material-symbols-outlined home-icon">
                    home
                </span>
                <div className="navbar-link">Home</div>
                <span class="material-symbols-outlined join-icon">
                    join
                </span>
                <div className="navbar-link">Create</div>
                <span class="material-symbols-outlined create-icon">
                    explore
                </span>
                <div className="navbar-link">Trade</div>
                <span class="material-symbols-outlined trade-icon">
                    communities
                </span>
                <div className="navbar-link">Community</div>
            </div>
            <div className="navbar-right">
                <img className="profile profile-icon" src='./src/assets/person/1.jpg'></img>
            </div>
        </div>
    );
}


export default Navbar;