import data from "./assets/data.json";

const GraphicDesign = () => {
  return (
    <>
      <article className="bg-cherryMobile md:bg-cherryDesktop">
        <span>{data.graphicDesign.span}</span>
        <p>{data.graphicDesign.p}</p>
      </article>
    </>
  );
};

export default GraphicDesign;
