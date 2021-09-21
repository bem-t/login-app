
import './App.css';
import {Form, Button, Card, Container, Row } from 'react-bootstrap'
import { FacebookLoginButton } from "react-social-login-buttons";


function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Card style={{ width: '18rem' }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button  class="btn btn-secondary w-100" variant="secondary"  type="submit" >
              Log in
            </Button>
            <div className="text-center pt-3">
              Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"/>
          </Form>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
