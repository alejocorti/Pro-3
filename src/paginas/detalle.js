import React, { Component } from 'react';
import '../App.css';
import Loader from "../components/loader/loader"
const clave = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmUwZTc1NWIxZjljMTI5ZTUzYWE3YzhhZjNkOTg2OCIsInN1YiI6IjYzNzJjYTUzYmYwZjYzMDA3ZmU0ZjdjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l2bg2TJYE72KEMLrZdS6K2cz-Y2cErlz008Pqjpxavs' //toke que es todo este string//

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cargando: true,
            favorito: false,
            pelicula: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        const url = 'https://api.themoviedb.org/3/movie/' + id + 'language=en-US'

        console.log(id)
        const opciones = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + clave,
                'Accept': 'application/json',
            }
        }
        fetch(url, opciones)
            .then(data => data.json())
            .then(data => {
                let storageFav = localStorage.getItem('favoritos')
                let arrParseado = JSON.parse(storageFav)
                let estaMiPelicula = false
                if (arrParseado !== null) {
                 estaMiPelicula = arrParseado.includes(data.id)

                }
                this.setState({ cargando: false, favorito: estaMiPelicula, pelicula: data })

            })

    }

    agregarAFavoritos(id) {
        let storageFav = localStorage.getItem('favoritos')
        if (storageFav === null) {
            let arrIds = [id]
            let arrStringificado = JSON.stringify(arrIds)
            localStorage.setItem('favoritos', arrStringificado)
        } else {
            let array = JSON.parse(storageFav)
            array.push(id)
            let arrStringificado = JSON.stringify(array)
            localStorage.setItem('favoritos', arrStringificado)
        }

        this.setState({
            favorito: true,
            pelicula: this.state.pelicula,
            cargando: this.state.cargando,
        })
    }
    sacarDeFavoritos(id) {
        let storage = localStorage.getItem('favoritos')
        let arrParseado = JSON.parse(storage)
        let favsFiltrados = arrParseado.filter((idPelicula) => idPelicula !== id)
        let arrStringificado = JSON.stringify(favsFiltrados)
        localStorage.setItem('favoritos', arrStringificado)
        
        this.setState({
            favorito: false,
            pelicula: this.state.pelicula,
            cargando: this.state.cargando,
        })
    }

    render() {
        if (this.state.cargando) {
            return (<Loader></Loader>)
        }
        return (
            <div>
                <h1 className="titulo" >Detalle</h1>
                <main>
                    <section className="top-data">
                        <div id="detalle">
                            <div>
                                <img src={"https://image.tmdb.org/t/p/w342/" + this.state.pelicula.backdrop_path} />
                            </div>
                            <div>
                                <h2>{this.state.pelicula.title}</h2>
                                <p>Calificacion: {this.state.pelicula.vote_average}</p>
                                <p>Estreno: {this.state.pelicula.release_date}</p>
                                <p>Overview: {this.state.pelicula.overview}</p>
                                <p>Genero: {this.state.pelicula.genres.map(g => <span key={g.id}>{g.name} </span>)}</p>
                                <p>Duracion: {this.state.pelicula.runtime}min</p>
                                <p>
                                    {
                                        this.state.favorito ?
                                            <button onClick={() => this.sacarDeFavoritos(this.state.pelicula.id)}>
                                                Sacar de favoritos
                                    </button>
                                            :
                                            <button onClick={() => this.agregarAFavoritos(this.state.pelicula.id)}>
                                                Agregar a favoritos
                                    </button>
                                    }
                                </p>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        )

    }
}

export default Detalle;