import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 ">
      <div>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div className="mt-4 lg:mt-0">
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[50vw]"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full gap-4 mt-4 lg:mt-0 lg:w-auto">
        <button
          className={`w-full lg:w-auto px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white`}
        >
          Sign Up
        </button>
        <button
          className={`w-full lg:w-auto px-3 py-2 font-bold rounded-lg hover:text-green-500`}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
