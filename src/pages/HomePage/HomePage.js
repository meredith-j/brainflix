
export default function HomePage () {

    return(
        <>
        <NavBar />
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
        changeFeaturedVideo = { changeFeaturedVideo}
        />
        </div>
        </section>
        </>
    )
}