import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentPage from './containers/DocumentPage';
import ArtboardPage from './containers/ArtboardPage';
import NotFound from './containers/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<DocumentPage />} />
          <Route path='documents/:documentId' element={<DocumentPage />} />
          <Route
            path='documents/:documentId/artboards/:id'
            element={<ArtboardPage />}
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
