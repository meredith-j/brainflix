import './Forum.scss';
import ForumForm from '../ForumForm/ForumForm';

function Forum ( { featuredVideo } ) {


    function formatDate(videoTimestamp) {
       
        const date = new Date(videoTimestamp);

        let mm = date.getMonth() + 1; // Months start at 0!
        let dd = date.getDate();
        let yyyy = date.getFullYear();

        if (mm < 10) {
            mm = `0${mm}`
        }

        if (dd < 10) {
            dd = `0${dd}`
        }

        const commentDate = `${mm}/${dd}/${yyyy}`;
    
        return commentDate;
    }

    return (
        <>
        <ForumForm />
        { featuredVideo.comments.map((comment) => {
               
            return (
                <div className='forum'>
                    <article className="forum__container" key={ comment.id }>
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