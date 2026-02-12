import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getProductById } from "../../services/productService";
import { CartContext } from "../../context/StoreContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToBasket, addToWishlist } = useContext(StoreContext);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-5">
      <img src={product.image} />
      <h1>{product.name}</h1>
      <button onClick={() => addToBasket(product)}>Add Basket</button>
      <button onClick={() => addToWishlist(product)}>Add Wishlist</button>
    </div>
  );
};

export default ProductDetail;
