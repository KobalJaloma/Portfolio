import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Cards from "./pages/cards";
import Proyects from './pages/proyects';

function App() {
  return (
  <Router>
    <div className="app">
        <Routes>
          <Route path="/" element={<Cards/>}/>
          <Route path="/Proyects" element={<Proyects/>}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
