import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Forum from "../../components/Forum/Forum";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from 'react';
import videos from '../../data/videos.json';
//import videoDetails from '../../data/video-details.json';
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function HomePage () {

  const { id } = useParams();

  const videoDetailsUrl ='https://project-2-api.herokuapp.com/videos/?api_key=9c2a3d3c-5ac4-455e-bbd5-e111b0e57936';
  const videosUrl = `https://project-2-api.herokuapp.com/videos/${id}?api_key=9c2a3d3c-5ac4-455e-bbd5-e111b0e57936`;

  // this specifies what video will be playing when users navigate to the main page
  const [ featuredVideo, setFeaturedVideo ] = useState([])

  // sets the video information that displays 
  // const [ videoObjects ] = useState(videos);

  useEffect (() => {
    axios.get(videoDetailsUrl)
    .then((response) => {
      if (id === "") {
      return featuredVideo;
    }
    })}, []);

  console.log(featuredVideo);

  //the below functions tell the two different data files to match whichever video is featured/playing and to remove it from the next videos list
  useEffect(() => {
      axios.get(videosUrl)
      .then((response) => {
        setFeaturedVideo(response.data);
    }
  )}, [id])

  const removeSelectedVideo =  videoObjects.find((video)=>{
    return video.id === id
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