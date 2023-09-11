import React, { Component } from 'react';
import '../App.css';
const clave = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmUwZTc1NWIxZjljMTI5ZTUzYWE3YzhhZjNkOTg2OCIsInN1YiI6IjYzNzJjYTUzYmYwZjYzMDA3ZmU0ZjdjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l2bg2TJYE72KEMLrZdS6K2cz-Y2cErlz008Pqjpxavs' //toke que es todo este string//

        
    class Categorias extends Component {
        constructor(props) {
            super(props)
            this.state = {
                genres: []
            }
        }
        componentDidMount() {
            let url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
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
                    this.setState({ genres: data.genres })
                })
    
        }
        render() {
           
            return (
                <div>
                <h1 className="titulo" >Categorias</h1>
                <main>
                    <section className="top-data">
                        <form>
                            <input type="text"/> 
                            <input type ="submit" value="Buscar"/>
                        </form>
                    </section>
                    <section className="general-data">
                        {this.state.genres.map(genre => <h2 className="titulo" key= {genre.id}>{genre.name}</h2>)}
                    </section>
                </main>
                </div>
            
            )
        }
    }
   
export default Categorias;