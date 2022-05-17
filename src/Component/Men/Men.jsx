import React from "react";
import { useNavigate } from "react-router-dom";
import "./Men.css";

const Men = () => {
  const navigate = useNavigate();
  return (
    <div class="men">
      <div onClick={() => navigate("/men/tshirt")}>
        <img
          src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1>T-Shirts</h1>
      </div>
      <div onClick={() => navigate("/men/jeans")}>
        <img
          src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1>Jeans</h1>
      </div>
    </div>
  );
};

export default Men;
