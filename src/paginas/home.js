import React, { Component } from 'react';
import '../App.css';
import Info from '../components/info/info';
const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

const clave = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmUwZTc1NWIxZjljMTI5ZTUzYWE3YzhhZjNkOTg2OCIsInN1YiI6IjYzNzJjYTUzYmYwZjYzMDA3ZmU0ZjdjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l2bg2TJYE72KEMLrZdS6K2cz-Y2cErlz008Pqjpxavs' //toke que es todo este string//

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: []
    }
    } 
    //*componentDidMount se escribe asi porq es de react//
    componentDidMount(){
        const opciones= {
            method: "GET",
            headers: {
            'Authorization': 'Bearer ' + clave,
            'Accept': 'application/json',
            } 
        }
        fetch (url, opciones)
        .then (data => data.json())
        .then (data => {
            console.log(data)
            this.setState({peliculas: data.results})
        })

    }
    render(){
        console.log (this.state.peliculas)
        return (
            <div>
                <h1 className="titulo">Home</h1>
                <main>
                    <section className="top-data">
                        <form>
                            <input type="text" />
                            <input type="submit" value="Buscar" />
                        </form>
                    </section>
                    <h2 className="titulo">Peliculas Populares</h2>
                    <section className="general-data">
                        {this.state.peliculas.map((pelicula, i) => <Info pelicula={pelicula} key ={pelicula.id}/>)}
                    </section>
                </main>
            </div>
        )
    //codigo...
    }
    }
    
export default Home;