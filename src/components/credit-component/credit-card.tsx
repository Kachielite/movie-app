import { FC } from "react";
import { BASE_IMAGE_URL } from "../../utils/services";
import profile from "../../assets/profile.png";
import { Link, useLocation } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  job: string;
  image: string;
}

const CreditCard: FC<Props> = ({ id, name, job, image }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={`/person/${id}`}
      className={`group ${
        pathname.includes("person")
          ? "w-full h-[34rem] md:w-[12.16rem]  md:h-[26.06rem]"
          : "w-[12.16rem]  h-[26.06rem]"
      }  border-2 border-black mb-2 hover:border-primary transition-all duration-500 ease-in  rounded-[1.25rem] overflow-hidden shadow-lg flex-shrink-0 text-primaryText`}
    >
      <img
        className="w-full h-[70%] object-cover object-top"
        src={image ? `${BASE_IMAGE_URL}${image}` : profile}
        alt={name}
      />
      <div className="px-1.5 py-4 h-[30%] text-primaryText transition-all duration-500 ease-in bg-black group-hover:bg-primary">
        <div className="font-bold text-xl mb-2 text-primaryText group-hover:text-black">
          {pathname.includes("person") ? name : job}
        </div>
        {!pathname.includes("person") && (
          <p className="text-gray-700 text-base text-secondary group-hover:text-black">
            {name}
          </p>
        )}
      </div>
    </Link>
  );
};

export default CreditCard;
