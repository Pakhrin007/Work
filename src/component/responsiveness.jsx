import React from "react";

const Navbar = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white py-4 px-6">
      {/* Logo or Brand Name */}
      <div className="text-xl font-bold mb-2 md:mb-0">MyApp</div>

      {/* Search Bar */}
      <div className="flex items-center mb-2 md:mb-0 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow md:flex-grow-0 px-4 py-2 rounded-l-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
          Search
        </button>
      </div>

      {/* Today's Date */}
      <div className="text-sm">{today}</div>
    </div>
  );
};

export default Navbar;
