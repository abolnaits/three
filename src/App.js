import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList'
import Nav from './Nav'
import {MovieProvider} from './MovieContext'




function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav></Nav>
        <MovieList></MovieList>
      </div>
    </MovieProvider>
  );
}

export default App;
