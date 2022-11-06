import imgLogo from '../../assets/logo/BrainFlix-logo.svg';
import imgUser from '../../assets/images/Mohan-muruge.jpg';
import '../NavBar/NavBar.scss';

function NavBar( { App } ) {
    return (
      <>
        <div className='navbar'>
            <section className="navbar__heading">
              {/* this logo links to home page */}
                <a className='navbar__link' href="/">
                    <img className="navbar__logo" src={imgLogo} alt="Your profile picture" />
                </a>
            </section>
            <section className='navbar__items'>
              <section className='navbar__options'>
                  <input className="navbar__search" id="search" type="text" placeholder="Search" />
                  <button className='navbar__upload'>Upload</button>
              </section>
              <div className='navbar__user-info'>
                  <img className='navbar__user-photo' src={imgUser}/>
              </div>
            </section>
        </div>
      </>
    );
  }

export default NavBar;