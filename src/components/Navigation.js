import React from 'react';
import './style/navigation.css';
import { useState } from 'react';


const Navigation = () => {

    const [navBlack, setNavBlack] = useState(false);
    const [showLinks, setShowLinks] = useState(false);
    
//Style Navigation Black
    const transNavBlack = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
    }

    useState(() => {
        document.addEventListener('scroll', transNavBlack);
    })

//Show Links
const HandleShowLinks = () => {
    showLinks ? setShowLinks(false) : setShowLinks(true);
}

    return (
        <nav className={`navigation ${navBlack || showLinks ? "nav_black" : ''}`}>
            <div className="burger_logo">
                <i className="fa-solid fa-bars menu" onClick={HandleShowLinks}></i>
                 <img src="./imgs/netflix_icon.jpg" alt="" />
            </div>
            <div className={`links ${showLinks && 'show_links'}`}>
                <a href="/">Acceill</a>
                <a href="/">Series</a>
                <a href="/">Films</a>
            </div>
            <div className="actions">
                <a href="/"><i className="fa-solid fa-magnifying-glass"></i></a>
                <a href="/">DIRECT</a>
                <a href="/"><i className="fa-solid fa-gift"></i></a>
                <a href="/"><i className="fa-solid fa-face-frown-open"></i></a>
            </div>
        </nav>
    );
};

export default Navigation;