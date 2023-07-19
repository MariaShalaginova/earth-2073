import './index.css';
import {Routes, Route } from 'react-router-dom';
import BankPage from '../src/components/bank-page/BankPage';
import React from 'react';
import Game from './components/game/Game';

function App() {


  return (
    <div className="wrapper">
  <Routes>
    <Route exact path="/" element={<BankPage />} /> 
    <Route path="/game" element={<Game />} /> 
  </Routes> 
    </div>
  );
};

export default App;
