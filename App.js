import './App.css';

import React from 'react';
import Rows from './Rows';
import requests from './requests';
import Banner from './Banner';
function App() {
  return (
    <div className="App">
       <header>
            <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
       </header>
     <div className="row">
      <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} islarge={true}></Rows>
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} ></Rows>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} ></Rows>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} ></Rows>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} ></Rows>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} ></Rows>
      <Rows title="Documentaries" fetchUrl={requests.fethDocumantries} ></Rows>
      <Rows title="Documentaries" fetchUrl={requests.fethDocumantries} ></Rows>
      </div>
    </div>
  );
}

export default App;
