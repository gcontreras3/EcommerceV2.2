import React, { useState, useEffect } from 'react';
import './Products.css'
import Axios from 'axios';

function Products() {

  // first attempt at route and State

  // const [productList, setProductList] = useState([])
  // const showProducts = () =>{
  //   Axios.post('http://localhost:3000/Products')
  //   .then(() =>{
  //     console.log("Success");
  //   })
  // }
  const [testingList, setTestList] = useState([]);
  useEffect(() => {
    Axios.get("/Products").then((response) => {
      setTestList(response.data);
    });
  }, []);

 


  
  return (
    <>
    {testingList.map((val) => {
           return (
              <>
              <div className="products-container">
                <section className="t-list">
                  <img src={val.ImageURL} className="img" alt="IMG..." />
                  <h2 className="textsize">Name: {val.ProductName}</h2>
                  <p>Description: {val.Descript}</p>
                  <p>Price: {val.Price}</p>
                  <button>Add To Cart</button>
                 </section>
                </div>
              </>
            );
          })}
    </>
  )
}

export default Products;