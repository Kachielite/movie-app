import { FC } from "react";
import { Search } from "../Icon-components";

const SearchBar: FC = () => {
  return (
    <div className="flex flex-row justify-between space-x-[9.5rem] bg-[#21242D] px-[1.56rem] py-[1rem] border-[0.05rem] border-[rgba(249,_249,_249,_0.10)] rounded-[0.75rem] w-full lg:w-[28.69rem]">
      <div className="flex flex-row space-x-[0.94rem] w-full">
        <Search />
        <input
          className="text-[1.125rem] font-semibold text-[rgba(249,_249,_249,_0.67)] bg-[#21242D] outline-none w-full"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
