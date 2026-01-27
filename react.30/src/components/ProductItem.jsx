const ProductItem = ({ product, setProducts }) => {
    const deleteProduct = () => {
      fetch(`http://localhost:3001/products/${product.id}`, {
        method: "DELETE",
      }).then(() => {
        setProducts(prev =>
          prev.filter(p => p.id !== product.id)
        );
      });
    };
  
    return (
      <li
        style={{
          color: product.isDiscounted ? "green" : "black",
        }}
      >
        {product.name} - ${product.price}
        <button onClick={deleteProduct}>Delete</button>
      </li>
    );
  };
  
  export default ProductItem;
  