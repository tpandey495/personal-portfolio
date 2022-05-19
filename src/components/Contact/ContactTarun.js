import React from "react";
import { Container, Row ,Col} from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Particle from "../Particle";
import './Contact.css';

function ResumeNew() {
return (
   <>
<Form className="contact"  >
  <Particle />
<Row>
   <Col>
  <Form.Group className=" mb-3">
    <Form.Label>Name </Form.Label>
    <Form.Control className="input" type="email" placeholder="    Name" />
  </Form.Group>
  </Col>

   <Col>
  <Form.Group className="mb-5" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="" placeholder="Email" />
  </Form.Group>
  </Col>
  </Row>

  <Form.Group className=" mb-5" controlId="formBasicPassword">
    <Form.Label>Subject</Form.Label>
    <Form.Control className="form-group1" type="" placeholder="Subject" />
  </Form.Group>

  <Form.Group className="mb-5" controlId="formBasicPassword">
    <Form.Label>Message</Form.Label>
    <Form.Control className="form-group2" type="" placeholder="Message" />
  </Form.Group>

  <Button className="mb-5" variant="primary" type="submit" >
    Submit
  </Button>
</Form>
   
   </>

  );
} 

export default ResumeNew;
