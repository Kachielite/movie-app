import { FC } from "react";

interface Props {
  name: string;
}

const MenuItem: FC<Props> = ({ name }) => {
  return (
    <p className=" text-primaryText text-xl lg:text-[1.5rem] font-semibold border-b-2 border-black hover:font-bold hover:text-primary hover:border-primary">
      {name}
    </p>
  );
};

export default MenuItem;
