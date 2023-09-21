import React from 'react'
import {Container ,Row , Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
const Carousels = () => {
  return (
    <Container fluid>
    <section id='home'>
        <Row  className='justify-content-center align-items-center'>
            <Col lg='8'>
            <Carousel data-bs-theme="dark">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../Image/tshirt1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p className='d-none d-d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../Image/tshirt2.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p className='d-none d-d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} >
        <img
          className="d-block w-100"
          src={require('../Image/tshirt4.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p className='d-none d-d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className='text-center '>
        <h2 className='display-5 mt-3  '>
            Tshirt for every occasion
        </h2>
        {/* <p className='text-muted '> Lorem text  </p> */}
        </div>
        </section>
    </Container>
  )
}

export default Carousels
