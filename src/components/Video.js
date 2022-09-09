import React from 'react';
import './style/video.css';
import Navigation from './Navigation';

const Video = () => {

    let id = 'ducbz9dZO2w';

    return (
        <div className="video">
            <Navigation />
            <iframe 
                src={`https://www.youtube.com/watch?v=${id}`} title="video" frameBorder="0">
            </iframe>
        </div>
    );
};

export default Video;