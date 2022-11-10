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



  // NEWER CODE

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
