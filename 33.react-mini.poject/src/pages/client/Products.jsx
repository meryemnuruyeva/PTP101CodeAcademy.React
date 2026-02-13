import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-5">
      {products.map(p => (
        <div key={p.id} className="border p-2 mb-2">
          <Link to={`/products/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;

