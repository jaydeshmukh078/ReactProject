import React from "react";
import "../css/Home.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addTocart } from '../CartSlice';

const Home = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/products";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(() => {
    loadData();
  }, [])

  const dispatch = useDispatch();

  const ans = mydata.map((key) => {
    return (
      <>
        {/* Product Card */}
        <div className="product-item" style={{ width: "18rem", margin: "10px", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden" }}>
          <img
            src={key.images}
            alt={key.name}
            height="250"
            style={{ width: "100%", objectFit: "cover" }}
          />

          <div style={{ padding: "10px" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>
              {key.brand}
            </h3>
            <p style={{ fontSize: "16px", marginBottom: "5px" }}>{key.name}</p>
            <p style={{ color: "gray", fontStyle: "italic", marginBottom: "5px" }}>
              Category: {key.category}
            </p>
            <p style={{ color: "black", fontWeight: "bold", marginBottom: "10px" }}>
              Price: ₹{key.price}
            </p>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}

              onClick={()=>{dispatch(addTocart({id:key.id, name:key.name, brand:key.brand, category:key.category, price:key.price, images:key.images, qnty:1}))}}
            >
              Add To Cart 🛒
            </button>
          </div>
        </div>



      </>
    )
  })


  return (
    <>

      <div className="homepage">

        {/* Featured Products */}
        <section className="featured">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {ans}
          </div>
        </section>
        
      </div>
    </>
  );
};

export default Home;