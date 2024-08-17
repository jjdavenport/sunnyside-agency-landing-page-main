import data from "./assets/data.json";

const Transform = () => {
  return (
    <>
      <article className="flex flex-1 flex-col justify-center gap-4 p-4 text-center md:h-full md:text-left">
        <span className="font-fraunces text-4xl">{data.transform.span}</span>
        <p className="font-barlow">{data.transform.p}</p>
        <a className="font-fraunces uppercase" href="#">
          {data.transform.a}
        </a>
      </article>
    </>
  );
};

export default Transform;
