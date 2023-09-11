import { Switch, Route } from "react-router-dom";
import Categorias from "./paginas/categorias";
import Detalle from "./paginas/detalle";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Home from "./paginas/home";
import NotFound from "./paginas/notfound"
import React from "react";
function App() {
  //linea 11 el path significa la ruta de la pagina a la que voy a entrar//

  return (
    <React.Fragment>
      <Nav></Nav>
        <Switch>

        <Route path="/" exact={true} Component={Home}/>
        <Route path="/categorias" exact={true} Component={Categorias}/> 
        <Route path="/detalle/:id" Component={Detalle}/>
        <Route path=" " Component={NotFound}/>

        </Switch>
      <Footer></Footer>
    </React.Fragment>

    

  );
}

export default App;
