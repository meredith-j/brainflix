import './App.scss';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

function App() {

  
  
  return (
    <>
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/upload" element={ <UploadPage />} />
          <Route path="/video/:id" element={ <HomePage /> } />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;