import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { BsFillHeartFill } from "react-icons/bs";
import MiContexto from '../Contexts/MiContexto.jsx';

const Foto = ({fav, foto}) => {

    const {fotos, setFotos} = useContext(MiContexto);
    const setFavorito = (id) =>{
        const fotoConClick = fotos.findIndex((f) => f.id === id);
        fotos[fotoConClick].liked = !fotos[fotoConClick].liked;
        setFotos([...fotos])
    }

  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={foto.src.original} style={{ height: '220px'}} />
    <strong><p className='texto'>{foto.alt}</p></strong>
    {!fav && <Button onClick={() => setFavorito(foto.id)} className='boton' variant= "light"><BsFillHeartFill style={{color:foto.liked?"red":"white"}} className='corazon'></BsFillHeartFill></Button>}
    </Card>
  )
}

export default Foto