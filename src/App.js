import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShipList from './ShipList/ShipList';

function App() {
  return (
    <>
      <div className="App">
        <h1>Starwars starships</h1>
        <Routes>
            <Route path='/' element={< ShipList/>} />
        </Routes>

      </div>
    </>
  );
}

export default App;
