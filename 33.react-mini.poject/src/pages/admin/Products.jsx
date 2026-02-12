import { useEffect, useState } from "react";
import { getProducts, getProductById, createProduct , updateProduct , deleteProduct  } from "../../services/productService";
import { Formik, Form, Field } from "formik";
import { productSchema } from "../../validation/productSchema";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const fetch = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="p-5">
      <Formik
        initialValues={{
          name: "",
          category: "",
          price: "",
          oldPrice: "",
          discount: "",
          image: "",
        }}
        validationSchema={productSchema}
        onSubmit={async (values, { resetForm }) => {
          await addProduct(values);
          fetch();
          resetForm();
        }}
      >
        <Form className="flex gap-2 mb-5">
          <Field name="name" placeholder="Name" />
          <Field name="category" placeholder="Category" />
          <Field name="price" placeholder="Price" />
          <Field name="oldPrice" placeholder="OldPrice" />
          <Field name="discount" placeholder="Discount" />
          <Field name="image" placeholder="Image" />
          <button type="submit">Add</button>
        </Form>
      </Formik>

      {products.map((p) => (
        <div key={p.id} className="flex justify-between border p-2 mb-2">
          {p.name}
          <button onClick={() => deleteProduct(p.id).then(fetch)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;
