import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Home2 from './Home-2';
import Home3 from './Home-3';
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

    // const menuStyle = {

    //     display: isOpen ? 'block' : 'none',
    //     top: '6.5vh',
    //     left: 0,
    //     width: '100%',
    //     backgroundColor: 'black',
    //     padding: '1rem',
    //     boxSizing: 'border-box',
    //     boxShadow: '0 0 1rem black',
    // };

    const menuStyle = {
        display: isOpen ? 'block' : 'none', // Always set to block initially
        top: '6.5vh',
        left: 0,
        width: '100%',
        backgroundColor: 'black',
        padding: '1rem',
        boxSizing: 'border-box',
        boxShadow: '0 0 1rem black',
        opacity: isOpen ? 1 : 0, // Set initial opacity
        transition: 'opacity 0.5s ease-in-out 2s', // Add a 0.2s delay before the transition starts
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
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "active_menu" : "menu")}
                        style={({ isActive }) => (isActive ? menuItemSelectStyle : menuItemStyle)}
                        onClick={toggleMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? "active_menu" : "menu")}
                        style={({ isActive }) => (isActive ? menuItemSelectStyle : menuItemStyle)}
                        onClick={toggleMenu}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
            <Routes >
                <Route
                    path="/"
                    element={
                        <>
                            <div style={inRouteStyle} className='fade'>
                                <Home />
                            </div>
                            <div style={inRouteStyle} className='fade'>
                                <Home2 />
                            </div>
                            <div style={inRouteStyle} className='fade'>
                                <Home3 />
                            </div>
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <div style={inRouteStyle} className='fade'>
                            <About />
                        </div>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <div style={inRouteStyle} className='fade'>
                            <Contact />
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
            <div style={{ height: '5vh' }}></div>
        </BrowserRouter>
    );
};

export default Header;

