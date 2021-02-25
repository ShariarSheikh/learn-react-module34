import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.item;
//   console.log(props);
  return (
    <div className="product">
      <div>
        <img src={img} alt="product img" />
      </div>
      <div>
        <h4 className="product-name"> {name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>

        <button className="add-to-cartBtn"
        onClick={()=> props.handleAddProduct(props.item)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
