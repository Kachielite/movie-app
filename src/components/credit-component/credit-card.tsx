import { FC } from "react";
import { Cast, Crew } from "../../utils/store/type";
import { BASE_IMAGE_URL } from "../../utils/services";

interface Props {
  id: string;
  name: string;
  job: string;
  image: string;
}

const creditCard: FC<Props> = ({ id, name, job, image }) => {
  return (
    <div className="w-fit rounded overflow-hidden shadow-lg">
      <img className="w-fit" src={`${BASE_IMAGE_URL}${image}`} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{job}</p>
      </div>
    </div>
  );
};

export default creditCard;
