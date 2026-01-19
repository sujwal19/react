const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-emerald-500 px-10 py-2.5 text-lg text-white">
        {text}
      </button>
    </div>
  );
};

export default Button;
