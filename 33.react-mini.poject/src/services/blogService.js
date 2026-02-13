import axios from "axios"

const BASE_URL = "http://localhost:3000/blogs"

export const getBlogs = () => axios.get(BASE_URL)
export const getBlogById = (id) => axios.get(`${BASE_URL}/${id}`)
export const createBlog = (data) => axios.post(BASE_URL, data)
export const updateBlog = (id, data) => axios.put(`${BASE_URL}/${id}`, data)
export const deleteBlog = (id) => axios.delete(`${BASE_URL}/${id}`)
