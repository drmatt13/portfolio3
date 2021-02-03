import { useEffect, useRef, memo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { openNav, closeNav } from '../../actions/globalActions';

// css
import '../css/NavBar.css';

// images
import logo from '../images/react.png';
import modalBackground from '../images/modalBackground.jpg';

//redux
import { connect } from 'react-redux';

const NavBar = memo(({global: {navOpen, logoTransparent}}) => {

  const logoRef = useRef(null);
  const navRef = useRef(null);

  const initialLocation = useLocation().pathname.split('/')[1];
  const initialLogoTranspacity = ["social", "shop"].includes(initialLocation) ? "NAV-logo NAV-logo-opacity" : "NAV-logo";

  // fix and rename later
  const testScroll = () => {
    // if (initialLogoTranspacity) when i get to social fix this
    // console.log(window.scrollY);
    if (window.scrollY === 0) logoRef.current.classList.remove("NAV-logo-opacity");
    else logoRef.current.classList.add("NAV-logo-opacity");
  }

  useEffect(() => {
    if (navOpen) {
      logoRef.current.classList.add("NAV-hide-logo");
      navRef.current.classList.add("NAV-show-modal-main");
    } else {
      logoRef.current.classList.remove("NAV-hide-logo");
      navRef.current.classList.remove("NAV-show-modal-main");
    }

    if (logoTransparent) {
      logoRef.current.classList.add("NAV-logo-opacity");
    } else {
      logoRef.current.classList.remove("NAV-logo-opacity");
    }

    document.addEventListener('scroll', testScroll);
    return () => {
      document.removeEventListener('scroll', testScroll);
    }

  });

  return (
    <>
      <div className="NAV-header">
        <div className={initialLogoTranspacity} ref={logoRef}>
          <img src={logo} alt="logo" onClick={openNav} />
        </div>
      </div>

      <nav className="NAV-modal-container" ref={navRef} style={{
            backgroundImage: 'url("/images/background1.jpg")'
          }}>


        <div className="NAV-modal-background" >
          <img src={modalBackground} alt="modal background"/>
          <div className="NAV-user-img-container">
            {/* <NavBarPicture image={image} /> */}
          </div>

        </div>


          <div className="NAV-links-container">
            <div className="NAV-link">
              <Link to="/" onClick={closeNav}>Home</Link>
            </div>
            <div className="NAV-link">
              <Link to="/notes" onClick={closeNav}>Notes</Link>
            </div>
            <div className="NAV-link">
              <Link to="/apps" onClick={closeNav}>Apps</Link>
            </div>
            <div className="NAV-link">
              <Link to="/social" onClick={closeNav}>Social</Link>
            </div>
            <div className="NAV-link">
              <Link to="/shop" onClick={closeNav}>Shop</Link>
            </div>
            <div className="NAV-link">
              <div className="NAV-fake-link" onClick={closeNav}>Contact</div>
            </div>
            <div className="NAV-link">
              <Link to="/about" onClick={closeNav}>About</Link>
            </div>
          </div>





        <div className="NAV-exit" onClick={closeNav}>
          <i className="fas fa-times-circle" />
        </div>

      </nav>
    </>
  )
});

const mapStateToProps = state => ({
  global: state.global
});

export default connect(mapStateToProps)(NavBar);

