import { Container, Navbar } from 'react-bootstrap';
import logo from '/vite.svg';
import '../../assets/styles/navbar.css';

const TopNavigation = () => {
  return (
    <>
      <Navbar
        expand
        expanded
        sticky="top"
        className="transparent navbar-inverse"
      >
        <Container className="navbar-container__items">
          <Navbar.Brand href="#home" className="navbar-brand__text">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />{' '}
            MYNote
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavigation;
