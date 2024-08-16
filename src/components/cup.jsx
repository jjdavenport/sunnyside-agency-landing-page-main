import data from "./assets/data.json";
import { useMediaQuery } from "react-responsive";

const Cup = () => {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <img src={desktop ? data.cup.desktop : data.cup.mobile} alt={data.cup} />
  );
};

export default Cup;
