import axios from "axios";
import { BLOGS_API } from "../constants/api";

export const getBlogs = async (params = {}) => {
  const response = await axios.get(BLOGS_API, { params });
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await axios.get(`${BLOGS_API}/${id}`);
  return response.data;
};

export const createBlog = async (blog) => {
  const response = await axios.post(BLOGS_API, blog);
  return response.data;
};

export const updateBlog = async (id, blog) => {
  const response = await axios.put(`${BLOGS_API}/${id}`, blog);
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await axios.delete(`${BLOGS_API}/${id}`);
  return response.data;
};

