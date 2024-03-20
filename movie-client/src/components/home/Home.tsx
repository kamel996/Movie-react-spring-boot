import React from 'react'
import Hero from '../hero/Hero'
import { IMovie } from '../../model/movie.model'

const Home = ({movies} : {movies: IMovie[]}) => {
  return (
      <Hero movies={movies} />
  )
}

export default Home