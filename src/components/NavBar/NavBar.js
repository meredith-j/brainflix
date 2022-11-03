import imgLogo from '../../assets/logo/BrainFlix-logo.svg';
import App from '../../App';
import imgUser from '../../assets/images/Mohan-muruge.jpg';
import '../NavBar/_NavBar.scss';

function NavBar() {
    return (
      <>
        <section className="nav">
            <a className='nav__link' href={App}>
                <img className="nav__logo" src={imgLogo}/>
            </a>
        </section>
        <section className='nav__options'>
            <input type="text" placeholder="Search.." />
            <button className='nav__upload'>Upload</button>
        </section>
        <div className='nav__user-info'>
            <img className='nav__user-photo' src={imgUser}/>
        </div>
      </>
    );
  }

export default NavBar;