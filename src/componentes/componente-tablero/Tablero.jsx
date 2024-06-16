import { useContext, useEffect } from 'react';
import '../../estilos/Tablero.css'
import { Columna } from './Columna';
import { useArrayTableroContext } from '../../ProviderTablero';

export function Tablero () {

    const arrayTablero = useContext(useArrayTableroContext());

    return (
        <div className="Tablero">
            {arrayTablero.map(columna=>{
                return (
                    <Columna className="columna" filas={columna}></Columna>
                );
            })}
        </div>
    );
}