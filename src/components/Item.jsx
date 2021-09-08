import ItemCount from './ItemCount';
import {Card} from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../css/Item.css';

export default function Item(product){
    function onAdd(stock){
        let products = []
        products.push({
          stock
        });
      }
    
    return(
      <>
        <div className="item" key={product.id}>
        <Card style={{ width: '18rem' }} >
        <Card.Body>
        <Link to={`/item/${product.id}`}><img src={product.pictureUrl} alt="{product.tittle} - {product.description}" className="rounded"/></Link>
            <Card.Title>{product.title}</Card.Title><Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <ItemCount stock={product.stock} initial={1} onAdd={(count) => onAdd(count)} />
        </Card.Body>
        </Card>
        </div>
      </>
    )
}