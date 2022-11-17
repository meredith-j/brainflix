import './Forum.scss';
import ForumForm from '../ForumForm/ForumForm';
import formatDate from '../../utilities/formatDate';

function Forum ( { featuredVideo } ) {

    return (
        <>
        <ForumForm />
        { featuredVideo.comments.map((comment) => {
            // the above function accesses the array of comments from the array of movie details
            return (
                <div className='forum' key={ comment.id }>
                    <article className="forum__container">
                        <div className='forum__image'>
                            <div className='forum__photo' alt={ comment.name }></div>
                        </div>
                        <div className='forum__details'>
                            <div className='forum__name-date'>
                                <p className='forum__name'>{ comment.name }</p>
                                <p className='forum__date'>{ formatDate(comment.timestamp) }</p>
                            </div>
                            <div className='forum__details'>
                                <p className='forum__comment'>{ comment.comment }</p>
                            </div>
                        </div>
                    </article>
                </div>
            )
        })}
        </>
    )
}

export default Forum;