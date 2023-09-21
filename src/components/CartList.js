import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
const CartList = () => {
  return (
    <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Red Tshirt</div>
        collar-Tshirt
      </div>
      <Badge bg="primary" pill>
       5
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Blue Tshirt</div>
        collar-Tshirt
      </div>
      <Badge bg="primary" pill>
        3
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">WhiteTshirt</div>
        collar-Tshirt
      </div>
      <Badge bg="primary" pill>
       7
      </Badge>
    </ListGroup.Item>
  </ListGroup>
  )
}

export default CartList
