import React from 'react';

import './styles/footer.css';
import nave from './images/nave-espacial.svg';
import home from './images/casa.svg';
import about from './images/forma-de-persona-llena-de-usuario.svg';
import techno from './images/html-5-blanco.svg';
import git from './images/github.svg';
import contact from './images/cuaderno-de-contactos.svg';

class footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='footer'>
                   <img className='nave' src={nave} alt=""/>
                   <div className='list-items'>
                       <ul>
                            <li>
                                <img src={home} alt=""/>
                                <a href="#inicio">Inicio</a>
                            </li>
                            <li>
                                <img src={about} alt=""/>
                                <a href="#acerca">Acerca</a>
                            </li>
                            <li>
                                <img src={techno} alt=""/>
                                <a href="#tecnologias">Tecnologias</a>
                            </li>
                            <li>
                                <img src={contact} alt=""/>
                                <a href="#contacto">Contacto</a>
                            </li>
                            <li>
                                <img src={git} alt=""/>
                                <a href="https://github.com/walfret?tab=repositories">Proyectos</a>
                            </li>
                        </ul>
                   </div>
                </div>
            </React.Fragment>
        )
    }
}

export default footer;