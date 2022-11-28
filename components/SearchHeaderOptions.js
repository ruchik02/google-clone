import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";
import {BsSearch} from 'react-icons/bs'
import {HiPhoto} from 'react-icons/hi'

const SearchHeaderOptions = () => {
  return (
    <div>
      <SearchHeaderOption title="All" Icon={BsSearch}/>
      <SearchHeaderOption title="Images" Icon={HiPhoto} />
    </div>
  );
};

export default SearchHeaderOptions;
