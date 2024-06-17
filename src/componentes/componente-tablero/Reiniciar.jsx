
import { useContext } from 'react';
import '../../estilos/Reiniciar.css'
import { useGanadorContext, useReiniciarTableroConext } from '../../ProviderTablero';

export function Reiniciar () {
    const reiniciarTablero = useContext(useReiniciarTableroConext())
    const ganador = useContext(useGanadorContext());

    return (
        <div className="ContenedorReiniciar">
            <div className="Ganador">{(ganador === '') ? "Aun no hay un ganador..." : `El ganador es el jugador ${ganador}!`}</div>
            <button className="Reiniciar" onClick={()=>reiniciarTablero()}>Reiniciar</button>
        </div>
        
    );
}