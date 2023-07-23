import CreditCardsContainerComponent from "./credit-cards-container-component";
import { FC } from "react";
import { Cast, Crew } from "../../utils/store/type";

interface Props {
  cast: Cast[];
  crew: Crew[];
  isLoading: boolean;
}

const CreditComponent: FC<Props> = ({ cast, crew, isLoading }) => {
  return (
    <div className="w-full py-10 px-4 md:px-[5.12rem]">
      <h1 className="text-[2.4rem]  text-primaryText font-extrabold mb-5">
        Cast
      </h1>
      <CreditCardsContainerComponent
        cast={cast}
        crew={crew}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CreditComponent;
