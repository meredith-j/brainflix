import { useState } from 'react';
import '../VideoInfo/VideoInfo.scss';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

function VideoInfo ( { featuredVideo } ) {
    return (
        <>
            <div className='video-info'>
                <h1 className="video-info__title">{ featuredVideo.title }</h1>
                <section className='video-info__details'>
                    <section className='video-info__post-info'>
                        <p className='video-info__channel'>{ featuredVideo.channel }</p>
                        <p className='video-info__date'>{ new Date(featuredVideo.timestamp).toLocaleDateString() }</p>
                    </section>
                    <section className='video-info__engagement'>
                        <section className='video-info__views'>
                            <img className='video-info__icon' src={views} />
                            <p className='video-info__data'>{ featuredVideo.views }</p>
                        </section>
                        <section className='video-info__likes'>
                            <img className='video-info__icon' src={likes} />
                            <p className='video-info__data'>{ featuredVideo.likes }</p>
                        </section>
                    </section>
                    <p className='video-info__description'> { featuredVideo.description } </p>
                </section>
            </div>
        </>
    )
}

export default VideoInfo;