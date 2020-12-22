import React from 'react' 

import './styles/contact.css'
import ubicacion from './images/marcador-de-posicion.svg'
import insta from './images/instagram-verde.svg'
import email from './images/email-verde.svg'
import face from './images/facebook-verde.svg'
import telefono from './images/telefono-verde.svg'
import whats from './images/whatsapp-verde.svg'

class contact extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div id="contacto" className="container-contact">
                    <div className='titles'>
                        <h1>CONTACTO</h1>
                        <h1 className='create-title'>Contactame Y Hagamos Grandes Proyectos</h1>
                    </div>
                    <div className="contacts c01">
                        <div>
                            <h1>UBICACIÓN</h1>
                            <h2>Orizaba Ver. Mexico</h2>
                        </div>
                        <img src={ubicacion} alt=""/>
                    </div>
                    <a href="https://www.instagram.com/walfret/" className="contacts c02">
                        <div>
                            <h1>INSTAGRAM</h1>
                            <h2>@walfret</h2>
                        </div>
                        <img src={insta} alt=""/>
                    </a>
                    <a href="mailto:walfret69@gmail.com" className="contacts c03">
                        <div>
                            <h1>EMAIL</h1>
                            <h2>walfret69@gmail.com</h2>
                        </div>
                        <img src={email} alt=""/>
                    </a>
                    <a href="https://www.facebook.com/walfret.bravo" className="contacts c04">
                        <div>
                            <h1>FACEBOOK</h1>
                            <h2>Walfret Rodriguez</h2>
                        </div>
                        <img src={face} alt=""/>
                    </a>
                    <a href="tel:2722143009" className="contacts c05">
                        <div>
                            <h1>TELEFONO</h1>
                            <h2>+52 272 214 3009</h2>
                        </div>
                        <img src={telefono} alt=""/>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=522722143009&text&app_absent=0" className="contacts c06">
                        <div>
                            <h1>WHATSAPP</h1>
                            <h2>Mi Whatsapp</h2>
                        </div>
                        <img src={whats} alt=""/>
                    </a>
                    </div>
            </React.Fragment>
        )
    }
}
export  default contact;