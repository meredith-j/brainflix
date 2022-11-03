import imgLogo from '../../assets/logo/BrainFlix-logo.svg';
import '../NavBar/_NavBar.scss';
import App from '../../App';
import imgUser from '../../assets/images/Mohan-muruge.jpg';

function NavBar() {
    return (
      <>
        <section className="nav">
            <a className='nav__link' src={App}>
                <img className="nav__logo" src={imgLogo}/>
            </a>
        </section>
        <section className='nav__options'>
            <input type="text" placeholder="Search.." />
            <button className='nav__upload'>Upload</button>
        </section>
        <section className='nav__user-info'>
            <img className='nav__user-photo' src={imgUser}/>
        </section>
      </>
    );
  }

export default NavBar;