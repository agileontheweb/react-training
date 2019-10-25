import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

type CardProps = {
  title: string,
  image: string,
  text: string,
  button: string
}

export const MyCard = ({title, image, text, button}: CardProps ) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      <Button variant="primary">{button}</Button>
    </Card.Body>
  </Card>

)
