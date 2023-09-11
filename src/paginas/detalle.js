import React, { Component } from 'react';
import '../App.css';
const clave = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmUwZTc1NWIxZjljMTI5ZTUzYWE3YzhhZjNkOTg2OCIsInN1YiI6IjYzNzJjYTUzYmYwZjYzMDA3ZmU0ZjdjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l2bg2TJYE72KEMLrZdS6K2cz-Y2cErlz008Pqjpxavs' //toke que es todo este string//

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        const url = 'https://api.themoviedb.org/3/movie/'+id+'language=en-US'

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
                console.log(data)
                this.setState({ pelicula: data })
            })

    }
    render() {
        if (this.state.pelicula == null){
            return <h2>Cargando pelicula</h2>
        }
        return (
            <div>
                   <h1 className="titulo" >Detalle</h1>
                <main>
                    <section className="top-data">
                        <div id="detalle">
                            <div>
                                <img src={"https://image.tmdb.org/t/p/w342/" +this.state.pelicula.backdrop_path}/>
                            </div>
                            <div>
                                <h2>{this.state.pelicula.title}</h2>
                                <p>Puntaje: {this.state.pelicula.vote_average}</p>
                                <p>Estreno: {this.state.pelicula.release_date}</p>
                                <p>Overview: {this.state.pelicula.overview}</p>
                                <p>Genero: {this.state.pelicula.genres.map(g=><span key ={g.id}>{g.name} </span>)}</p>
                                <p> <button> Agregar a Favoritos</button></p>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        )

    }
}

export default Detalle;