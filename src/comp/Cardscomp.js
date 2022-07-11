import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class cards extends Component {
  render() {
    return (
      <div className='cards'>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>phone</Card.Title>
    <Card.Text>
      buy the phone
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>phone</Card.Title>
    <Card.Text>
      buy the phone
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>phone</Card.Title>
    <Card.Text>
      buy the phone
    </Card.Text>
    <Button variant="primary">buy</Button>
  </Card.Body>
</Card>
      </div>
    )
  }
}
