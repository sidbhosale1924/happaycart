import React, { useState } from "react";
import CardData from "./CardData";
const ListPage = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div className="card-container">
        {CardData.map((items) => {
          return (
            <div className="card" key={items.id}>
              <img src={items.img_url} alt="myFav" className="card-img" />
              <div className="card-info">
                <div className="title-price">
                  <h3>{items.name}</h3>
                  <div className="price">
                    <h4>{items.original_price}</h4>
                    <h3>$ {items.final_price}</h3>
                  </div>
                </div>
                <p className="description">{items.description}</p>
                <button
                  className="btn"
                  onClick={() => {
                    setCart({ id: items.id, name: items.name, count: 1 });
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListPage;
