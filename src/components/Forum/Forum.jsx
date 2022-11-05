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

        console.log(yyyy)

        const commentDate = `${mm}/${dd}/${yyyy}`;
    
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
                <article className="forum__card" key={ comment.id }>
                    <div className='forum__image'>
                    </div>
                    <div className='forum__name-date'>
                        <p className='forum__name'>{ comment.name }</p>
                        <p className='forum__date'>{ formatDate(comment.timestamp) }</p>
                    </div>
                    <div className='forum__details'>
                        <p className='forum__comment'>{ comment.comment }</p>
                    </div>
                </article>      
            )
        })}
        </>
    )
}

export default Forum;