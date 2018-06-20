import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class signUp extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="name" name="name" id="examplePassword" placeholder="name placeholder" />
        </FormGroup>
        <Button color="info">Submit</Button><Button color="info">Sign up!</Button>
        </Form>
        );
      }
    }

    export default signUp;