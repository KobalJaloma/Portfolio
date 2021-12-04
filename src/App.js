import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Cards from "./components/cards"

function App() {
  return (
  <Router>
    <div class="app">
        <div class="title">
          <h1>Kobal Soft</h1>
          <h3>Software Developer</h3>
        </div>
        <Routes>
          <Route path="/" element={<Cards/>}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
