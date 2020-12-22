import React from 'react'

import './styles/technologies.css'
import html5 from '../html5.svg'
import css3 from '../css-3.svg'
import js from '../1024px-JavaScript_log.png'
import reactjs from '../logo.svg'
import nodejs from '../node-js.png'
import github from '../github-negro.svg'

class technologies extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div id="tecnologias" className='techno-container'>
                    <div className='text'>
                        <h1>TECNOLOGIAS</h1>
                        <h1 className='create-title'>Que Domino Y Uso</h1>
                    </div>
                    <div className='technology t01'>
                        <img src={html5} alt="HTML5"/>
                    </div>
                    <div className='technology t02'>
                        <img src={css3} alt="CSS3"/>
                    </div>
                    <div className='technology t03'>
                        <img src={js} alt="JavaScript"/>
                    </div>
                    <div className='technology t04'>
                        <img className='App-logo spin' src={reactjs} alt="React.js"/>
                    </div>
                    <div className='technology t05'>
                        <img src={nodejs} alt="Node.js"/>
                    </div>
                    <div className='technology t06'>
                       <img src={github} alt="Github"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default technologies