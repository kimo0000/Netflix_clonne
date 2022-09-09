import React from 'react';
import './style/bunner.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../config/Request';
import QuickView from './QuickView';
import {Link} from 'react-router-dom';

const Bunner = () => {

    const [movie, setMovie] = useState([]);
    const [popup, setPopup] = useState(false);

    function HandleClose() {
        popup ? setPopup(false) : setPopup(true);
    } 

    useEffect(() => {
        axios
           .get(requests.fetchTrending)
           .then(res => {
              setMovie(res.data.results[
                Math.floor(Math.random() * res.data.results.length -1)
                ]);
             });
    }, []);
            
    console.log(movie);

   /* const trancText = (string, number) => {
       return string.length > number 
              ? (string.slice(0, number) + '...') 
              : ('No Description'); 
    }*/

    const bunnerStyle = {
       backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
       backgroundSize: 'cover',
       backgroundPosition: 'center center',
    };

    return (
        <div className="bunner" style={bunnerStyle}>
            <div className="bunner_content">
                <h1>{movie.title || movie.original_title || movie.original_name}</h1>
                <div className="bunner_info">
                    <p>
                       {movie.overview}
                    </p>
                    <div className="bunner_buttons">
                        <Link to={`/video/${movie.id}`}>
                        <button>
                            <i className="fa-solid fa-play"></i>
                            Lecture
                        </button>
                        </Link>
                        <button onClick={HandleClose}>
                            <i className="fa-solid fa-circle-info"></i>
                            Plus D'info
                        </button>
                    </div>
            <QuickView HandleClose={HandleClose}
                       popupStatus={popup}
                       movie={movie}
                       bunnerStyle={bunnerStyle}
            />
                </div>
            </div>
        </div>
    );
};

export default Bunner;