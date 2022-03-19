import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShipList from './ShipList/ShipList';
import StarshipDetails from './Starship-Details/Starship-Details';


function App() {
  
  return (
    <>
      <div className="App">
        <h1>Starwars starships</h1>
        <Routes>
            <Route path='/' element={< ShipList/>} />
            <Route path='/starship' element={< StarshipDetails/>} />
        </Routes>

      </div>
    </>
  );
}

export default App;
