import data from "./assets/data.json";

const Transform = () => {
  return (
    <>
      <article>
        <span>{data.transform.span}</span>
        <p>{data.transform.p}</p>
        <a href="#">{data.transform.a}</a>
      </article>
    </>
  );
};

export default Transform;
