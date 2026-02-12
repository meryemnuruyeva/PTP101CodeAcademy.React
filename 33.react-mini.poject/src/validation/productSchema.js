import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string().required(),
  category: Yup.string().required(),
  price: Yup.number().required(),
  oldPrice: Yup.number().required(),
  discount: Yup.number(),
  image: Yup.string().url().required(),
});
