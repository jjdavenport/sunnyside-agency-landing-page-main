import data from "./assets/data.json";

const GraphicDesign = () => {
  return (
    <>
      <article className="flex h-1/2 flex-col justify-end gap-4 bg-cherryMobile bg-cover bg-center bg-no-repeat p-12 text-center md:h-auto md:bg-cherryDesktop md:p-10">
        <span className="font-fraunces text-4xl font-black text-darkCyan">
          {data.graphicDesign.span}
        </span>
        <p className="font-barlow text-lg font-semibold text-darkCyan">
          {data.graphicDesign.p}
        </p>
      </article>
    </>
  );
};

export default GraphicDesign;
