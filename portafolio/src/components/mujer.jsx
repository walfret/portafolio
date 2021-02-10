import React from 'react';
import { connect } from 'react-redux'

const mujer = ({ mujeres, quitarDeM }) => (
    <section>
        <h1 className="margin">Mujeres</h1>
        {
            mujeres.map(j => (
                <article key={j.id}>
                    <div className="margin">
                        <h3>{j.nombre}</h3>
                        <h4>{j.edad} años</h4>
                        <button onClick={() => quitarDeM(j)}> X </button>
                    </div>
                </article>
            ))
        }
    </section>
)

const mapStateToProps = state => ({
    mujeres: state.mujeres
})

const mapDispatchToProps = dispatch => ({
    quitarDeM(jugador) {
        dispatch({
            type: "QUITAR_DE-M",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(mujer);