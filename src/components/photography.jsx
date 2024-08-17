import data from "./assets/data.json";

const Photography = () => {
  return (
    <article className="flex h-screen flex-col justify-end gap-4 bg-orangeMobile bg-cover bg-center bg-no-repeat p-12 text-center md:h-auto md:bg-orangeDesktop md:p-4">
      <span className="font-fraunces text-4xl">{data.photography.span}</span>
      <p className="font-barlow">{data.photography.p}</p>
    </article>
  );
};

export default Photography;
