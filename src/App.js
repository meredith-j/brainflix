import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

function App() {

  const [ featuredVideo, setFeaturedVideo ] = useState(videoDetails[0])


  return (
    <>
    <NavBar />
    <Video 
    featuredVideo = { featuredVideo }
    />
    <VideoInfo 
    featuredVideo= { featuredVideo }
    />
    </>
  );
}

export default App;
