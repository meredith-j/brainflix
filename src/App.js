import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {  
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/videos/:videoId" element={ <HomePage /> } />
          <Route path="/upload" element={ <UploadPage />} />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;