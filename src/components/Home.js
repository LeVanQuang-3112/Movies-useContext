import React, { useContext, useEffect } from 'react';
import { GlobalState } from '../GlobalState';
import Slider from "react-slick"
import {settings, settings1} from "../common/settings"
import TrendingMovies from './TrendingMovies';
import SearchMovies from './SearchMovies';

export default function Home() {
    const state = useContext(GlobalState)
    const [movies] = state.productsAPI.products
    const [result] = state.productsAPI.result
    console.log(result)
    
    useEffect(() => {
    }, [result])
    return (
        <>
          <div>
              <h2>Trending</h2>
              <Slider {...settings}>
                   {
                     movies.length > 0 
                     ? (
                         movies.map((movie) => {
                             return (
                                 <TrendingMovies key={movie.id} movie={movie}/>
                             )
                         })
                     ) : (<p>no</p>)
                   }
              </Slider>
          </div>
          <div>
              <h2>Feature</h2>
              <Slider {...settings1}>
                   {
                     result.length > 0 
                     ? (
                         result.map((movie) => {
                             return (
                                 <SearchMovies key={movie.id} movie={movie}/>
                             )
                         })
                     ) : (<p>no</p>)
                   }
              </Slider>
          </div>
      
        </>
    )
};

