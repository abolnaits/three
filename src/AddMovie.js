import React,{useState,useContext} from 'react';
import {MovieContext} from './MovieContext';

const AddMovie = () =>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext);

    const updateName = (e) =>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setName(e.target.value)
    }

    const updatePrice = (e) =>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setPrice(e.target.value)
    }

    const updateMovies = () => {
        console.log('Movies =>',movies);
        const movie = {
            id: movies.length,
            name:name,
            price:price
        }
        movies.push(movie)
        setMovies(movies)
    }

    return(
        <div>
            <h2>Add movie</h2>
            <form>
                <label>
                    Name:
                </label>
                <input type="text" name="name" onChange={updateName} value={name}></input>
                <br></br>
                <label>
                    Price:
                </label>
                <input type="text" name="price" onChange={updatePrice} value={price}></input>
                <br></br>
                <button onClick={updateMovies} type="button">Add</button>               
            </form>
        </div>
    )
}

export default AddMovie;