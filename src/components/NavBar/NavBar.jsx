import imgLogo from '../../assets/logo/BrainFlix-logo.svg';
import imgUser from '../../assets/images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.scss';

function NavBar() {
    return (
      <>
        <div className='navbar'>
            <section className="navbar__heading">
              {/* this logo links to home page */}
                <Link to="/">
                    <img className="navbar__logo" src={imgLogo} alt="Brainflix logo" />
                </Link>
            </section>
            <section className='navbar__items'>
              <section className='navbar__options'>
                  <input className="navbar__search" id="search" type="text" placeholder="Search" />
                  <Link to="/upload"><button className='navbar__upload'>Upload</button></Link>
              </section>
              <div className='navbar__user-info'>
                  <img className='navbar__user-photo' src={imgUser} alt="Mohan Muruge" />
              </div>
            </section>
        </div>
      </>
    );
  }

export default NavBar;