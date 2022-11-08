  // this specifies what video will be playing when users navigate to the main page
  const [ featuredVideo, setFeaturedVideo ] = useState(videoDetails[0])

  // in future sprints: we will need to add setVideoObjects to the below const
  const [ videoObjects ] = useState(videos)

  //the below functions tell the two different data files to match whichever video is featured/playing and to remove it from the next videos list
  function changeFeaturedVideo (videoId) {
    const selectedVideo =  videoDetails.find((video)=>{
      return videoId === video.id
    })
    setFeaturedVideo(selectedVideo)
  }

  const removeSelectedVideo =  videoObjects.find((video)=>{
    return video.id === featuredVideo.id
  })

  // this part of the function removes (splices) the featured video from the next videos list  
  const videosCopy = [...videoObjects]
  videosCopy.splice(videosCopy.indexOf(removeSelectedVideo), 1)
