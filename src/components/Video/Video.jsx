import { useState } from 'react';
import '../Video/Video.scss';

function Video ( { featuredVideo } ) {
    return (
        <>
            <div className='video'>
                <video className='video__featured' controls poster={ featuredVideo.image } alt={ featuredVideo.title } type="image/jpg">
                </video>
            </div>
        </>
    )
}

 export default Video;