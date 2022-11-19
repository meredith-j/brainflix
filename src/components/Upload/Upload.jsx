import './Upload.scss';
import {  useNavigate } from 'react-router-dom';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';

export default function UploadPage () {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();


        const form = event.target;

        const title = form.title.value
        const description = form.title.description

        if (title === "" || description === "") {
            alert("All form fields are required")

            return;
        }

        navigate("/upload-confirmed");

    }

    const handleCancel = (event) => {
        navigate("/");
    }

    return (
        <section className='upload'>
            <h1 className='upload__header'>Upload Video</h1>
            <div className='upload__sections'>
                <div className='upload__section upload__section--thumbnail'>
                    <h4 className='upload__type'>Video Thumbnail</h4>
                    <img className='upload__thumbnail' src={ thumbnail } alt="Your video's thumbnail" />
                </div>
                <form className='upload__form' onSubmit={handleSubmit}>
                    <div className='upload__section'>
                        <h4 className='upload__type'>Title your video</h4>
                        <input name="title" id="title" type="text" className="upload__title" placeholder="Add a title to your video" />
                    </div>
                    <div className='upload__section'>
                        <h4 className='upload__type'>Add a video description</h4>
                        <textarea name="description" id="description" className="upload__description" placeholder="Add a description to your video"></textarea>
                    </div>
                    <div className='upload__options'>
                        <button type="submit" className="upload__submit">Publish</button>
                        <button type="cancel" onClick={handleCancel} className="upload__cancel">Cancel</button>
                    </div>
                </form>
            </div>
        </section>
    )
}