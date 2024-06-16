import { useContext, useEffect, useState } from "react";
import { useAgregarAlTableroContext, useDefinirGanadorContext } from "../../ProviderTablero";

export function Columna ({filas}) {

    const agregarAlTableroContext = useContext(useAgregarAlTableroContext());
    const definirGanador = useContext(useDefinirGanadorContext());

    const [base, setBase] = useState(filas.length-1)

    const manejarClick = () => {  
        if (base !== -1) {
            filas[base].push('rojo')
            agregarAlTableroContext(filas[base]);
            setBase(base-1);
        }
    }

    return (
        <div className="columna" onClick={()=>manejarClick()}>
            {filas.map(celda=>{
                return(<div className={`fila ${(celda[2] === 'rojo') ? celda[2] : ''}`}></div>);
            })}
        </div>
    );
}