import data from "./assets/data.json";
import { useMediaQuery } from "react-responsive";

const Egg = () => {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <img
        className="md:h-full md:w-full md:object-cover"
        src={desktop ? data.egg.desktop : data.egg.mobile}
        alt={data.egg}
      />
    </>
  );
};

export default Egg;
