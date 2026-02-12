import axios from "axios";
import { BLOGS_API } from "../constants/api";

export const getProducts = async (params = {}) => {
  const response = await axios.get(BLOGS_API, { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${BLOGS_API}/${id}`);
  return response.data;
};

export const createProduct = async (blog) => {
  const response = await axios.post(BLOGS_API, blog);
  return response.data;
};

export const updateProduct = async (id, blog) => {
  const response = await axios.put(`${BLOGS_API}/${id}`, blog);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${BLOGS_API}/${id}`);
  return response.data;
};
