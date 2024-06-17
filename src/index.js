import React from "react";
import ReactDOM from "react-dom/client";

import { Tablero } from "./componentes/componente-tablero/Tablero";

import "./estilos/normalize.css";
import "./estilos/document.css";
import { TableroContext } from "./ProviderTablero";
import { Cabecera } from "./componentes/componente-cabecera/Cabecera";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Cabecera />
    <TableroContext>
      <Tablero />
    </TableroContext>
  </>
);

/*

 */
