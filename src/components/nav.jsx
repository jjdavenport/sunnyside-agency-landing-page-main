import data from "./assets/data.json";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      {desktop ? (
        <nav>
          <img src={data.nav.logo} />
          <ul>
            <li>
              <a href="#">{data.menu.li1}</a>
              <a href="#">{data.menu.li2}</a>
              <a href="#">{data.menu.li3}</a>
              <button>{data.menu.button}</button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <img src={data.nav.logo} />
          <img src={data.nav.mobileButton} />
        </nav>
      )}
    </>
  );
};

export default Nav;
