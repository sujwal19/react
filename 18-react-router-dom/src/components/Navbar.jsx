import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h2>Eagle Edge</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
