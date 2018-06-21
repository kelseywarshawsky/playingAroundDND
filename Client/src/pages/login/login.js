import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
 
export class login extends React.Component {
  render() {
    return (
      <Container>
        <Row>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button color="info">Submit</Button><Button color="info">Sign up!</Button>
        </Form>
        </Row>
        </Container>
        );
      }
    }
