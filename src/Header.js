import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import About from './About';
import './Header.css';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'sans-serif',
        boxShadow: '0 0 1rem black',
        padding: '1vh',
    };

    const h1Style = {
        margin: '0',
        padding: '0.5vh',
    };

    const menuStyle = {
        display: isOpen ? 'block' : 'none',
        top: '6.5vh',
        left: 0,
        width: '100%',
        backgroundColor: 'black',
        padding: '1rem',
        boxSizing: 'border-box',
        boxShadow: '0 0 1rem black',
    };

    const menuItemStyle = {
        display: 'block',
        padding: '0.5rem',
        color: 'white',
        textDecoration: 'none',
        fontSize: '1.5rem',
    };
    const menuItemSelectStyle = {
        display: 'block',
        backgroundColor: 'white',
        padding: '0.5rem',
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.5rem',
    };

    const buttonStyle = {
        position: 'absolute',
        top: '1.5vh',
        right: '1vw',
        margin: '0.1rem ',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
        border: 'none',
        cursor: 'pointer',
    };

    const inRouteStyle = {
        backgroundColor: 'white',
        marginTop: '1.5vh ',
        marginLeft: '3vw ',
        marginRight: '3vw ',
        padding: '0.5rem',
        boxSizing: 'border-box',
        boxShadow: '0 0 1rem black',
        borderRadius: '0.75rem',
        // height : '85.9vh'
    };

    

    return (
        <BrowserRouter>
            <div style={headerStyle} >
                <h1 style={h1Style}>Portfolio</h1>
                <button style={buttonStyle} onClick={toggleMenu}>☰</button>
                <div style={menuStyle} className='fadeMenu'>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active_menu" : "menu")}
                        style={({ isActive }) => (isActive ? menuItemSelectStyle : menuItemStyle)}
                    >
                        Home 
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active_menu" : "menu")}
                        style={({ isActive }) => (isActive ? menuItemSelectStyle : menuItemStyle)}
                    >
                        About 
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active_menu" : "menu")}
                        style={({ isActive }) => (isActive ? menuItemSelectStyle : menuItemStyle)}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            <Routes >
                <Route
                    path="/"
                    element={
                        <div style={inRouteStyle} className='fade'>
                            
                        </div>
                        }
                />
                <Route
                    path="/about"
                    element={
                        <div style={inRouteStyle } className='fade'>
                            <About />
                        </div>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <div style={inRouteStyle} className='fade'>
                            
                        </div>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <div style={inRouteStyle} className='fade'>404 Not Found</div>
                    }
                />
            </Routes>
            <div style={{height:'5vh'}}></div>
        </BrowserRouter>
    );
};

export default Header;

