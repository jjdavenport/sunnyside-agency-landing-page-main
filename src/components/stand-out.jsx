import data from "./assets/data.json";

const StandOut = () => {
  return (
    <>
      <article className="flex flex-1 flex-col justify-center gap-4 p-4 text-center md:h-full md:p-10 md:text-left">
        <span className="font-fraunces text-4xl font-black">
          {data.standOut.span}
        </span>
        <p className="font-barlow font-semibold text-grayishBlue">
          {data.standOut.p}
        </p>
        <a
          className="relative w-fit font-fraunces font-bold uppercase after:absolute after:bottom-[3%] after:left-[-5%] after:right-[-5%] after:-z-10 after:h-[35%] after:rounded-full after:bg-softRed after:bg-opacity-40 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:bg-opacity-100"
          href="#"
        >
          {data.standOut.a}
        </a>
      </article>
    </>
  );
};

export default StandOut;
