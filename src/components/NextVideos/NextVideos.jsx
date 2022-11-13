import React from 'react';
import './NextVideos.scss';
import { Link } from 'react-router-dom';


function NextVideos ( { videosList } ) {
    return (
        <>
            <h2 className="next-videos__header">Next Videos</h2>
                { videosList.map((video) => {
                return (
                    <Link className="next-videos" to={`/videos/${video.id}`} key={video.id} >
                        <div className='next-videos__video'>
                            <img className="next-videos__thumbnail" src={ video.image } alt={ video.title } />
                        </div>
                        <div className='next-videos__info'>
                            <h3 className='next-videos__title'>{ video.title }</h3>
                            <p className='next-videos__channel'>{ video.channel }</p>
                        </div>
                    </Link>  
                )
                })}
        </>
    );
}

export default NextVideos;