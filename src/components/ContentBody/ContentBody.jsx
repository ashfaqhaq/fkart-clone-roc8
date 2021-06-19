import React, { useState,useRef } from "react";

import Card from "./Card/Card";

function ContentBody() {
  const products = require("./data.json");

  const [sortBy, setSortBy] = useState();
  const [filter, setFilter] = useState();
  const [active, setActive] = useState("Popularity");
  const genderRef = useRef();
  const sizeRef = useRef();

  function clearFilters(){
    genderRef.current.value = "";
    sizeRef.current.value = "";
    setFilter({})

  }

  function handleOnChange(e) {
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

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
        <h4>Filter</h4>
        <p>
          <strong>Gender</strong>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={filter?.gender==="M"}
            onChange={(e) => handleOnChange(e)}
            ref={genderRef}
          />
          Male
          <input
            type="radio"
            name="gender"
            checked={filter?.gender==="F"}
            value="F"
            onChange={(e) => handleOnChange(e)}
            ref={genderRef}
          />
          Female
        </p>
        <p>
          <strong>Size</strong>
          <input
            type="radio"
            name="size"
            value="M"
            checked={filter?.size==="M"}
            onChange={(e) => handleOnChange(e)}
            ref={sizeRef}
          />
          Medium
          <input
            type="radio"
            name="size"
            value="S"
            checked={filter?.size==="S"}
            onChange={(e) => handleOnChange(e)}
            ref={sizeRef}
          />
          Small
          <input
            type="radio"
            name="size"
            checked={filter?.size==="L"}
            value="L"
            onChange={(e) => handleOnChange(e)}
            ref={sizeRef}
          />
          Large
          <input
            type="radio"
            name="size"
            value="XL"
            checked={filter?.size==="XL"}
            onChange={(e) => handleOnChange(e)}
            ref={sizeRef}
          />
          Xtra Large
        </p>

<button onClick={clearFilters}>Clear All filters </button>

        <p>
          Clothing and Accessories (Showing 1 – {products.length} of{" "}
          {products.length} products)
        </p>
        Sort By{" "}
        <li
          style={{ listStyle: "none", display: "inline", marginLeft: "0.5rem" }}
          className={active === "Popularity" ? "active" : ""}
          onClick={() => {
            setSortBy("Popularity");
            setActive("Popularity");
          }}
        >
          {" "}
          Popularity{" "}
        </li>
        <li
          style={{ listStyle: "none", display: "inline", marginLeft: "0.5rem" }}
          className={active === "Low to High" ? "active" : ""}
          onClick={() => {
            setSortBy("Low to High");
            setActive("Low to High");
          }}
        >
          Price - Low to High{" "}
        </li>
        <li
          style={{ listStyle: "none", display: "inline", marginLeft: "0.5rem" }}
          className={active === "High to Low" ? "active" : ""}
          onClick={() => {
            setSortBy("High to Low");
            setActive("High to Low");
          }}
        >
          {" "}
          Price - High to Low{" "}
        </li>
        <li
          style={{ listStyle: "none", display: "inline", marginLeft: "0.5rem" }}
          className={active === "Newest First" ? "active" : ""}
          onClick={() => {
            setSortBy("Newest First");
            setActive("Newest First");
          }}
        >
          {" "}
          Newest First{" "}
        </li>
        <Card products={products} sortBy={sortBy} filter={filter} />
      </div>
    </div>
  );
}

export default ContentBody;
