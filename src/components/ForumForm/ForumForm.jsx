import './ForumForm.scss';
import imgUser from '../../assets/images/Mohan-muruge.jpg';

function ForumForm () {
    return (
            <section class="forum-form">
                <h2 class="forum-form__heading">Join the Conversation</h2>
                    <div class="forum-form__container">
                        <form id="newComment" class="forum-form__form">
                            <div class="forum-form__image-container">
                                <img class="forum-form__image" src={ imgUser } alt="your profile image" />
                            </div>

                            <div class="forum-form__user-container">
                                <div class="forum-form__comment-container">
                                    <textarea name="comment" id="comment" class="forum-form__draft" placeholder="Add a new comment"></textarea>
                                </div>

                                <div class="forum-form__submit-container">
                                    <button class="comment__submit">Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </section>
    )
}

export default ForumForm;