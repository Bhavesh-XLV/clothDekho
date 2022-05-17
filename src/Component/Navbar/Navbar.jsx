import React, { useState } from "react";
import logo from "./logo.jpg";
import "./Navbar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [status, setStatus] = useState(1);
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="Site-Logo" />
      </div>
      <div>
        <ul type="none">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>
      </div>
      <div>
        <input type="text" placeholder="Search Product Here..." />
      </div>
      {status == "0" ? (
        <div className="nav-right">Login</div>
      ) : (
        <div>
          <ul type="none">
            <li>
              Wishlist
              <br />
              <FavoriteBorderIcon />
            </li>
            <li>
              Bag
              <br />
              <PersonIcon />
            </li>
            <li>
              Profile
              <br />
              <ShoppingBagIcon />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
