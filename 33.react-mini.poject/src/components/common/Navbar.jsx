import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-white shadow px-10 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-[#82ae46]">
        VegeFoods
      </Link>

      <div className="flex gap-6 font-medium">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/admin/products">Admin</Link>
      </div>
    </nav>
  )
}

export default Navbar
