import React from 'react';
 
import './styles/notFound.css';
import Header from './header'
import Footer from './footer'
import error from './images/404-error.svg'

class notFound extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header />
                <div className="container-404">
                    <h2>Oops! Page not found</h2>
                    <img src={error} alt=""/>
                    <h1>404</h1>
                    <p>Lo sentimos, pero la pagina que buscas no ha sido encontrada. Por favor asegurate de escribir bien la URL.</p>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default notFound;