import { useContext } from 'react';
import '../../estilos/Tablero.css'
import { Columna } from './Columna';
import { useArrayTableroContext, useGanadorContext } from '../../ProviderTablero';
import { Reiniciar } from './Reiniciar';

export function Tablero () {

    const arrayTablero = useContext(useArrayTableroContext());
    const ganador = useContext(useGanadorContext())

    return (<>
        <div className="ContenedorTablero">
            <div className={`Tablero ${(ganador === '') ? '' : 'Bloqueado'}`}>
                {arrayTablero.map(columna=>{
                    return (
                        <Columna className="columna" filas={columna}></Columna>
                    );
                })}
            </div>
        </div>
        <Reiniciar/>
        </>);
}