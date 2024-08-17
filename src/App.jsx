import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Row } from "react-bootstrap";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <>
      <Container className="my-5">
        <h1>FE-1426P-1</h1>
      </Container>
      <Container>
        <Row>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                placeholder="Enter product name"
                id="productNameInput"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Shop</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select Category</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}

export default App;
