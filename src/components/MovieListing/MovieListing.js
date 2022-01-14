import React from 'react'
import { useSelector } from "react-redux";
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    //console.log(movies.Response);

    let randerMovies = "";
    //console.log(movies.Search)

    randerMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
        <div className="Error">
            <h2>Data not get the server</h2>
        </div>
    )


    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{randerMovies}</div>
            </div>
        </div>
    )
}

export default MovieListing
