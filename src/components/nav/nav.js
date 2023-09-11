import { Link } from "react-router-dom";
import logo from "./logo.png" //pusimos la imagen, linea 6 tambien, logo linea 1 = linea 6//
import "./nav.css"
function Nav() {
    return (
        <nav>
            <ul className="main-nav">
                <li key={1}><img width="50px " src={logo}/></li> 
                <li key={2}> <Link to="/home">Home</Link></li>
                <li key={3}> <Link to="/categorias">Categorias</Link></li>
            </ul>
            <ul className="user">
                <li key={1}>Nombre usuario <img src="./img/user.jpg" alt=""/></li>
        </ul>
 </nav>
  );
}

export default Nav;