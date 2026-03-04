const Header = () => {
  return (
    <nav className="h-20 flex justify-between items-center ">
      <div className="logo">
        <h3 className="font-black text-3xl">
          <span className="text-red-700">S</span>-MOVIES
        </h3>
      </div>
      <div className="flex gap-8 font-semibold text-[1rem]">
        <h4 className="active:text-red-700">Home</h4>
        <h4 className="active:text-red-700">Movies</h4>
        <h4 className="active:text-red-700">TV Series</h4>
      </div>
      <div className="text-gray-400 relative">
        <i class="ri-search-line absolute bottom-2 left-2"></i>
        <input
          type="text"
          placeholder="Search..."
          className="border-2 outline-none bg-white px-3 pl-7 py-1.5 rounded text-gray-700"
        />
      </div>
    </nav>
  );
};

export default Header;
