import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Foto from './Foto';
import MiContexto from '../Contexts/MiContexto.jsx';

const Galeria = ({fav = false}) => {
    const {fotos} = useContext(MiContexto);

  return (
    <Container>
      <Row className='mt-4'>
         {fotos.filter((f) => {
            if(fav){
                return f.liked?f:null;
            } else{
                return f;
            }
         }).map((f) => {
          return <Col key={f.id} md={4} xs={12} sm={6} lg={3}className="imagenes"><Foto fav={fav} foto={f}></Foto></Col>
      })}
      </Row>
    </Container>
  )
}

export default Galeria