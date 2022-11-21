import './Upload.scss';
import {  useNavigate } from 'react-router-dom';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import axios from "axios";

export default function UploadPage () {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // specify form target
        const form = event.target;

        const title = form.title.value;
        const image = form.image.src;
        const description = form.description.value;

        if (title === "" || description === "") {
            alert("All form fields are required")

            return;
        }

        axios
        .post("http://localhost:8080/videos", {
            title: title,
            image: image,
            description: description
        })
        .then((response) => {
            navigate("/upload-confirmed");
        })
        .catch((error) => {
            alert("Uh oh! Looks like something went wrong. Please try again later.");     
        })

    }

    const handleCancel = (event) => {
        navigate("/");
    }

    return (
        <section className='upload'>
            <h1 className='upload__header'>Upload Video</h1>
            <form className='upload__sections' onSubmit={handleSubmit}>
                <div className='upload__section upload__section--thumbnail'>
                    <h4 className='upload__type'>Video Thumbnail</h4>
                    <img name="image" className='upload__thumbnail' src={ thumbnail } alt="Your video's thumbnail" />
                </div>
                <div className='upload__form'>
                    <div className='upload__section'>
                        <label className='upload__type'>Title your video</label>
                        <input name="title" id="title" type="text" className="upload__title" placeholder="Add a title to your video" />
                    </div>
                    <div className='upload__section'>
                        <label className='upload__type'>Add a video description</label>
                        <textarea name="description" id="description" className="upload__description" placeholder="Add a description to your video"></textarea>
                    </div>
                    <div className='upload__options'>
                        <button type="submit" className="upload__submit">Publish</button>
                        <button type="cancel" onClick={handleCancel} className="upload__cancel">Cancel</button>
                    </div>
                </div>
            </form>
        </section>
    )
}