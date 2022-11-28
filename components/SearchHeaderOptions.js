import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";
import { Search } from "heroicons-react";
import { Photograph } from "heroicons-react";
import { useRouter } from "next/router";

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-7 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        Icon={Search}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={Photograph}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
