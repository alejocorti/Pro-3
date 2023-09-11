import React, { Component } from 'react';
import { Link, useParams } from "react-router-dom";
import "./info.css";
class Info extends Component {
    constructor(props){
        super(props)
    }

    render (){
        return (
            <div className= "info">
                <div>
                <img src={"https://image.tmdb.org/t/p/w342/" +this.props.pelicula.backdrop_path}/>
                </div>
                <div>
                    <h3> {this.props.pelicula.title}</h3>
                    <p>Descripcion: {this.props.pelicula.overview} </p>
                    <button> Ver mas</button>
                    <Link to={'/detalle/'+ this.props.pelicula.id}> Ir a detalle</Link>
                </div>
            </div>
      );
    } 
} 
    
export default Info;