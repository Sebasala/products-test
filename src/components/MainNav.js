import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink exact to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/products">PRODUCTS</NavLink>
                </li>
                <li>
                    <NavLink to="/clients">CLIENTS</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>
            </ul>
        </nav>
    );
}
 
export default MainNav;