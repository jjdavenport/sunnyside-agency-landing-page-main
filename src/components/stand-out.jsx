import data from "./assets/data.json";

const StandOut = () => {
  return (
    <>
      <article className="flex h-full flex-col justify-center gap-4 p-4 text-center md:text-left">
        <span className="font-fraunces text-4xl">{data.standOut.span}</span>
        <p className="font-barlow">{data.standOut.p}</p>
        <a className="font-fraunces uppercase" href="#">
          {data.standOut.a}
        </a>
      </article>
    </>
  );
};

export default StandOut;
