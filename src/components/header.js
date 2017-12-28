import React, { Component } from 'react';
import logo from '../logo.png';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Thug life</h1>
            </div>
        );
    }
}

export default Header;
