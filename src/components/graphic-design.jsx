import data from "./assets/data.json";

const GraphicDesign = () => {
  return (
    <>
      <article className="flex h-full flex-col gap-4 bg-cherryMobile bg-cover bg-center bg-no-repeat p-4 text-center md:bg-cherryDesktop">
        <span className="font-fraunces text-4xl">
          {data.graphicDesign.span}
        </span>
        <p className="font-barlow">{data.graphicDesign.p}</p>
      </article>
    </>
  );
};

export default GraphicDesign;
