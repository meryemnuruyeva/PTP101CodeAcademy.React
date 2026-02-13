import { Link } from "react-router-dom"

function BlogCard({ blog }) {
  return (
    <div className="shadow p-4">
      <h3 className="font-bold mb-2">{blog.title}</h3>
      <p className="text-gray-500 mb-2">{blog.description}</p>
      <p className="text-sm text-gray-400">{blog.date}</p>

      <Link
        to={`/blog/${blog.id}`}
        className="text-[#82ae46] mt-2 block"
      >
        Read More
      </Link>
    </div>
  )
}

export default BlogCard
