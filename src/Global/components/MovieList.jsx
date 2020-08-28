import React from 'react'
import Movie from './Movie'

const MovieList = ({ movies }) => {
    const allMovies = movies.sort((a, b) => {
        return a.attributes.title.localeCompare(b.attributes.title)
    })
    const renderMovies = allMovies.map(movie => {
        return <Movie key={movie.id} movie={movie} />
    })
    return (
        <ul>
            { renderMovies }
        </ul>
    )
}

export default MovieList
