import React from 'react'

import logo from '../logo.svg'
import whats from './images/whatsapp1.svg'
import insta from './images/instagram.svg'
import iam from './images/20200924_153340.jpg'
import './styles/about.css'

class About extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div id="acerca" className='container-primary'>
                    <div className='text-container'>
                        <div className='titles'>
                            <h1>ACERCA DE</h1>
                            <h1 className='create-title'>Un poco mas de mi</h1>
                        </div>
                        <p>Hola! Soy desarrollador web, empece desde febrero del 2020 
                            y busco trabajar como freelance. Tengo 25 años, amo la 
                            tecnologia, tengo muchas ganas de trabajar en cualquier 
                            proyecto, me encanta desarrollar proyectos de todo tipo 
                            y nunca parar de aprender!
                        </p>
                        <div className='social-buttons'>
                            <a 
                            href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0"
                            className='button-social whatsapp'>
                                Contactame <img src={whats} alt="whats"/>
                            </a>
                            <a 
                            href="https://www.instagram.com/walfret/"
                            className='button-social insta'>
                                Instagram <img src={insta} alt="insta"/>
                            </a>
                        </div>
                    </div>
                    <div className='img-right'>
                        <div>
                            <img className='App-logo spin' src={logo} alt="img"/>
                        </div>
                        <img className="me" src={iam} alt="yo"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default About;