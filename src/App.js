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
  //in future sprints: we will need to add setVideoObjects to the below const
  const [ videoObjects ] = useState(videos)

  function changeFeaturedVideo (videoId) {
    const selectedVideo =  videoDetails.find((video)=>{
      return videoId === video.id
    })
    setFeaturedVideo(selectedVideo)
  }

  const removeSelectedVideo =  videoObjects.find((video)=>{
    return video.id === featuredVideo.id
  })

  const videosCopy = [...videoObjects]
  videosCopy.splice(videosCopy.indexOf(removeSelectedVideo), 1)

  return (
    <>
    <NavBar />
    <Video 
    featuredVideo = { featuredVideo }
    />
    <section className='main__written-content'>
    <div className='main__section'>
    <VideoInfo 
    featuredVideo= { featuredVideo }
    />
    <Forum 
    featuredVideo = { featuredVideo }
    />
    </div>
    <div className='main__sidebar'>
    <NextVideos 
    videos = { videosCopy }
    changeFeaturedVideo = { changeFeaturedVideo}
    />
    </div>
    </section>
    </>
  );
}

export default App;