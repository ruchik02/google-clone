import React from "react";
import { User } from "./User";

export const Header = () => {
  return (
    <header className="flex justify-between p-3 text-sm text-gray-700">
      <div className="flex space-x-3 items-center ">
        <p className="link">About</p>
        <p className="link">Stores</p>
      </div>
      <div className="flex space-x-5 items-center ">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <User />
      </div>
    </header>
  );
};
