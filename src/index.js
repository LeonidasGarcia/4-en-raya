import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import { Tablero } from "./componentes/componente-tablero/Tablero";

import "./estilos/normalize.css";
import "./estilos/document.css";
import { TableroContext } from "./ProviderTablero";
import { Cabecera } from "./componentes/componente-cabecera/Cabecera";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Route exact path="/">
        <Cabecera />
        <TableroContext>
          <Tablero />
        </TableroContext>
      </Route>
    </BrowserRouter>
  </>
);

/*

 */
