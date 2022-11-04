import './ForumForm.scss';
import imgUser from '../../assets/images/Mohan-muruge.jpg';

function ForumForm () {
    return (
            <section className="forum-form">
                <h2 className="forum-form__heading">Join the Conversation</h2>
                    <div className="forum-form__container">
                        <form id="newComment" className="forum-form__form">
                            <div className="forum-form__image-container">
                                <img className="forum-form__image" src={ imgUser } alt="your profile image" />
                            </div>

                            <div className="forum-form__user-container">
                                <div className="forum-form__comment-container">
                                    <textarea name="comment" id="comment" className="forum-form__draft" placeholder="Add a new comment"></textarea>
                                </div>

                                <div className="forum-form__submit-container">
                                    <button className="comment__submit">Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </section>
    )
}

export default ForumForm;