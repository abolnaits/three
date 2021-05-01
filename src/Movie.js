import React from 'react';

const Movie = (props) =>{

    return(
        <div>
            <h2>Movie info</h2>
            <p>{props.id}</p>
            <p>{props.price}</p>
            <p>{props.name}</p>
        </div>
    )
}

export default Movie;
