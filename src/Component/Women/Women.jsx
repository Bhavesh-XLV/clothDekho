import React from "react";
import { useNavigate } from "react-router-dom";
import "./Women.css";

const Women = () => {
  const navigate = useNavigate();
  return (
    <div class="women">
      <div
        onClick={() => {
          navigate("/women/tshirt");
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHMlMjB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1>T-Shirts</h1>
      </div>
      <div
        onClick={() => {
          navigate("/women/jeans");
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1621863095417-74701aec1a29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGplYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1>Jeans</h1>
      </div>
    </div>
  );
};

export default Women;
