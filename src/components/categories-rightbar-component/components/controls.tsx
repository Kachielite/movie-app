import { FC } from "react";
import { NextBtn, PreviousBtn } from "../../Icon-components";
import { ControlsProps } from "../types";
import { Link } from "react-router-dom";

const Controls: FC<ControlsProps> = ({ title }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full pr-2.5">
      <div className="flex flex-row justify-start items-center space-x-[1.25rem]">
        <p className="text-white text-[1.5rem] font-extrabold">{title}</p>
        {/*<div className="flex flex-row justify-start items-center space-x-[1.25rem]">*/}
        {/*  <button>*/}
        {/*    <PreviousBtn />*/}
        {/*  </button>*/}
        {/*  <button>*/}
        {/*    <NextBtn />*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
      <Link
        to={
          title.includes("Genre")
            ? "/genre"
            : `/category/${title.toLowerCase()}`
        }
        className="flex flex-row justify-start items-center space-x-[1.25rem]"
      >
        <p className="text-[0.94rem] font-bold text-[rgba(249,_249,_249,_0.67)]">
          See More
        </p>
        <NextBtn />
      </Link>
    </div>
  );
};

export default Controls;
