import data from "./assets/data.json";
import { useMediaQuery } from "react-responsive";

const Gallery = () => {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <section>
        <img src={desktop ? data.milk.desktop : data.milk.mobile} />
        <img src={desktop ? data.plate.desktop : data.plate.mobile} />
        <img src={desktop ? data.cone.desktop : data.cone.mobile} />
        <img src={desktop ? data.cube.desktop : data.cube.mobile} />
      </section>
    </>
  );
};

export default Gallery;
