import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Christian Rodriguez",
      edad: 25,
    },
    {
      id: 2,
      nombre: "Brissa Salas",
      edad: 24,
    },
    {
      id: 3,
      nombre: "Marco Castro",
      edad: 23,
    },
    {
      id: 3,
      nombre: "Maria Barros",
      edad: 22,
    },
  ],
  hombres: [],
  mujeres: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "AGREGAR_H") {
    return {
      ...state,
      hombres: state.hombres.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "AGREGAR_M") {
    return {
      ...state,
      mujeres: state.mujeres.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "QUITAR_DE-H") {
    return {
      ...state,
      hombres: state.hombres.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  if (action.type === "QUITAR_DE-M") {
    return {
      ...state,
      mujeres: state.mujeres.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  return state;
};

export default createStore(reducer);
