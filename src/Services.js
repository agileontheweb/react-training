import React from 'react';
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export const Services = () => {
  return(
    <div className="mt-5">
    <h1>Hello Services</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Enim neque volutpat ac tincidunt. Augue mauris augue neque gravida in fermentum. Adipiscing bibendum est ultricies integer quis auctor elit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Pretium viverra suspendisse potenti nullam. Eget aliquet nibh praesent tristique magna sit amet. Ultrices sagittis orci a scelerisque purus semper eget duis. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Phasellus vestibulum lorem sed risus ultricies. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Eu turpis egestas pretium aenean pharetra magna ac placerat. Ipsum dolor sit amet consectetur adipiscing elit. Viverra orci sagittis eu volutpat odio facilisis mauris. Sapien et ligula ullamcorper malesuada. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Aliquam sem et tortor consequat id.
    </p>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

    </div>
  )
}
