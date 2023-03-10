import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Barra = () => {
  return (
    <Navbar className='barra' bg="success" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Link to="/"><Navbar.Brand>Home</Navbar.Brand></Link>
            <Link to="/favoritos"><Navbar.Brand>Favoritos</Navbar.Brand></Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Barra