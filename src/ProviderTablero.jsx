import React, { useState } from 'react'

const tableroContext = React.createContext();
const reiniciarTableroContext = React.createContext();
const reiniciadoContext = React.createContext();
const restablecerReiniciadoContext = React.createContext();
const jugadorContext = React.createContext();
const ganadorContext = React.createContext();
const cambiarJugadorContext = React.createContext();
const agregarAlTableroContext = React.createContext();
const definirGanadorContext = React.createContext();

export const useArrayTableroContext = () => tableroContext;
export const useReiniciarTableroConext = () => reiniciarTableroContext;
export const useReiniciadoContext = () => reiniciadoContext;
export const useRestablecerReiniciadoContext = () => restablecerReiniciadoContext;
export const useJugadorContext = () => jugadorContext;
export const useGanadorContext = () => ganadorContext;
export const useCambiarJugadorContext = ()=> cambiarJugadorContext;
export const useAgregarAlTableroContext = () => agregarAlTableroContext;
export const useDefinirGanadorContext = () => definirGanadorContext;

export const TableroContext = ({children}) => {
    const [arrayTablero, setArrayTablero] = useState(()=>llenarArray(7, 6));
    const [jugador, setJugador] = useState('rojo');
    const [ganador, setGanador] = useState('');
    const [reiniciado, setReiniciado] = useState(false);

    const reiniciarArrayTablero = () => {
        setArrayTablero(llenarArray(7, 6))
        setReiniciado(true);
        setGanador('');
        setJugador('rojo')
    }

    const cambiarJugador = ()=> {
        if (jugador === 'rojo') setJugador('amarillo');
        else setJugador('rojo');
    }   

    const agregarAlArrayTablero = (celdaActualizada) => {
        const actualizacionArrayTablero = [...arrayTablero]
        actualizacionArrayTablero[celdaActualizada[0]][celdaActualizada[1]] = celdaActualizada;
        setArrayTablero(actualizacionArrayTablero);
    }

    const definirGanador = (celdaCandidata) => {
        const copiaArrayTablero = [...arrayTablero];

        celdaCandidata = busquedaDiagonal1(copiaArrayTablero, celdaCandidata)
        celdaCandidata = busquedaDiagonal2(copiaArrayTablero, celdaCandidata)
        celdaCandidata = busquedaHorizontal(copiaArrayTablero, celdaCandidata)
        celdaCandidata = busquedaVertical(copiaArrayTablero, celdaCandidata)

        if (celdaCandidata[3].lineaDiagonal1 >= 4) setGanador(jugador); 
        if (celdaCandidata[3].lineaDiagonal2 >= 4) setGanador(jugador); 
        if (celdaCandidata[3].lineaHorizontal >= 4) setGanador(jugador); 
        if (celdaCandidata[3].lineaVertical >= 4) setGanador(jugador); 
    }

    return (
        <tableroContext.Provider value={arrayTablero}>
            <agregarAlTableroContext.Provider value={agregarAlArrayTablero}>
                <definirGanadorContext.Provider value={definirGanador}>
                    <jugadorContext.Provider value={jugador}>
                        <cambiarJugadorContext.Provider value={cambiarJugador}>
                            <ganadorContext.Provider value={ganador}>
                                <reiniciarTableroContext.Provider value={reiniciarArrayTablero}>
                                    <reiniciadoContext.Provider value={reiniciado}>
                                        <restablecerReiniciadoContext.Provider value={setReiniciado}>
                                            {children}
                                        </restablecerReiniciadoContext.Provider>
                                    </reiniciadoContext.Provider>
                                </reiniciarTableroContext.Provider>
                            </ganadorContext.Provider>
                        </cambiarJugadorContext.Provider>
                    </jugadorContext.Provider>
                </definirGanadorContext.Provider>
            </agregarAlTableroContext.Provider>
        </tableroContext.Provider>
    );

}

const llenarArray = (x, y) => {
    let arrayTablero = [];
    for (let i = 0; i < x; i++) {
        arrayTablero.push([]);
        for (let j = 0; j < y; j++) {
            arrayTablero[i].push([i, j, 'df', {lineaDiagonal1: 1, lineaDiagonal2: 1, lineaHorizontal: 1, lineaVertical: 1}]);
        }
    }
    return arrayTablero;
}








