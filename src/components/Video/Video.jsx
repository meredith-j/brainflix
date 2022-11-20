import '../Video/Video.scss';

// this is for the featured vide only. the next videos are displayed in "NextVideos"
function Video ( { featuredVideo } ) {
    return (
            <div className='video'>
                <video className='video__selected' controls poster={ featuredVideo.image } alt={ featuredVideo.title } type="image/jpg">
                </video>
            </div>
    )
}

 export default Video;