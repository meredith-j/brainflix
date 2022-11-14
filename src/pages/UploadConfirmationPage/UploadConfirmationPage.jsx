import './UploadConfirmationPage.scss';
import { Link } from 'react-router-dom';
import rainbowImg from '../../assets/images/cartoon-rainbow.png';


export default function UploadConfirmationPage () {
return (
    <section className='confirmed'>
        <img className='confirmed__image' src={ rainbowImg } />
        <h1 className='confirmed__heading'>Your video has been uploaded.</h1>
        <Link to="/"><button className='confirmed__home-button'>Go to Homepage</button></Link>
    </section>
)
}