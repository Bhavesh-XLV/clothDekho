import axios from "axios";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Body.css";

const Body = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [gte, setgte] = useState(0);
  const [lte, setlte] = useState(20000);
  const [order, setOrder] = useState();

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [page, gte, lte, order]);
  const getData = () => {
    axios
      .get(
        `http://localhost:3001/data/?_limit=6&_page=${page}&price_gte=${gte}&price_lte=${lte}&_sort=price&_order=${order}`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  const handlegte = (e) => {
    const checked = e.target.checked;
    if (checked) {
      if (e.target.value == 500) {
        setgte(0);
        setlte(500);
        setPage(1);
      } else if (e.target.value == "500-1000") {
        setgte(500);
        setlte(1000);
        setPage(1);
      } else if (e.target.value == 1000) {
        setgte(1000);
        setlte(20000);
        setPage(1);
      }
    }
  };
  const handleSort = (e) => {
    const checked = e.target.checked;
    if (checked) {
      if (e.target.value == "asc") {
        setOrder("asc");
      } else if (e.target.value == "desc") {
        setOrder("desc");
      }
    }
  };

  return (
    <div>
      <h1 className="feature-heading">Feature Products</h1>
      <div className="feature_line"></div>
      <div style={{ display: "flex" }}>
        {window.location.href == "http://localhost:3000/" ? (
          ""
        ) : (
          <div style={{ width: "15%" }} className="filter">
            <h1>Filter</h1>
            <form>
              <div className="filter_div">
                <h1>Sort By</h1>
                <div>
                  <input
                    type="radio"
                    name="sort"
                    value="asc"
                    onClick={(e) => {
                      handleSort(e);
                    }}
                  />
                  <label>Price: Low to High</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sort"
                    value="desc"
                    onClick={(e) => {
                      handleSort(e);
                    }}
                  />
                  <label>Price: High to Low</label>
                </div>
              </div>
              <div className="filter_div">
                <h1>Price</h1>
                <div>
                  <input
                    type="radio"
                    value="500"
                    name="price"
                    onClick={(e) => {
                      handlegte(e);
                    }}
                  />
                  <label>Below 500</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="500-1000"
                    name="price"
                    onClick={(e) => {
                      handlegte(e);
                    }}
                  />
                  <label>500-1000</label>
                </div>
                <div>
                  <input
                    type="radio"
                    value="1000"
                    name="price"
                    onClick={(e) => {
                      handlegte(e);
                    }}
                  />
                  <label>Above 1000</label>
                </div>
              </div>
              <div className="filter_div">
                <h1>Dicount</h1>
                <div>
                  <input type="radio" name="discount" />
                  <label>more than 10%</label>
                </div>
                <div>
                  <input type="radio" name="discount" />
                  <label>more than 20%</label>
                </div>

                <div>
                  <input type="radio" name="discount" />
                  <label>more than 30%</label>
                </div>
              </div>
            </form>
          </div>
        )}
        <div className="the-card">
          {data.map((e) => (
            <div key={e.id} className="feature-product-cart">
              <img src={e.image} alt="" />
              <p>Buy stylish Shirt</p>
              <div className="price-heart">
                <div>{e.price}</div>
                <div>
                  <FavoriteBorderIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {window.location.href == "http://localhost:3000/" ? (
        ""
      ) : (
        <div className="pagination">
          <button
            disabled={page === 1 ? true : false}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Pre
          </button>
          <button
            disabled={page === 4 ? true : false}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
