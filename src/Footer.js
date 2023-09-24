import React from 'react'

export default function Footer() {
    const footerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        height: '3vh',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        fontSize: '10px',
        letterSpacing: '0.05rem',
        textTransform: 'uppercase',
        boxShadow: '0 0 1rem black',
    };
  return (
    <div>
        <footer style={footerStyle}>
            <p>© 2023</p>
            <p>Created by: Apinun Umbao</p>
            <p>@EnET-C | KMUTNB</p>
            <p>Powered by: React</p>
      </footer>
    </div>
  )
}
