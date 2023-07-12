import { FC } from "react";

interface Props {
  name: string;
}

const MenuItem: FC<Props> = ({ name }) => {
  return (
    <p className="pb-[0.88rem] text-primaryText text-xl lg:text-[1.5rem] font-semibold hover:font-bold hover:text-primary hover:border-primary hover:border-b-2">
      {name}
    </p>
  );
};

export default MenuItem;
