import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <>
      <ProductCard
        name="Laptop"
        price="1500"
        category="Elektronika"
        description="Yüksək performanslı noutbuk"
      />

      <ProductCard
        name="Telefon"
        price="900"
        category="Mobil"
        description="Yeni nəsil smartfon"
      />

      <ProductCard
        name="Qulaqlıq"
        price="150"
        category="Aksesuar"
        description="Səs-küyü azaldan qulaqlıq"
      />
    </>
  );
}

export default ProductList;
