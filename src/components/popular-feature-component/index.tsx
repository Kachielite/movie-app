import { FC } from "react";
import CardContainer from "./card-container";
import Loki from "../../assets/images/loki.png";

const PopularFeatureComponent: FC = () => {
  return (
    <div className="flex flex-col justify-start items-start mt-[2.75rem] space-y-[1rem] font-lato text-white w-full">
      <h2 className="font-extrabold text-[1.88rem]">Popular on Honey Movies</h2>
      <CardContainer />
    </div>
  );
};

export default PopularFeatureComponent;
