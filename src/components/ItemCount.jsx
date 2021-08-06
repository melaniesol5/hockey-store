import React, { useState } from 'react';
import ButtonCount from './Button';
import {Card, ListGroup, Row, Col, Button} from "react-bootstrap";

export default function ItemCount({stock, initial,onAdd}) {
    const [count, setCount] = useState(initial);

  return (
    <>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Remera</Card.Title>
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
  </Card.Body>
</Card>
      
     
    </>
  );
}
