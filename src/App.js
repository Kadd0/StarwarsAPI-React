import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';
import InputContext from './context/InputContext';
import Intro from './components/Intro';
import './App.css';

function App() {

  const [searchValue, setSearchValue] = useState(''); // Create a state for the search value
  const [showIntro, setShowIntro] = useState(true); // Create a state for the intro screen

  const contextValue = {  
    searchValue,
    setSearchValue,
  };

  const handleSkip = () => {  // Create a function to handle the skip button
    setShowIntro(false); // Set the showIntro state to false
  };

  return (
    <InputContext.Provider value={contextValue}> 
      {showIntro ? (
        <Intro onSkip={handleSkip} />
      ) : (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Cards />} />
              <Route path="/CardDetails/:name" element={<CardDetails />} />
            </Routes>
          </Router>
        </div>
      )}
    </InputContext.Provider>
  );
}

export default App;
