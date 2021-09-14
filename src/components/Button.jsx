import React from 'react';
import {Button} from "react-bootstrap";
export default function ButtonCount({ click, operator }) {
  return <Button variant={operator === "+" ? "success": "outline-secondary"} onClick={click}>{operator}</Button>;
}
