import React from 'react';
import './style/quickView.css';

const QuickView = ({popupStatus, movie, bunnerStyle, HandleClose }) => {
    return (
        <div className={`quick_view ${popupStatus && 'open'}`} style={bunnerStyle}>
          <button className="quick_close" onClick={HandleClose}>X</button>
          <div className="quick_content">
            <h1>{movie.title || movie.original_title || movie.original_name}</h1>
            <p className="quick_info">
                {movie.overview}
            </p>
          </div>
        </div>
    );
};

export default QuickView;