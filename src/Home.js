import React from 'react'
import './Home.css'
export default function Home() {
    let thisYear = new Date().getFullYear();
    let age = thisYear - 2002;
    return (
        <div className='home-root'>
            <h1 >Welcome to <br/> my portfolio page.</h1>
            <hr />
            <p className='home'>
                "Hello, my name is Apinun Umbao. <br/>
                I'm {age} years old and live in Nonthaburi province.<br/>
                I am a student at King Mongkut's University of Technology North Bangkok since 2020.<br/>
                I am studying in the field of Electronics Engineering Technology, specializing in Computer."
            </p>
        </div>
    )
}
