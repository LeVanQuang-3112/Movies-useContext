import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import {REACT_APP_TMDB_KEY} from "../common/api"
import Slider from "react-slick"
import { settings1 } from '../common/settings';

export default function MovieDetail() {
    const {movieId} = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_TMDB_KEY}&append_to_response=videos`)
        .then((res) => {
            setMovie(res.data)
        })
        .catch((err) => console.log("err", err))
    }, [movieId])
    console.log(movie)

    return (
        <div className="detail__container">
            <h1>{movie?.original_title}</h1>
            <div className="detail__trailer">
            <iframe width="800" height="350" src={`https://www.youtube-nocookie.com/embed/${movie?.videos.results[0].key}`} 
                frameBorder="0" allowFullScreen title={movie?.original_title}></iframe> 
            </div>
            <div className="detail__content">
               <div>
                 <div className="detail__title">
                     <p>Budget: <span className="detail__color">{movie?.budget}$</span></p>
                     <p>Language: <span className="detail__color">{movie?.original_language}</span></p>
                     <p>Popularity: <span className="detail__color">{movie?.popularity}</span></p>
                     <p>Release_date: <span className="detail__color">{movie?.release_date}</span></p>
                     <p>Vote: <span className="detail__color">{movie?.vote_average}</span></p>
                 </div>
                 <div>
                     <p>{movie?.overview}</p>
                     <p>{movie?.tagline}</p>

                 </div>
               </div>
            </div>
            <div>
                <Slider {...settings1}>
                    {
                        movie ? movie.videos.results.map((item) => {
                            return (
                                <div key={item.id}>
                                    <iframe width="300" height="230" src={`https://www.youtube-nocookie.com/embed/${item.key}`} 
                                    frameBorder="0" allowFullScreen title={item.original_title}></iframe> 
                                </div>
                            )
                        }) : (<p>No trailer</p>)
                    }
                </Slider>
            </div>
        </div>
    )
}
