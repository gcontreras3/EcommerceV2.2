import React, { useState, useEffect } from 'react';
import './Products.css'

import Axios from 'axios';

// class Products extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       products: [],
//     };
//   }
//   componentDidMount(){
//     axios
//       .get("http://localhost:3000/products")
//       .then((response) => this.setState({ products: response.data }));
//   }
//   render() {
//     return(
//       <div>
//         <div>
//           <main>
//             {this.state.products.map((products, index) => (
//               <div>
//                 <h4>{products.title} </h4>
//                 <p>{products.price}</p>
//                 <p>{ products.item_description}</p>
//                 <button>Add to Cart</button>{" "}
//               </div>
//             ))}
//           </main>
//         </div>
//       </div>
//     )
//   }
// }


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
    Axios.get("http://localhost:3001/Products").then((response) => {
      setTestList(response.data);
    });
  }, []);

  // function filter(){
  //   const [filter, setFilter] = useState()
  //   filter.sort(() => {
  //      return a - b
  //   })
    
  // }


  
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
    
        {/* <div className="container">
            <h3>Product</h3>
            <p>Description</p>
            <p>Price</p>
            <div className="products-btn">
            <button onClick={getProducts}>Show Products</button>
            </div>
        </div> */}
    </>
  )
}

export default Products;