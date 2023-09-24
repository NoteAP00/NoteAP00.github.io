import React from 'react'
import './About.css'
export default function About() {
    const imgStyle = {
        borderRadius: '25%',
        width: '30vw',
        maxHeight: '70vh',
        objectFit: 'cover',
    };
    const section = {
        fontSize: '1rem',
        letterSpacing: '0.1rem',
        textTransform: 'uppercase',
        textDecoration: 'none',
    };
  return (
    <div>
      <img style={imgStyle} className='secFade' src="/img/MG_9873.jpg" alt="Apinun Umbao" width={"30%"} />
        <div style={section} className='secFade'>
            <h1 style={{marginTop:'-0.5rem'}}>Apinun Umbao</h1>
            <p style={{fontSize:'0.75rem',marginTop:'-1.5rem'}}>Student ID: 6303051623195</p>
            <hr />
            <p>Electronics Engineering <br/> Technology [Computer]</p>
            <hr />
            <p>College of Industrial Technology</p>
            <hr />
            <p>King Mongkut's University<br/>of Technology North Bangkok</p>
            <hr />
        </div>
    </div>
  )
}
