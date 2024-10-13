// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
const Navbar = () => {
  return (
    <nav className="z-50 bg-gradient-to-b from-violet-100 via-violet-200 to-violet-300 shadow-md border border-gray-100 border-x-0 border-t-0 px-3 md:px-10 py-4">
      <ul className="flex justify-between items-center">
        <li className="my-2">
          <Link to="/" className="text-xl font-medium">
            devTinder
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            to="/search"
            className="cursor-text  flex text-nowrap gap-x-2 border items-center px-4 pl-4 md:pr-80 py-3 text-base text-zinc-400 bg-gray-100/50 rounded-2xl"
          >
            <MagnifyingGlassIcon className="size-5 text-slate-700" />
            Search for your's <i>"dev"</i>
          </Link>
        </li>

        <li className="">
          <Link to="/profile/123">
            <div className="flex items-center  gap-x-1 rounded-lg px-2 py-1">
              {false ? (
                <>
                  <p className="text-lg">@rushi_11</p>
                  <ChevronDownIcon className="size-7" />
                </>
              ) : (
                <>
                  <UserCircleIcon className="size-7" />
                  <p className="">Login</p>
                </>
              )}
            </div>
          </Link>
        </li>
      </ul>

      <div className="mt-1">
        <Link
          to="/search"
          className="md:hidden flex text-nowrap gap-x-2 border items-center px-4 pl-4 md:pr-80 py-3 text-base text-zinc-400 bg-gray-100/50 rounded-2xl"
        >
          <MagnifyingGlassIcon className="size-5 text-slate-700" />
          Search for your's "dev"
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
