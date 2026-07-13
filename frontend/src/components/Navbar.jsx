
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-extrabold text-blue-900">
          Smart Industry
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <a href="#" className="hover:text-blue-700 transition">
            Home
          </a>

          <Link 
  to="/dashboard"
  className="hover:text-blue-700 transition"
>
  Dashboard
</Link>

          <a href="#" className="hover:text-blue-700 transition">
            Features
          </a>

          <a href="#" className="hover:text-blue-700 transition">
            Contact
          </a>

        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;