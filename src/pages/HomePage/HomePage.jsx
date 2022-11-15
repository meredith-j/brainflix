import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Forum from "../../components/Forum/Forum";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import './HomePage.scss';


export default function HomePage () {

  const { videoId } = useParams()

  // sets the video information that displays 
  const [ videosList, setVideosList ] = useState(null)

  // this specifies what video will be playing when users navigate to the main page
  const [ featuredVideo, setFeaturedVideo ] = useState(null)
  
  useEffect(()=>{
    axios.get("https://project-2-api.herokuapp.com/videos/?api_key=9c2a3d3c-5ac4-455e-bbd5-e111b0e57936")
    .then((response) => {
      setVideosList(response.data)
      window.scrollTo(0, 0)
      const id = videoId || response.data[0].id
      return axios.get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=9c2a3d3c-5ac4-455e-bbd5-e111b0e57936`)
      })
      .then(response => {
        setFeaturedVideo(response.data)
    })

  },[videoId])




  if(!videosList || !featuredVideo){
    return <h1 className="loading__text">loading...</h1>
  }

const filteredVideos = videosList.filter((video) => video.id !== featuredVideo.id);

    return (
        <>
        <Video 
        featuredVideo = { featuredVideo }
        />
        {/* the sections/divs here help us style our website for the desktop view -- we are using flexbox to move the next videos section up beside the current video info & comments section */}
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
        videosList = { filteredVideos }
        />
        </div>
        </section>
        </>
    )
}