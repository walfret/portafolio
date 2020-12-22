import React from 'react'
import navecita from './images/nave-espacial.svg'
import flecha from './images/flecha-hacia-abajo-esbozada.svg'

import './styles/hero.css'

class hero extends React.Component {
    render () {
        return(
            <React.Fragment>
                <div className='hero'>
                    <div>
                        <img className='xwing animated fadeInUp' src={navecita} alt="x-wing"/>
                        <p>Christian <br/>Rodriguez</p>
                    </div>
                </div>
                <div className='container-button'>
                    <a href="#acerca" className='button'>
                        <img src={flecha} alt="flecha"/>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

export default hero;