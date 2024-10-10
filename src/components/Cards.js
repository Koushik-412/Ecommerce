import React from 'react'
import Products from '../Products'
import { Row,Col,Card, CardBody } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Cards({search}) {

  const x=()=>{
    console.log(Products)
  }
  return (
    <div>
       <Row xs={1} md={2} className="g-4">
      {Products.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item=>(
      <Card className="my-3" style={{ width: '18rem' }} key={item.id}>
         <Card.Img variant="top" src={item.image} />
          <CardBody>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
         {item.description}
        </Card.Text>
      <Button variant="primary" onClick={x}>Get Details</Button>
        </CardBody>
      </Card>
    ))}
    </Row>
    </div>
  )
}

export default Cards
