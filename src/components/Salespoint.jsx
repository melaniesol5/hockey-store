import {Card} from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../css/Item.css';

export default function Salespoint(sp){
    
    return(
      <>
        <div className="item" key={sp.id}>
        <Card  style={{ width: '40rem' }}>
        <Card.Body>
            <Card.Title>{sp.title}</Card.Title>
            <img src={sp.image} alt={sp.title} className="rounded"/>
        </Card.Body>
        </Card>
        </div>
      </>
    )
}