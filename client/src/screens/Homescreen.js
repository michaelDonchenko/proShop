import React from 'react'
import Products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const Homescreen = () => {
  return (
    <>
      <h3>Latest Products</h3>
      <Row>
        {Products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Homescreen
