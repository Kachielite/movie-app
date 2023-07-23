import { FC } from "react";
import { BASE_IMAGE_URL } from "../../utils/services";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  job: string;
  image: string;
}

const creditCard: FC<Props> = ({ id, name, job, image }) => {
  return (
    <Link
      to={`/person/${id}`}
      className="group w-[12.16rem] h-[26.06rem] border-2 border-black mb-2 hover:border-primary  rounded-[1.25rem] overflow-hidden shadow-lg flex-shrink-0 text-primaryText"
    >
      <img
        className="w-full h-[70%] object-cover "
        src={image ? `${BASE_IMAGE_URL}${image}` : profile}
        alt={name}
      />
      <div className="px-1.5 py-4 h-[30%] text-primaryText transition-all duration-500 bg-black group-hover:bg-primary">
        <div className="font-bold text-xl mb-2 text-primaryText group-hover:text-black">
          {job}
        </div>
        <p className="text-gray-700 text-base text-secondary group-hover:text-black">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default creditCard;
