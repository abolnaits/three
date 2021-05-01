//useContext se usar para obtener el contexto y poder
//acceder a los datos del provider

import React,{useState,useContext} from 'react';

import Movie from './Movie';
import {MovieContext} from './MovieContext';


const MovieList = () =>{

        const [movies,setMovies] = useContext(MovieContext)

        return(
            <div>
                
                {movies.map((movie)=>(
                    <Movie key={movie.id} id={movie.id} name={movie.name} price={movie.price}></Movie>
                ))}
            </div>
        )

       

}

export default MovieList;
