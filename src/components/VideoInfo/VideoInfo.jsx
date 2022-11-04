import { useState } from 'react';
import '../VideoInfo/VideoInfo.scss';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

function VideoInfo ( { featuredVideo } ) {

    function formatDate(videoTimestamp) {
       
        const date = new Date(videoTimestamp);

        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        let yyyy = date.getYear();

        if (mm < 10) {
            mm = `0${mm}`
        }

        if (dd < 10) {
            dd = `0${dd}`
        }

        const commentDate = `${mm}/${dd}/${yyyy}`;
    
        console.log(commentDate);

        return commentDate;
    }

    return (
        <>
            <div className='video-info'>
                <h1 className="video-info__title">{ featuredVideo.title }</h1>
                <section className='video-info__details'>
                    <section className='video-info__post-info'>
                        <p className='video-info__channel'>{ featuredVideo.channel }</p>
                        <p className='video-info__date'>{ formatDate(featuredVideo.timestamp) }</p>
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

export default VideoInfo