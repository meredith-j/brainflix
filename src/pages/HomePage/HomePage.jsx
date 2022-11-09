import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Forum from "../../components/Forum/Forum";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState } from 'react';
import videos from '../../data/videos.json';
import videoDetails from '../../data/video-details.json';
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function HomePage () {

  // this specifies what video will be playing when users navigate to the main page
  const [ featuredVideo, setFeaturedVideo ] = useState(videoDetails[0])

  // sets the video information that displays 
  const [ videoObjects ] = useState(videos)

  const { videoId } = useParams();

  //the below functions tell the two different data files to match whichever video is featured/playing and to remove it from the next videos list
     setFeaturedVideo(videoDetails.find((video)=>{
       return videoId === video.id
     }))

  const removeSelectedVideo =  videoObjects.find((video)=>{
    return video.id === videoId
  })

  // this part of the function removes (splices) the featured video from the next videos list  
  const videosCopy = [...videoObjects]
  videosCopy.splice(videosCopy.indexOf(removeSelectedVideo), 1)

    return (
        <>
        <Video 
        featuredVideo = { featuredVideo }
        />
        {/* the sections/divs here help us style our website for the desktop view -- we are using flexbox
        to move the next videos section up beside the current video info & comments section */}
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
        />
        </div>
        </section>
        </>
    )
}