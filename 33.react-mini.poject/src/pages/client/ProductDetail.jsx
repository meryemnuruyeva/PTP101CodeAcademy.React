import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-5">
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;

