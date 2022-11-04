import './App.scss';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import Forum from './components/Forum/Forum';
import NextVideos from './components/NextVideos/NextVideos';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';

function App() {

  const [ featuredVideo, setFeaturedVideo ] = useState(videoDetails[0])


  function changeFeaturedVideo (videoId) {
    const selectedVideo =  videoDetails.find((video)=>{
      return videoId === video.id
    })
    setFeaturedVideo(selectedVideo)
  }

  const removeSelectedVideo =  videos.find((video)=>{
    return video.id === featuredVideo.id
  })

  const videosCopy = [...videos]
  videosCopy.splice(videosCopy.indexOf(removeSelectedVideo), 1)

  return (
    <>
    <NavBar />
    <Video 
    featuredVideo = { featuredVideo }
    />
    <VideoInfo 
    featuredVideo= { featuredVideo }
    />
    <Forum 
    featuredVideo = { featuredVideo }
    />
    <NextVideos 
    videos = { videosCopy }
    changeFeaturedVideo = { changeFeaturedVideo}
    />
    </>
  );
}

export default App;