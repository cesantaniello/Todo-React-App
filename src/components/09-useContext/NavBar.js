import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/"className="navbar-brand">NavBar</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeclassname="active" to="./" className="nav-link" aria-current="page">Home</NavLink>
                        <NavLink activeclassname="active" to="./about" className="nav-link">About</NavLink>
                        <NavLink activeclassname="active" to="./login" className="nav-link">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
