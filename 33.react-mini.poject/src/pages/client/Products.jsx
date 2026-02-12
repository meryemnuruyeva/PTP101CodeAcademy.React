import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const fetchProducts = async (query = "") => {
    const params = query ? { name_like: query } : {};
    const data = await getProducts(params);
    setProducts(data);
  };

  const debouncedSearch = debounce((value) => {
    fetchProducts(value);
  }, 300);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full"
      />
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
          <h3 className="font-bold">{product.name}</h3>
          <p>${product.price}</p>
          <Link
            to={`/shop/${product.id}`}
            className="bg-green-500 text-white px-3 py-1 mt-2 inline-block rounded"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
}

