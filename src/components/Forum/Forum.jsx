import './Forum.scss';
import ForumForm from '../ForumForm/ForumForm';

function Forum ( { featuredVideo } ) {


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
        <ForumForm />
        { featuredVideo.comments.map((comment) => {

/*            comment.sort(function(x, y) {
                return new Date(y.timestamp) - new Date(x.timestamp);
            })
*/    
            return (
                <article className="forum-comment__card" key={ comment.id }>
                    <div className='forum-comment__image'>
                        <img className="forum-comment_photo" alt={ comment.name } />
                    </div>
                    <div className='forum-comment__name-date'>
                        <p className='forum-comment__name'>{ comment.name }</p>
                        <p className='forum-comment__date'>{ formatDate(comment.timestamp) }</p>
                    </div>
                    <div className='forum-comment__details'>
                        <p className='forum-comment__comment'>{ comment.comment }</p>
                    </div>
                </article>      
            )
        })}
        </>
    )
}

export default Forum;