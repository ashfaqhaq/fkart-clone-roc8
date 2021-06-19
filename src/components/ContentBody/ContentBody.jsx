import React, { useState } from "react";

import Card from "./Card/Card";

function ContentBody() {
  const products = require("./data.json");

  const [sortBy, setSortBy] = useState();
  const [active,setActive] = useState('Popularity');
  return (
    <div className="pd-5 bg-gray">
      <div className="bg-white m-5 pd-5">
        <p className="small">
          {" "}
          <span className="hover-blue">Home</span>
          {" >"}
          <span className="hover-blue">Categories</span>
        </p>
        <p className="small hover-blue">
          Given how powerful social media has become these days, everyone around
          the world wants to look their best at all times. Thus, the right
          clothing and accessories are almost always in demand. Good-quality
          shirts, T-shirts, trousers, jeans, shorts, tops, sarees, kurtis,
          lehenga, dresses, skirts, bra, innerwear, and more are some of the
          examples that people love and need to wear. Watches, earrings, rings,
          bracelets, chains, etc can accentuate the look of every outfit. Thus,
          it’s important to wear complementing accessories when you dress up in
          your finest.
        </p>
        <p>
          Clothing and Accessories (Showing 1 – {products.length} of{" "}
          {products.length} products)
        </p>
        Sort By{" "}
        <li
          style={{ listStyle: "none", display: "inline",marginLeft:'0.5rem' }}
          className={active === "Popularity" ? 'active' : ''}
         
          onClick={() => {setSortBy("Popularity");setActive(("Popularity"))}}
        >
          {" "}
          Popularity{" "}
        </li>
        <li
         style={{ listStyle: "none", display: "inline",marginLeft:'0.5rem' }}
          className={active === "Low to High" ? 'active' : ''}
         
          onClick={() => {setSortBy("Low to High");setActive(("Low to High"))}}
        >
          Price - Low to High{" "}
        </li>
        <li
          style={{ listStyle: "none", display: "inline",marginLeft:'0.5rem' }}
          className={active === "High to Low" ? 'active' : ''}
       
          onClick={() => {setSortBy("High to Low");setActive(("High to Low"))}}
        >
          {" "}
          Price - High to Low{" "}
        </li>
        <li
         style={{ listStyle: "none", display: "inline",marginLeft:'0.5rem' }}
          className={active === "Newest First" ? 'active' : ''}
          onClick={() => {setSortBy("Newest First");setActive("Newest First")}}
        >
          {" "}
          Newest First{" "}
        </li>
        <Card products={products} sortBy={sortBy} />
      </div>
    </div>
  );
}

export default ContentBody;
