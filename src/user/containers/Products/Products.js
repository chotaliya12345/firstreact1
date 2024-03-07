import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function Products(props) {
  const [productsData, setProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const respons = await fetch("https://fakestoreapi.com/products");
    const data = await respons.json();

    setProductsData(data);
  };

  const handleSearch = (event) => {
    // console.log(event);
    setSearchTerm(event.target.value);
  };

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center"> Product </h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {filteredProducts.map((v) => (
          <div className="col-md-4 gy-4">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={v.image} height={"200px"} />
              <CardBody>
                <CardTitle tag="h5">{v.title.substring(0, 20)}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {v.price}
                </CardSubtitle>
                <CardText>{v.description.substring(0, 50)}</CardText>
                <Button color="success" outline>
                  Add To Cart
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
