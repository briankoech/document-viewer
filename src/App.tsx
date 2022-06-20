import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DocumentPage from './containers/DocumentPage';
import ArtboardPage from './containers/ArtboardPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<DocumentPage />} />
          <Route path="documents/1/artboards/1" element={<ArtboardPage />} />
          // add a not found page
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
