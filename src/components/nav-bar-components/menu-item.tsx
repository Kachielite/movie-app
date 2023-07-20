import { FC } from "react";
import { useAppSelector } from "../../utils/store/hooks";

interface Props {
  name: string;
}

const MenuItem: FC<Props> = ({ name }) => {
  const selection = useAppSelector((state) => state.selection.value);

  return (
    <p
      className={`pb-[0.45rem] text-xl lg:text-[1.5rem] font-semibold border-b-2 border-black hover:font-bold hover:text-primary hover:border-primary ${
        name.toLowerCase().includes(selection.toLowerCase())
          ? "font-bold text-primary border-primary"
          : "text-primaryText"
      }`}
    >
      {name}
    </p>
  );
};

export default MenuItem;
