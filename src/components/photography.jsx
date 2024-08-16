import data from "./assets/data.json";

const Photography = () => {
  return (
    <article className="bg-orangeMobile md:bg-orangeDesktop">
      <span>{data.photography.span}</span>
      <p>{data.photography.p}</p>
    </article>
  );
};

export default Photography;
