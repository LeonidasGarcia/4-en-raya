import { useContext, useEffect, useState } from "react";
import { useAgregarAlTableroContext, useArrayTableroContext, useCambiarJugadorContext, useDefinirGanadorContext, useGanadorContext, useJugadorContext, useReiniciadoContext, useRestablecerReiniciado, useRestablecerReiniciadoContext } from "../../ProviderTablero";

export function Columna ({filas}) {

    const agregarAlTableroContext = useContext(useAgregarAlTableroContext());
    const definirGanador = useContext(useDefinirGanadorContext());
    const jugador = useContext(useJugadorContext());
    const cambiarJugador = useContext(useCambiarJugadorContext());
    const reiniciado = useContext(useReiniciadoContext())
    const setReiniciado = useContext(useRestablecerReiniciadoContext())

    useEffect(()=>{
        if (reiniciado) {
            console.log("JUEGO REINICIADO!")
            setBase(filas.length-1);
            setReiniciado(false);
        }
    }, [reiniciado])

    const [base, setBase] = useState(filas.length-1)

    const manejarClick = () => {  
        if (base !== -1) {
            filas[base][2] = jugador;
            agregarAlTableroContext(filas[base]);
            definirGanador(filas[base]);
            cambiarJugador();
            setBase(base-1);
        }
    }

    return (
        <div className="columna" onClick={()=>manejarClick()}>
            {filas.map(celda=>{
                return(<div className={`fila ${(celda[2] !== '') ? celda[2] : ''}`}></div>);
            })}
        </div>
    );
}