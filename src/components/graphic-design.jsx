import data from "./assets/data.json";

const GraphicDesign = () => {
  return (
    <>
      <article className="flex h-screen flex-col justify-end gap-4 bg-cherryMobile bg-cover bg-center bg-no-repeat p-12 text-center md:h-auto md:bg-cherryDesktop md:p-4">
        <span className="font-fraunces text-4xl">
          {data.graphicDesign.span}
        </span>
        <p className="font-barlow">{data.graphicDesign.p}</p>
      </article>
    </>
  );
};

export default GraphicDesign;
