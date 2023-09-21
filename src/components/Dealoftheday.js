import React, { useState } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const Dealoftheday = () => {

    const [show, setShow ] = useState(false);

  return (
   <section id='Deal' className='my-3' >
<div className='text-center  my-2 py-3'>
    <h1 className='display-4 text-danger'><i class="bi bi-alarm-fill"></i> Deal of the Day!</h1>
</div>
<Container>
<Row className='align-item-center '><Col md={7}> 
<Image src={require('../Image/img-1.avif')} fluid={true}></Image>
</Col>
<Col md={5}>
<div className='p-3'>
    <h2 className='h1'> Acid Washed Tshirt</h2>
    <p className='lead text-muted '> An acid-washed T-shirt is a fashion staple known for its vintage charm. Achieved through a unique dyeing process, it sports faded, worn-in patterns that add character to any outfit. Originally popularized in the 1980s, this timeless piece continues to be a symbol of individuality and style, making it a versatile choice for both casual and trendy looks.</p>
    <div className='align-item-center'>
    <Button varient='danger' onClick={() => setShow(true)}><i class="bi bi-cart-plus" ></i> BuyNow</Button>
    </div>
</div>

</Col>
</Row>
 
      <ToastContainer className="position-fixed bottom-0 end-0 p-3" position='bottom-end'>
         <Toast onClose={() =>setShow(false)} show={show} delay={3000} autohide >
          <Toast.Header closeButton={false}>
     <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>Just NOW</small>
            </Toast.Header>
            <Toast.Body>item aaded to cart.</Toast.Body>
          </Toast>
        </ToastContainer>
</Container>
   </section>
  )
}

export default Dealoftheday;


