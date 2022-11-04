import './NextVideos.scss';
import { useState } from 'react';

function NextVideos ( { videos, changeFeaturedVideo } ) {

    return (
      <>
        <section className="next-videos">
            <h3 className="next-videos__header">Next Videos</h3>
                { videos.map((video) => {
                    return (
                        <article onClick={()=>{ return changeFeaturedVideo(video.id)}} className="next-videos__card" key={ video.id }>
                            <img className="next-videos__poster" key={ video.id } src={ video.image } alt={ video.title } />
                            <h4 className='next-videos__title'>{ video.title }</h4>
                            <p className='next-videos__channel'>{ video.channel }</p>
                        </article>      
                    )
                })}
        </section>
      </>
    );
}

export default NextVideos;