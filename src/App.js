import React from 'react';
import Navigation from './components/Navigation';
import Bunner from './components/Bunner';
import Rows from './components/Rows';
import Footer from './components/Footer';
import requests from './config/Request';
import {Routes, Route} from 'react-router-dom';
import Video from './components/Video';
import Eror from './components/Eror';

const App = () => {

  return (
    <div className="container">
        <Routes>
          <Route path='/' element={
            <>
              <Navigation />
              <Bunner />
              <Rows title={"Programme Origineaux Netflix"} fetchUrl={requests.fetchNetflixOriginals}/>
              <Rows title={"Tendence Actuelle"} fetchUrl={requests.fetchTrending} isPoster={true}/>
              <Rows title={"Film De Horror"} fetchUrl={requests.fetchTrending}/>
              <Footer />
            </>
          }
          />        
          <Route path='/video/:id' element={<Video />}/> 
          <Route path='*' element={<Eror />}/> 
        </Routes>
    </div>
  );
};

export default App;
