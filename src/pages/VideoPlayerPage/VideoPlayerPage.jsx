import './VideoPlayerPage.scss';
import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Forum from "../../components/Forum/Forum";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage () {

  const { videoId } = useParams()

  // sets the video information that displays 
  const [ videosList, setVideosList ] = useState(null)

  // this specifies what video will be playing when users navigate to the main page
  const [ featuredVideo, setFeaturedVideo ] = useState(null)
  
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:8080/videos")
    .then((response) => {
      setVideosList(response.data)
      window.scrollTo(0, 0)
      const id = videoId || response.data[0].id
      return axios.get(`http://localhost:8080/videos/${id}`)
      })
      .then(response => {
        setFeaturedVideo(response.data)
    })
    .catch((error) => {
      navigate("/*")
    })

  },[videoId, navigate])

  if(!videosList || !featuredVideo){
    return <h1 className="loading__text">Loading...</h1>
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