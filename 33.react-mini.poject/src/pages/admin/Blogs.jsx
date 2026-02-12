import React from "react";
import AdminProducts from "./Products";
import { Formik, From, Field } from "formik";
import React from 'react'
import React, { useState, useEffect } from "react";
import { getBlogs, createBlog, deleteBlog } from "../../services/blogSchema";




const AdminBlog = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const res = await getBlogs();
        setBlogs(res.data);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const addBlog = async (values) => {
        await createBlog(values);
    };

    return (
        <div className="p-5">
            <Formik
                initialValues={{ title: "", content: "" }}
                onSubmit={async (values, { resetForm }) => {
                    await addBlog(values);
                    fetchBlogs();
                    resetForm();
                }}
            >
                <Form className="flex gap-2 mb-5">
                    <Field name="title" placeholder="Title" />
                    <Field name="content" placeholder="Content" />
                    <button type="submit">Add Blog</button>
                </Form>
            </Formik>

            {blogs.map((b) => (
                <div key={b.id} className="flex justify-between border p-2 mb-2">
                    {b.title}
                    <button onClick={() => deleteBlog(b.id).then(fetchBlogs)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default AdminBlog;
