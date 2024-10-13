import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();

  return (
    <div className="">
      <h1 className="text-xl md:text-3xl font-medium">
        Profile Page for {userId}
      </h1>
      <div className="flex flex-col md:flex-row">
        <img
          src="jssssssssssajk"
          alt="RUshikesh profile"
          className="w-20 h-20 rounded-full animate-pulse bg-slate-200"
        />
        <div>
          <p>Rushikesh Wani</p>
          <p>rushi@gmail.com</p>
          <p>Male</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
