import imgLogo from '../../assets/logo/BrainFlix-logo.svg';
import App from '../../App';
import imgUser from '../../assets/images/Mohan-muruge.jpg';
import '../NavBar/NavBar.scss';

function NavBar() {
    return (
      <>
        <div className='navigation'>
            <section className="nav">
                <a className='nav__link' href={App}>
                    <img className="nav__logo" src={imgLogo} alt="Your profile picture" />
                </a>
            </section>
            <section className='nav__options'>
                <input className="nav__search" id="search" type="text" placeholder="Search" />
                <button className='nav__upload'>Upload</button>
            </section>
            <div className='nav__user-info'>
                <img className='nav__user-photo' src={imgUser}/>
            </div>
        </div>
      </>
    );
  }

export default NavBar;