import './NextVideos.scss';
import { Link } from 'react-router-dom';

function NextVideos ( { videos, changeFeaturedVideo } ) {

    return (
      <>
        <section className="next-videos">
            <h2 className="next-videos__header">Next Videos</h2>
                { videos.map((video) => {
                    return (
                        <Link to={`/video/${video.id}`} className="next-videos__card" key={ video.id }>
                            <div className='next-videos__video'>
                                <img className="next-videos__thumbnail" key={ video.id } src={ video.image } alt={ video.title } />
                            </div>
                            <div className='next-videos__info'>
                                <h3 className='next-videos__title'>{ video.title }</h3>
                                <p className='next-videos__channel'>{ video.channel }</p>
                            </div>  
                        </Link>
                    )
                })}
        </section>
      </>
    );
}

export default NextVideos;