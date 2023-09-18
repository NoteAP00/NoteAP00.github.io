import React, { /*useContext*/ } from 'react';

const Header = () => {
    // const context = useContext;
    // const { sectionName } = context;

    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'sans-serif',
        filters: 'drop-shadow(1 1 0.75rem black)',
    };
    const h1Style = {
        margin: '0',
        padding: '0.5vh',
    };

    return (
        <div style={headerStyle}>
            {/* {sectionName} */}
            <h1 style={h1Style}>Portfolio</h1>
            
        </div>
    );
};

export default Header;
