import React,{useState,createContext} from 'react'

//Creo un contexto para que este estado se accesible desde cualquier lugar
export const MovieContext = createContext();

//Provee la informacion necesaria , son los datos

export const MovieProvider = (props) =>{
    
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
            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}

