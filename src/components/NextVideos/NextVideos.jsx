import './NextVideos.scss';
import { useState } from 'react';

function NextVideos ( { videos } ) {
    return (
      <>
        <section className="next-videos">
            <h3 className="next-videos__header">Next Videos</h3>
                { videos.map((video) => {
                    return (
                        <card className="next-videos__card">
                            <img className="next-videos__poster" key={ video.id } src={ video.image } alt={ video.title } />
                            <h4 className='next-videos__title'>{ video.title }</h4>
                            <p className='next-videos__channel'>{ video.channel }</p>
                        </card>      
                    )
                })}
        </section>
      </>
    );
}

export default NextVideos;