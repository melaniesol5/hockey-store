import React, { useState } from 'react';
import ButtonCount from './Button';
import {Card, Row, Col, Button} from "react-bootstrap";

export default function ItemCount({stock, initial,onAdd}) {
    const [count, setCount] = useState(initial);

  return (
    <>
    
    <Row>
        <Col>
            <Card.Link href="#">
                <ButtonCount
                operator="-"
                click={() => {
                count > 0 && setCount(count - 1);
                }}/>
            </Card.Link>
        </Col>
        <Col>{count}</Col>
        <Col>
            <Card.Link href="#">
                <ButtonCount
                operator="+"
                click={() => {
                count < stock && setCount(count + 1);
                }}/>
            </Card.Link>
        </Col>
        
    </Row>
    <Row className="mt-3">
        <Col>
        <Button variant="outline-primary" size="lg" onClick={onAdd(count)} className={ stock === 0 ? "disabled" :""}>
            Agregar al carrito
        </Button>
    </Col>
    
    </Row>
     
    </>
  );
}
