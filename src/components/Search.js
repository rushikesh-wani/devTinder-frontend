import React from "react";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Search = () => {
  return (
    // {/* Top search bar and My connection Interested and request section */}
    <div className="sticky top-0 z-50 py-3 backdrop-filter backdrop-blur-md block md:flex justify-between items-center mb-3">
      <div className="flex items-center mb-2 md:mb-0">
        <MagnifyingGlassIcon className="size-5 text-white rounded-tl-lg rounded-bl-lg p-2 h-10 w-fit bg-violet-600 " />
        <input
          className="h-10 w-full md:w-80 px-2 border border-gray-400 border-l-0  bg-slate-100 rounded-tr-lg rounded-br-lg focus:outline-none"
          placeholder="Search for your 'dev'"
        />
      </div>
      <div className="flex justify-around items-center gap-x-2 overflow-x-scroll md:overflow-x-auto">
        <button className="p-2 border rounded-lg text-sm bg-slate-200 md:text-base hover:bg-violet-100 focus:bg-violet-100 focus:border-violet-700">
          <Bars3BottomLeftIcon className="size-5" />
        </button>
        <button className="p-2 border text-nowrap rounded-lg text-sm md:text-base hover:bg-violet-100 focus:bg-violet-100 focus:border-violet-700">
          My Connections
        </button>
        <button className="p-2 border rounded-lg text-sm md:text-base hover:bg-violet-100 focus:bg-violet-100 focus:border-violet-700">
          Requests
        </button>
        <button className="p-2 border rounded-lg text-sm md:text-base hover:bg-violet-100 focus:bg-violet-100 focus:border-violet-700">
          Interested
        </button>
      </div>
    </div>
  );
};

export default Search;
