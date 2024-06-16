import React from "react";
import ReactDOM from "react-dom/client";

import { Tablero } from "./componentes/componente-tablero/Tablero";

import "./estilos/normalize.css";
import "./estilos/document.css";
import { TableroContext } from "./ProviderTablero";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <TableroContext>
    <Tablero />
  </TableroContext>
);
