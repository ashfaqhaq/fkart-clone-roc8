import React from "react";

function CategoryBar() {
  const categories = [
    {
      name: "Electronics",
    },
    {
      name: "Tv and Appliances",
    },
    {
      name: "Men",
    },
    {
      name: "Women",
    },
    {
      name: "Baby & Kids",
    },
    {
      name: "Home & Furniture",
    },
    {
      name: "Sports, Books & More",
    },
  ];

  return (
    <>
      <div className="flex space-around pd-5">
        {categories.map((category) => (
          <div className="hover-blue">  {category.name} </div>
        ))}
      </div>
    </>
  );
}

export default CategoryBar;
