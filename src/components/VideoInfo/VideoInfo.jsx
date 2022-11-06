import { useState } from 'react';
import '../VideoInfo/VideoInfo.scss';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

function VideoInfo ( { featuredVideo } ) {

    // this function formats the date so that it appears mm/dd/yyyy as per the mockup
    function formatDate(videoTimestamp) {
       
        const date = new Date(videoTimestamp);

        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        let yyyy = date.getFullYear();

        // adds a "0" ahead of the month if the month is between 1-9
        if (mm < 10) {
            mm = `0${mm}`
        }

        // adds a "0" ahead of the day if the day is between 1-9
        if (dd < 10) {
            dd = `0${dd}`
        }

        const commentDate = `${mm}/${dd}/${yyyy}`;
    
        return commentDate;
    }

    return (
        <>
            <div className='video-info'>
                <h1 className="video-info__title">{ featuredVideo.title }</h1>
                <section className='video-info__info'>
                    <section className='video-info__details'>
                        <p className='video-info__featured'>By { featuredVideo.channel }</p>
                        <p className='video-info__detail'>{ formatDate(featuredVideo.timestamp) }</p>
                    </section>
                    <section className='video-info__details'>
                        <section className='video-info__engagement'>
                            <img className='video-info__views' src={views} />
                            <p className='video-info__detail'>{ featuredVideo.views }</p>
                        </section>
                        <section className='video-info__engagement'>
                            <img className='video-info__likes' src={likes} />
                            <p className='video-info__detail'>{ featuredVideo.likes }</p>
                        </section>
                    </section>
                </section>
                    <p className='video-info__description'> { featuredVideo.description } </p>
                    <p className='video-info__comments'>{ featuredVideo.comments.length } Comments</p>
            </div>
        </>
    )
}

export default VideoInfo