function ProductCard(props) {
    return (
      <div className="product-card">
        <h2>{props.name}</h2>
        <p><strong>Qiymət:</strong> {props.price} ₼</p>
        <p><strong>Kateqoriya:</strong> {props.category}</p>
        <p>{props.description}</p>
      </div>
    );
  }
  
  export default ProductCard;
  