import React, { useEffect, useState } from 'react';
import {fetchAllMovies} from "./api/movies"
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import { IMovie } from './model/movie.model';
import Header from './components/header/Header';
import "./App.css"
import Reviews from './components/review/Review';
import NotFound from './components/notFound/NotFound';
import Trailer from './components/trailer/Trailer';
import { Spinner } from 'react-bootstrap';

function App() {

  const [movies, setMovies] = useState<IMovie[]>([]);

  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetchAllMovies()
      .then(response => {
        setMovies(response);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="position-fixed top-50 start-50 translate-middle">
        <Spinner animation="border" variant="secondary" style={{ width: '100px', height: '100px' }} />
      </div>
    );
  }
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies} />} ></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element ={<Reviews  />}></Route>
          <Route path="*" element = {<NotFound/>}></Route>
        </Route>
    </Routes>

  </div>
  );
}

export default App;
