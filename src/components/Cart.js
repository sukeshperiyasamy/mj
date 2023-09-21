import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartList from './CartList';

const Cart = () => {
    const [show, setShow] = useState(false);
  return (
    <>
    <Button variant="light"  onClick= {() => setShow(!show)} className="me-2 mx-5 position-relative"  >
    <i class="bi bi-cart3"></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    3
    <span class="visually-hidden">Cart</span>
  </span>
    </Button>
    <Offcanvas show={show} onHide={() => setShow(!show)} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CartList/>
        <div className='text-end'>
            <Button variant='danger' className='my-3 rounded-5'>Checkout</Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Cart
