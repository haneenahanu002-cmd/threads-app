import { Link } from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-dark custom-navbar">
      <div className="container">

        <Link
          to="/products"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <FaBoxOpen />
          <span>Product Catalog</span>
        </Link>

        

      </div>
    </nav>
  );
}

export default Navbar;