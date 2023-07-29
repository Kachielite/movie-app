import { Dispatch, FC, SetStateAction, useState } from "react";
import { Menu, Search } from "../Icon-components";
import { useAppDispatch } from "../../utils/store/hooks";
import { useNavigate } from "react-router-dom";
import { cleanupCategories } from "../../utils/store/slides/movie";

interface Props {
  open: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: FC<Props> = ({ open }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchHandler = () => {
    dispatch(cleanupCategories("search_results"));
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="flex flex-row space-x-2.5  h-full pt-4 lg:pt-0 justify-end items-center w-full lg:w-fit">
      <button onClick={() => open(true)} className="block lg:hidden ">
        <Menu />
      </button>
      <div className="flex flex-row justify-between items-center px-[1.56rem] py-[1rem] space-x-[9.5rem] bg-[#21242D]  border-[0.05rem] border-[rgba(249,_249,_249,_0.10)] rounded-[0.75rem] w-full lg:w-[28.69rem]">
        <div className="flex flex-row space-x-[0.94rem] w-full">
          <div onClick={searchHandler} className="cursor-pointer">
            <Search />
          </div>
          <input
            className="text-[1.125rem] font-semibold text-[rgba(249,_249,_249,_0.67)] bg-[#21242D] outline-none w-full"
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && searchHandler()}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
