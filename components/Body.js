import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
const Body = () => {
  return (
    <>
      <form className="flex flex-col items-center mt-40">
        <Image
          src="/google.png"
          width={300}
          height={300}
          className="object-cover"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2x">
          <AiOutlineSearch className="h-5 text-gray-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MdKeyboardVoice className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky </button>
        </div>
      </form>
    </>
  );
};

export default Body;
