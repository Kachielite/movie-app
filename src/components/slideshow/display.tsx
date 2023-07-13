import SlideShow from "../../assets/images/slideshow.png";

const Display = () => {
  return (
    <div className="w-full h-full bg-[linear-gradient(0deg,_rgba(22,_24,_30,_0.50)_0%,_rgba(22,_24,_30,_0.50)_100%)] rounded-[1.25rem] mt-[2.8rem] flex justify-center items-center overflow-hidden">
      <img
        src={SlideShow}
        alt="slideshow"
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
};

export default Display;
