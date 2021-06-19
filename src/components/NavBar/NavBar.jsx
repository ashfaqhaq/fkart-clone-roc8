import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar blue flex space-around pd-5">
      <div>Fkart logo</div>
      <div>
        <input type="text" className="long search bar" />
      </div>
      <div>Name</div>
      <div>more</div>
      <div>cart</div>
    </div>
  );
}

export default NavBar;
