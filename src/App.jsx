import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Row } from "react-bootstrap";
import { categories } from "./Category";
import { shops } from "./Shop";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  console.log(categories[0]["name"]);

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
              <Form.Control as="select" aria-label="Default select example">
                {categories.map((opt, key) => (
                  <option value={opt.name} key={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select Category</Form.Label>
              <Form.Control as="select" aria-label="Default select example">
                {shops.map((opt, key) => (
                  <option value={opt.name} key={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </Form.Control>
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
