import { useState } from "react";

const AddProduct = ({ setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);

  const submitHandler = e => {
    e.preventDefault();

    if (!name || !price) return;

    const newProduct = {
      name,
      price: Number(price),
      isDiscounted,
    };

    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(data => {
        setProducts(prev => [...prev, data]);
        setName("");
        setPrice("");
        setIsDiscounted(false);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        required
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        required
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <label>
        Discounted?
        <input
          type="checkbox"
          checked={isDiscounted}
          onChange={e => setIsDiscounted(e.target.checked)}
        />
      </label>
      <button>Add</button>
    </form>
  );
};

export default AddProduct;
