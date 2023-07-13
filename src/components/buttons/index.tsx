import { FC, ReactNode } from "react";

interface ButtonTheme {
  primary: string;
  secondary: string;
  arrow: string;
}

const Theme: ButtonTheme = {
  primary:
    "bg-primary text-black hover:text-primary border-primary hover:bg-opacity-0 px-[2.94rem] py-[1.19rem]",
  secondary:
    "bg-[rgba(249,_249,_249,_0.20)] border-[rgba(249,_249,_249,_0.20)] text-white hover:bg-black/[.5] hover:border-white px-[1.5rem] lg:px-[2.94rem] py-[1.19rem]",
  arrow:
    "bg-[rgba(249,_249,_249,_0.20)] text-white border-[rgba(249,_249,_249,_0.20)] hover:bg-black/[.5] hover:border-white h-[3.13rem] w-[3.13rem]",
};

interface BtnProps {
  type: string;
  children: ReactNode;
  height?: string;
  width?: string;
  onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ type, children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${
        Theme[type as keyof ButtonTheme]
      } text-[1.125rem] font-lato font-bold rounded-[0.94rem] border-2 flex justify-center items-center`}
    >
      {children}
    </button>
  );
};

export default Btn;
