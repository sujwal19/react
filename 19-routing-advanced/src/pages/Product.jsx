import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 pt-5">
        <Link className="text-lg" to="/product/men">
          Mens
        </Link>
        <Link className="text-lg" to="/product/women">
          Women
        </Link>
        <Link className="text-lg" to="/product/kids">
          Kids
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
