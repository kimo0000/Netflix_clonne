import React from 'react';
import './style/rows.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Rows = ({title, fetchUrl, isPoster}) => {

   const [movies, setMovies] = useState([]);

   useEffect(() => {
       axios
         .get(fetchUrl)
         .then(response => {
             setMovies(response.data.results);
         })

   }, [fetchUrl]);

   //console.log(movies);

    return (
        <div className="rows">
            <h2>{title}</h2>
            <div className="row_images">
                {
                    movies.map((movie) => 
                         <div className="row_image"  key={movie.id}>
                         {
                            <img src={isPoster ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` 
                                               : `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                     }
                                 alt={movie.title || movie.name || movie.original_title} />
                         } 
                         </div>
                      )
                }
            </div>
        </div>
    );
};

export default Rows;