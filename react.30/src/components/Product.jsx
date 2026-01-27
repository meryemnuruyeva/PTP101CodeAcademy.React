import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });
  }, []);

  return (
    <>
      <SearchProduct products={products} setFiltered={setFiltered} />
      <AddProduct setProducts={setProducts} />
      <ProductList products={filtered} setProducts={setProducts} />
    </>
  );
};

export default Product;
