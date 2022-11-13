import './UploadPage.scss';
import { Link } from 'react-router-dom';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';

export default function UploadPage () {

    return (
        <section className='upload'>
            <h1 className='upload__header'>Upload Video</h1>
            <div className='upload__sections'>
                <div className='upload__section upload__section--thumbnail'>
                    <h4 className='upload__type'>Video Thumbnail</h4>
                    <img className='upload__thumbnail' src={ thumbnail } alt="Your video's thumbnail" />
                </div>
                <div className='upload__form'>
                    <div className='upload__section'>
                        <h4 className='upload__type'>Title your video</h4>
                        <input className="upload__title" id="title" type="text" placeholder="Add a title to your video" />
                    </div>
                    <div className='upload__section'>
                        <h4 className='upload__type'>Add a video description</h4>
                        <textarea name="description" id="description" className="upload__description" placeholder="Add a description to your video"></textarea>
                    </div>
                </div>
            </div>
            <div className='upload__options'>
                <Link to="/upload-confirmed"><button className="upload__submit">Publish</button></Link>
                <Link to="/"><button className="upload__cancel">Cancel</button></Link>
            </div>
        </section>
    )
}