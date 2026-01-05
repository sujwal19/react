import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-10 absolute bottom-15 w-full py-4 justify-center">
      <button
        className="py-3 px-5 bg-emerald-900"
        onClick={() => {
          navigate(-1);
        }}
      >
        Previous
      </button>
      <button
        className="py-3 px-5 bg-emerald-900"
        onClick={() => {
          navigate("/");
        }}
      >
        Home Page
      </button>
      <button
        className="py-3 px-5 bg-emerald-900"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
