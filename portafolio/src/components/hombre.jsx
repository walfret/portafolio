import React from 'react';
import { connect } from 'react-redux'

const hombre = ({ hombres, quitarDeH }) => (
    <section>
        <h2>Hombres</h2>
        {
            hombres.map(j => (
                <article key={j.id}>
                    <div>
                        <h3>{j.nombre}</h3>
                        <h4>{j.edad} años</h4>
                        <button onClick={() => quitarDeH(j)}>X</button>
                    </div>
                </article>
            ))
        }
    </section>
)

const mapStateToProps = state => ({
    hombres: state.hombres
})

const mapDispatchToProps = dispatch => ({
    quitarDeH(jugador) {
        dispatch({
            type: "QUITAR_DE-H",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(hombre);