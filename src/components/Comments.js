import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap'

const Comments = () => {
  return (
  <section id='contactus' className='bg-light py-3' >
<div className='text-center  my-2 py-3'>
    <h4 className='display-4 text-danger'> Comments <i class="bi bi-chat-square-quote-fill"></i></h4>
</div>
<Container>
<Row className='justify-content-center '>
    <Col md={ 6}>
<Form>
<InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-heart"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i class="bi bi-person"></i></InputGroup.Text>
        <FloatingLabel
        controlId="floatingInput"
        label="Name">
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
      </InputGroup>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <Button  variant='danger' className='rounded-4'>Submit</Button>
</Form>
    </Col>
</Row>



</Container>

  </section>
  )
}

export default Comments
