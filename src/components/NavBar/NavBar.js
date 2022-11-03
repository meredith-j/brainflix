import imgLogo from '../../assets/logo/BrainFlix-logo.svg';
import '../NavBar/_NavBar.scss';
import App from '../../App';

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
      </section>
      </>
    );
  }

export default NavBar;