import './ErrorPage.scss'
import unicorn from "../../assets/images/unicorn.png"

export default function ErrorPage () {

return (
    <section className="error__page">
        <h1 className="error__heading">Oops! It appears that the page you're looking for doesn't exist.</h1>
        <img src={unicorn} alt="sad unicorn" className='error__image'/>
    </section>
)
}