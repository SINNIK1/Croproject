import React from 'react';
import './header.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../../Navbar/About/about';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <Route path="/about" component={About} />
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;