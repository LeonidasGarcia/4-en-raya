import React, { useState } from 'react'

const tableroContext = React.createContext();
const agregarAlTableroContext = React.createContext();
const definirGanadorContext = React.createContext();

const llenarArray = (x, y) => {
    let arrayTablero = [];
    for (let i = 0; i < x; i++) {
        arrayTablero.push([]);
        for (let j = 0; j < y; j++) {
            arrayTablero[i].push([i, j]);
        }
    }
    return arrayTablero;
}

export const useArrayTableroContext = () => tableroContext;
export const useAgregarAlTableroContext = () => agregarAlTableroContext;
export const useDefinirGanadorContext = () => definirGanadorContext;

export const TableroContext = ({children}) => {
    const [arrayTablero, setArrayTablero] = useState(()=>llenarArray(7, 6));

    const agregarAlArrayTablero = (celdaActualizada) => {
        const actualizacionArrayTablero = [...arrayTablero]
        actualizacionArrayTablero[celdaActualizada[0]][celdaActualizada[1]] = celdaActualizada;
        setArrayTablero(actualizacionArrayTablero);
    }

    const definirGanador = () => {
        //Algoritmo increible
    }

    return (
        <tableroContext.Provider value={arrayTablero}>
            <agregarAlTableroContext.Provider value={agregarAlArrayTablero}>
                <definirGanadorContext.Provider value={definirGanador}>
                    {children}
                </definirGanadorContext.Provider>
            </agregarAlTableroContext.Provider>
        </tableroContext.Provider>
    );

}