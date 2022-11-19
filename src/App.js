import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import VideoPlayerPage from './pages/VideoPlayerPage/VideoPlayerPage';
import UploadPage from './pages/UploadPage/UploadPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import UploadConfirmationPage from './pages/UploadConfirmationPage/UploadConfirmationPage';

function App() {  
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={ <VideoPlayerPage />} />
          <Route path="/videos/:videoId" element={ <VideoPlayerPage /> } />
          <Route path="/upload" element={ <UploadPage />} />
          <Route path="/upload-confirmed" element={ <UploadConfirmationPage />} />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;