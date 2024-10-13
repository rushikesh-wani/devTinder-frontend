import React from "react";
import UserCard from "../components/UserCard";
import users from "../utils/users";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <div className="mb-5">
        <h1 className="text-xl md:text-3xl font-medium">Records</h1>
        <div className="flex w-full justify-evenly my-2">
          <div className="flex flex-col items-center">
            <p className="font-serif text-2xl md:text-4xl font-bold">500+</p>
            <p className="text-sm md:text-base">My Connections</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-serif text-2xl md:text-4xl font-bold">108</p>
            <p className="text-sm md:text-base">Total Likes</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-serif text-2xl md:text-4xl font-bold">76</p>
            <p className="text-sm md:text-base">Request Pending</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-400"></hr>
      <Search />

      <h1 className="text-2xl font-bold mb-5">
        Find your matching <i>"dev"</i>
      </h1>

      {/* Main body container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user._id} userData={user} />
        ))}
      </div>
    </>
  );
};

export default Home;
