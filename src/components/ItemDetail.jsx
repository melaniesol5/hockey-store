
import ItemCount from './ItemCount';
import '../css/Item.css';
import {Col, Container, Row} from "react-bootstrap";

export default function ItemDetail(product){
    function onAdd(stock){
        let products = []
        products.push({
          stock
        });
      }
    return(
        <body>
            <Container>
            <div key={product.id}>      
                
                <Row>
                    <Col >
                        <div>
                        <h1>{product.title} {product.description}</h1>
                            <img className="imgItem" src={product.pictureUrl} alt="{product.title} - {product.description}"/>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>Descripcion: </h4>
                                <p>ui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem</p>
                            <h5>${product.price}</h5>
                            <ItemCount stock={product.stock} initial={1} onAdd={(count) => onAdd(count)} />
                        </div>
                    </Col>
                </Row>
                
            </div>
            </Container>
        </body>
        
    )
}