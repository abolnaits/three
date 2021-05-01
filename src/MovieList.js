import React,{useState} from 'react';
import Movie from './Movie';

const MovieList = () =>{

    const [movies,setMovies] = useState([
        {
            name:'Harry Potter',
            price:'$10',
            id:1
        },{
            name:'Futurama',
            price:'$20',
            id:2
        },{
            name:'Titanic',
            price:'$30',
            id:3
        }
    
    ]);

        return(
            <div>
                {movies.map((movie)=>(
                    <Movie id={movie.id} name={movie.name} price={movie.price}></Movie>
                ))}
            </div>
        )

       

}

export default MovieList;
