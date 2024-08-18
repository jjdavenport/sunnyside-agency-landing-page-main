import data from "./assets/data.json";

const Photography = () => {
  return (
    <article className="flex h-1/2 flex-col justify-end gap-4 bg-orangeMobile bg-cover bg-center bg-no-repeat p-12 text-center md:h-auto md:bg-orangeDesktop md:p-10">
      <span className="font-fraunces text-4xl font-black text-darkBlue">
        {data.photography.span}
      </span>
      <p className="font-barlow text-lg font-semibold text-darkBlue">
        {data.photography.p}
      </p>
    </article>
  );
};

export default Photography;
