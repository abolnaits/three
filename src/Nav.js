import React,{useContext} from 'react'
import {MovieContext} from './MovieContext';

const Nav = () =>{

    //Datos obtenidos desde el contexto
    const [movies,setMovies] = useContext(MovieContext)

    return(
        <div>
            <li>Menu</li>
            <li>Movie number : {movies.length}</li>
        </div>
    )
}

export default Nav;
