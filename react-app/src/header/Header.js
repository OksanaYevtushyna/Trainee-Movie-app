import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="navigation">
                    <div className="logo">
                        <p>Movie<span>Blog</span></p>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Archive</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;