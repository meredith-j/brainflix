import './UploadConfirmationPage.scss';
import { Link } from 'react-router-dom';

export default function UploadConfirmationPage () {

return (
    <section className='confirmed'>
        <h1>Your video has been uploaded.</h1>
        <Link to="/"><button className='confirmed__home-button'>Go to Homepage</button></Link>
    </section>
)
}