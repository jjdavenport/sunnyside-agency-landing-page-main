import data from "./assets/data.json";
import { useMediaQuery } from "react-responsive";

const Cup = () => {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <img
      className="md:h-full md:w-full md:object-cover"
      src={desktop ? data.cup.desktop : data.cup.mobile}
      alt={data.cup}
    />
  );
};

export default Cup;
