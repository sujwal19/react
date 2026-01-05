import { Link, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-10 py-5 items-center">
      <h3
        className="text-2xl font-bold cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Sujwal
      </h3>
      <div className="flex decoration-0 gap-10">
        <Link className="text-lg font-semibold" to="/">
          Home
        </Link>
        <Link className="text-lg font-semibold" to="/about">
          About
        </Link>
        <Link className="text-lg font-semibold" to="/product">
          Product
        </Link>
        <Link className="text-lg font-semibold" to="/courses">
          Courses
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
