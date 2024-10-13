import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  XCircleIcon,
  UserPlusIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import {} from "@heroicons/react/24/solid";

const UserCard = ({ userData }) => {
  const { _id, firstName, lastName, about, userId, photoUrl, skills } =
    userData;
  return (
    <div className="border border-gray-400 bg-white rounded-lg shadow-sm p-2">
      <div className="flex item-center gap-2 mb-5">
        <div className="">
          <img
            className="w-20 h-20 object-cover rounded-full bg-slate-200"
            src={`${photoUrl}`}
            // alt={firstName}
          />
          <p className="text-sm text-center text-gray-600">@{userId}</p>
        </div>

        <div>
          <p className="font-medium text-xl">
            {firstName} {lastName}
          </p>
          <p className="text-sm">{about}</p>
          <div className="h-12 flex items-center gap-1 flex-wrap">
            <span className="text-sm">Skills : </span>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 rounded-md text-sm bg-slate-200"
                >
                  #{skill}
                </span>
              ))
            ) : (
              <span className=""> --</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-around item-center">
        <button className="flex flex-col items-center">
          <UserPlusIcon className="size-9 text-green-700 bg-slate-100 hover:bg-green-100 rounded-full p-2" />
          <p className="">Interested</p>
        </button>
        <button className="flex flex-col items-center">
          <HeartIcon className="size-9 text-red-700 bg-slate-100 hover:bg-red-100 rounded-full p-2" />
          <p className="">Like</p>
        </button>
        <button className="flex flex-col items-center">
          <XCircleIcon className="size-9 text-zinc-800 bg-slate-100 hover:bg-zinc-100 rounded-full p-2" />
          {/* <MinusCircleIcon className="size-9 bg-slate-100 rounded-full p-2" /> */}
          <p className="">Ignore</p>
        </button>
        <button className="flex flex-col items-center">
          <ExclamationCircleIcon className="size-9 text-blue-700 bg-slate-100 hover:bg-blue-100 rounded-full p-2" />
          {/* <MinusCircleIcon className="size-9 bg-slate-100 rounded-full p-2" /> */}
          <p className="">More</p>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
