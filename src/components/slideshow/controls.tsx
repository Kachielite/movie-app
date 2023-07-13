import Btn from "../buttons";
import { CircleBtn, NextBtn, Plus, PreviousBtn } from "../Icon-components";

const Controls = () => {
  return (
    <div className="absolute flex flex-col justify-between h-full w-full py-[1.31rem] px-2.5 lg:px-[1.25rem] rounded-[1.25rem] mt-[2.8rem] bg-black/[0.2]">
      <div className="h-[3.13rem] w-full lg:pl-[1.25rem]">
        <h1 className="text-center lg:text-left font-lato text-[2.5rem] lg:text-[3rem] font-extrabold text-white">
          The Crown
        </h1>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Btn type="arrow">
          <PreviousBtn />
        </Btn>
        <Btn type="arrow">
          <NextBtn />
        </Btn>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <Btn type="secondary">
          <div className="flex flex-row space-x-[0.94rem] justify-center items-center">
            <Plus />
            <p className="hidden lg:block">Watchlist</p>
          </div>
        </Btn>
        <div className="hidden bg-[rgba(249,_249,_249,_0.20)] px-[0.75rem] py-[0.5rem] lg:flex flex-row justify-between items-center space-x-[0.62rem] rounded-[0.31rem]">
          <button>
            <CircleBtn color="#F8B319" />
          </button>
          <button>
            <CircleBtn color="white" />
          </button>
          <button>
            <CircleBtn color="white" />
          </button>
        </div>
        <Btn type="primary">Watch Now</Btn>
      </div>
    </div>
  );
};

export default Controls;
