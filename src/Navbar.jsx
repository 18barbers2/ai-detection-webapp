import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Sam Is It Spam?</a>
                    <ul className='navbar-nav'>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Image</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Text</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;