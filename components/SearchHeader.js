import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { User } from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";
const SearchHeader = () => {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const backPage = () => {
    router.push("/");
  };
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={backPage}
          className="contain hover:cursor-pointer"
          src="/google.png"
          width={120}
          height={40}
          alt="google image"
        />
        <form
          action=""
          className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        >
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <AiOutlineClose
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
            size="1.5rem"
          />
          <MdKeyboardVoice
            className="h-6 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 mr-3 pl-2 cursor-pointer"
            size="2.2rem"
          />
          <AiOutlineSearch
            className="h-6 hidden sm:inline-flex  text-blue-500 cursor-pointer "
            size="1.7rem"
          />
          <button onClick={search} hidden type="submit"></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
