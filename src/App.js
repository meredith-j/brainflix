import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import Video from './components/Video/Video';
import videos from './data/videos.json';

function App() {

  const [ featuredVideo, setFeaturedVideo ] = useState(videos[0])

  console.log(featuredVideo)

  return (
    <>
    <NavBar />
    <Video 
    featuredVideo = { featuredVideo }
    />
    </>
  );
}

export default App;
