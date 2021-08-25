import {Card} from "react-bootstrap";

import '../css/Item.css';

export default function ItemDetail(product){
    
    return(
        <div className="item">

        <Card style={{ width: '18rem' }} >
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <img src={product.pictureUrl} alt="{product.tittle} - {product.description}" className="rounded"/>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}