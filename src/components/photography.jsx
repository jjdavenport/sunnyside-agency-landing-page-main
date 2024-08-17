import data from "./assets/data.json";

const Photography = () => {
  return (
    <article className="flex h-full flex-col gap-4 bg-orangeMobile bg-cover bg-center bg-no-repeat p-4 text-center md:bg-orangeDesktop">
      <span className="font-fraunces text-4xl">{data.photography.span}</span>
      <p className="font-barlow">{data.photography.p}</p>
    </article>
  );
};

export default Photography;