const busquedaDiagonal1 = (arrTablero, nodoOrigen) => {
    let columna = nodoOrigen[0];
    let fila = nodoOrigen[1];
    
    let nodoDiagonalSuperior;
    let i = 1;

    while (true) {
        try {
        nodoDiagonalSuperior = arrTablero[columna+i][fila-i];
        if (nodoOrigen[2] === nodoDiagonalSuperior[2]) {
            nodoOrigen[3].lineaDiagonal1 += 1
        } else {
            break;
        }
        i++;
        } catch (error) {
            break;
        }
    }

    i = 1;
    let nodoDiagonalInferior;

    while (true) {
        try {
            nodoDiagonalInferior = arrTablero[columna-i][fila+i]
            if (nodoOrigen[2] === nodoDiagonalInferior[2]) {
                nodoOrigen[3].lineaDiagonal1 += 1
            } else {
                break;
            }
            i++;
        } catch (error) {
            break;
        }
    }

    return nodoOrigen;
}

const busquedaDiagonal2 = (arrTablero, nodoOrigen) => {
    let columna = nodoOrigen[0];
    let fila = nodoOrigen[1];
    
    let nodoDiagonalSuperior;
    let i = 1;

    while (true) {
        try {
            nodoDiagonalSuperior = arrTablero[columna-i][fila-i];
        if (nodoOrigen[2] === nodoDiagonalSuperior[2]) {
            nodoOrigen[3].lineaDiagonal2 += 1
        } else {
            break;
        }
        i++;
        } catch (error) {
            break;
        }
    }

    i = 1;
    let nodoDiagonalInferior;

    while (true) {
        try {
            nodoDiagonalInferior = arrTablero[columna+i][fila+i]
            if (nodoOrigen[2] === nodoDiagonalInferior[2]) {
                nodoOrigen[3].lineaDiagonal2 += 1
            } else {
                break;
            }
            i++;
        } catch (error) {
            break;
        }
    }

    return nodoOrigen;
}

const busquedaHorizontal = (arrTablero, nodoOrigen) => {
    let columna = nodoOrigen[0];
    let fila = nodoOrigen[1];
    
    let nodoDerecho;
    let i = 1;

    while (true) {
        try {
            nodoDerecho = arrTablero[columna+i][fila];
            //console.log(nodoDiagonalSuperior)
            //console.log(nodoOrigen)
        if (nodoOrigen[2] === nodoDerecho[2]) {
            nodoOrigen[3].lineaHorizontal += 1
        } else {
            break;
        }
        i++;
        } catch (error) {
            break;
        }
    }

    i = 1;
    let nodoIzquierdo;

    while (true) {
        try {
            nodoIzquierdo = arrTablero[columna-i][fila]
            if (nodoOrigen[2] === nodoIzquierdo[2]) {
                nodoOrigen[3].lineaHorizontal += 1
            } else {
                break;
            }
            i++;
        } catch (error) {
            break;
        }
    }

    return nodoOrigen;
}

const busquedaVertical = (arrTablero, nodoOrigen) => {
    let columna = nodoOrigen[0];
    let fila = nodoOrigen[1];
    
    let nodoSuperior;
    let i = 1;

    while (true) {
        try {
            nodoSuperior = arrTablero[columna][fila-1];
            //console.log(nodoDiagonalSuperior)
            //console.log(nodoOrigen)
        if (nodoOrigen[2] === nodoSuperior[2]) {
            nodoOrigen[3].lineaVertical += 1
        } else {
            break;
        }
        i++;
        } catch (error) {
            break;
        }
    }

    i = 1;
    let nodoInferior;

    while (true) {
        try {
            nodoInferior = arrTablero[columna][fila+i]
            if (nodoOrigen[2] === nodoInferior[2]) {
                nodoOrigen[3].lineaVertical += 1
            } else {
                break;
            }
            i++;
        } catch (error) {
            break;
        }
    }

    return nodoOrigen;
}