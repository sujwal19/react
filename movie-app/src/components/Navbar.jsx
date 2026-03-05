const Navbar = () => {
  return (
    <header className={`flex w-full z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="" className="flex items-center">
              <span className="font-bold text-3xl text-red-600">
                <span className="text-white">S</span>-MOVIES
              </span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-red-600 transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#trending"
              className="text-white hover:text-red-600 transition-all font-medium"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="text-white hover:text-red-600 transition-all font-medium"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="text-white hover:text-red-600 transition-all font-medium"
            >
              Top Rated
            </a>
          </nav>

          <div className="hidden md:block relative search-container">
            <div className=" relative">
              <input
                type="text"
                placeholder="Search...."
                className="bg-neutral-800/80 text-white py-2 px-4 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600/60"
              />
              {/* Conditional Rendering */}
              <div className="absolute right-3 top-2.5">
                <svg
                  className="w-4 h-4 text-neutral-400 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              {/* Else */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute right-3 top-3 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-5M2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Search Result Dropdown conditional rendering */}
            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden x-50">
              <ul className="divide-y divide-neutral-700">
                <li className="hover:bg-neutral-700">
                  <button className="flex items-center p-3 w-full text-left">
                    <div className="w-10 h-10 bg-neutral-700 overflow-hidden shrink-0">
                      <img
                        src=""
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                        {" "}
                        No Image
                      </div>
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-white truncate">
                        Movie Title
                      </p>
                      <p className="text-xs text-neutral-400">
                        Movies Release Date
                      </p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            {/* Conditional Rendering */}
            <div className="absolute mt-2 w-72 bg-neutral-400 rounded-lg shadow-lg overflow-hidden z-50">
              <div className="p-4 text-center text-neutral-400 text-sm">
                No movies found matching....
              </div>
            </div>
          </div>
          <button className="md:hidden text-white">
            {/* Conditional Rendering */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {/* Else */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="mt-4 pb-4 space-y-4 md:hidden"></div>
      </div>
    </header>
  );
};

export default Navbar;
