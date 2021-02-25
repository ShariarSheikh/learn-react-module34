import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from '../Cart/Cart'

const Shop = () => {
  const first10 = fakeData.slice(0, 10);

  const [products, setProducts] = useState(first10);

  const [cart, setCart] = useState([]);

  const handleAddProduct = (event) => {

    const newCart = [...cart, event];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((item) => (
          <Product handleAddProduct={handleAddProduct} item={item} />
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;
