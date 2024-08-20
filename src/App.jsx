import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { categories } from "./Category";
import { shops } from "./Shop";

function App() {
  // eslint-disable-next-line no-unused-vars

  const [products, SetProduct] = useState([]);
  const [addedProductId, SetId] = useState(0);
  const handleProduct = (product) => {
    if (product.addedProductIsBought) {
      product.addedProductIsBought = false;
    } else {
      product.addedProductIsBought = true;
    }

    SetProduct([...products]);
    console.log(
      "addedProductIsBought = " + product.addedProductIsBought,
      product.addedProductName
    );
  };

  const deleteProduct = (product) => {
    const idOfDeletedProduct = product.addedProductId;
    const updatedProducts = products.filter(
      (product) => product.addedProductId !== idOfDeletedProduct
    );
    SetProduct(updatedProducts);
    console.log(products);
    console.log(idOfDeletedProduct);
    console.log(updatedProducts);
  };

  const addProduct = (event) => {
    event.preventDefault();
    const productInputValue = event.target.productNameInput.value;
    const productShop = event.target.shopInput.value;
    const productCategory = event.target.categoryInput.value;
    if (productInputValue.trim().length !== 0) {
      SetId(addedProductId + 1);

      const addedProduct = {
        addedProductName: productInputValue,
        addedProductShop: productShop,
        addedProductCategory: productCategory,
        addedProductId,
        addedProductIsBought: false,
      };

      SetProduct([...products, addedProduct]);
    } else {
      alert("Product name cannot be empty!");
    }
  };

  console.log(products);

  return (
    <>
      <Container className="my-5">
        <h1>FE-1426P-1</h1>
      </Container>
      <Container>
        <Row>
          <Col className="shadow  me-2">
            <Form onSubmit={addProduct} className="p-3">
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  name="productNameInput"
                  placeholder="Enter product name"
                  id="productNameInput"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Shop</Form.Label>
                <Form.Control
                  as="select"
                  aria-label="Default select example"
                  name="shopInput"
                  id="shopInput"
                >
                  {shops.map((opt, key) => (
                    <option value={opt.name} key={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  as="select"
                  aria-label="Default select example"
                  name="categoryInput"
                  id="categoryInput"
                >
                  {categories.map((opt, key) => (
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
          </Col>
          <Col className="p-3 shadow ms-2">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Bought from</th>
                  <th>Product Category</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, key) => (
                  <tr
                    key={key}
                    className={
                      "align-middle " +
                      (product.addedProductIsBought
                        ? "table-success"
                        : "table-warning")
                    }
                  >
                    <td>{product.addedProductId}</td>
                    <td>{product.addedProductName}</td>
                    <td>{product.addedProductShop}</td>
                    <td>{product.addedProductCategory}</td>
                    <td className="text-center">
                      <Button
                        onClick={() => handleProduct(product)}
                        className={
                          "btn fw-bolder mx-1 " +
                          (product.addedProductIsBought
                            ? " btn-success"
                            : " btn-warning px-4")
                        }
                      >
                        {product.addedProductIsBought ? "In Cart" : "Buy"}
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn-sm btn-danger mx-1"
                        onClick={() => deleteProduct(product)}
                      >
                        x
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
