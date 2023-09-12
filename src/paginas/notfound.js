import '../App.css';
import Info from '../components/info/info';

function NotFound() {
    
    const categories = ['peliculas', 'musica', 'series','comida', 'hola']
    
    return (
        <div>
        <h1 className="titulo">Sin resultados</h1>
        <main>
            <section className="top-data">
              <p>esta ruta no existe</p>
            </section>    
        </main>
        </div>
    
      );
}

export default NotFound;
