import React from 'react';
import {Link} from 'react-router-dom';
import './style/eror.css';

const Eror = () => {
    return (
        <div className="eror">
           <Link to='*'>
              <p>not found 404</p>
           </Link>
        </div>
    );
};

export default Eror;