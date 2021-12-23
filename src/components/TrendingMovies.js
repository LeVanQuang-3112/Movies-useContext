import React from 'react';
import {Link} from "react-router-dom"


export default function TrendingMovies({movie}) {
    return (
        <div className="movie__container">
            <Link to={`movie/${movie.id}`}>
            <div className="movie__image__container">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.poster_path}/>
            </div>
            <div className="movie__content--container">
                <h4>{movie.name ? movie.name : movie.title}</h4>
            </div>
            </Link>
        </div>
    )
}
