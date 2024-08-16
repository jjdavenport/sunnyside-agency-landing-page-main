import data from "./assets/data.json";

const StandOut = () => {
  return (
    <>
      <article>
        <span>{data.standOut.span}</span>
        <p>{data.standOut.p}</p>
        <a href="#">{data.standOut.a}</a>
      </article>
    </>
  );
};

export default StandOut;
