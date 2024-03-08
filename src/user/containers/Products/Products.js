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
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  let [category, setCategory] = useState([])


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const respons = await fetch("https://fakestoreapi.com/products");
    const data = await respons.json();

    setProductsData(data);
    setCategory(data)
  };

  const handleFilter = () => {
    let fData = productsData.filter(
      (v) =>
        v.title.toLowerCase().includes(search) ||
        v.description.toLowerCase().includes(search) ||
        v.price.toString().includes(search)
    );

    fData = fData.sort((a, b) => {
      if (sort === "lh") {
        return a.price - b.price;
      } else if (sort === "hl") {
        return b.price - a.price;
      } else if (sort === "az") {
        return a.title.localeCompare(b.title);
      } else if (sort === "za") {
        return b.title.localeCompare(a.title);
      }
    });

    return fData;
  };

  const finalData = handleFilter();

  console.log(finalData);

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center"> Product </h2>
        <div className="d-flex m-10">
          <div className="mb-3">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="mb-3 m-5px">
            <select
              name="sort"
              onChange={(event) => setSort(event.target.value)}
            >
              <option value={"0"}>--Select--</option>
              <option value={"lh"}>Price: Low to High</option>
              <option value={"hl"}>Price: High to Low</option>
              <option value={"az"}>Product: A - Z</option>
              <option value={"za"}>Product: Z - A</option>
            </select>
          </div>
          <select>
            <option value="0">--Category--</option>
            {
              // function changeCat() {
              //     let uniq = []
              //         for (let index = 0; index < category.length; index++) {
              //             if(uniq.indexOf(category[index].category===-1)){
              //                 uniq.push(category[index].category);
              //             };

              //         }
              //         return uniq
              //     }

              // console.log(changeCat());
              category.map((v) => (
                <option value={v.category}> {v.category}</option>

              ))

              //   category.reduce((acc,v)=>{
              //     if (acc[v.category]){
              //         console.log(v.category)
              //         const setCate=acc[v.category].findIndex((data)=>data.category===v.category)
              //         console.log(v.category,setCate);
              //     }

              //   })
            }
          </select>
        </div>
        {finalData.map((v) => (
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
