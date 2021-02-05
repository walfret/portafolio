import React from 'react';
import { connect } from "react-redux";
import Hombre from './hombre';
import Mujer from './mujer';

const juego = ({ jugadores, agregarH, agregarM }) => (
    <section>
        <div className="container-juego">
           <h2>Juego Api</h2>
            {
                jugadores.map(j => (
                    <article key={j.id}>
                        <h3>Nombre: {j.nombre} </h3>
                        <p>Edad: {j.edad}</p>
                        <button onClick={() => agregarH(j)}>Hombre</button>
                        <button onClick={() => agregarM(j)}>Mujer</button>
                    </article>
                ))
            }
            <Hombre />
            <Mujer />
        </div>
    </section>
)

const mapStateToProps = state => ({
    jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
    agregarH(jugador) {
        dispatch({
            type: "AGREGAR_H",
            jugador
        })
    },
    agregarM(jugador) {
        dispatch({
            type: "AGREGAR_M",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(juego);