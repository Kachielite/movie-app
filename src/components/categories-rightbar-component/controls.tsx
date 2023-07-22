import { FC } from "react";
import { NextBtn, PreviousBtn } from "../Icon-components";
import { ControlsProps } from "./types";

const Controls: FC<ControlsProps> = ({ title }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row justify-start items-center space-x-[1.25rem]">
        <p className="text-white text-[1.5rem] font-extrabold">{title}</p>
        <div className="flex flex-row justify-start items-center space-x-[1.25rem]">
          <button>
            <PreviousBtn />
          </button>
          <button>
            <NextBtn />
          </button>
        </div>
      </div>
      <button className="flex flex-row justify-start items-center space-x-[1.25rem]">
        <p className="text-[0.94rem] font-bold text-[rgba(249,_249,_249,_0.67)]">
          See More
        </p>
        <NextBtn />
      </button>
    </div>
  );
};

export default Controls;