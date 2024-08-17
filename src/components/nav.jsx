import data from "./assets/data.json";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      {desktop ? (
        <nav className="font-barlow flex justify-between p-4">
          <img src={data.nav.logo} />
          <ul className="flex gap-4 text-white">
            <li>
              <a href="#">{data.menu.li1}</a>
            </li>
            <li>
              <a href="#">{data.menu.li2}</a>
            </li>
            <li>
              <a href="#">{data.menu.li3}</a>
            </li>
            <li>
              <button className="rounded-full bg-white px-4 text-black">
                {data.menu.button}
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="flex justify-between p-4">
          <img src={data.nav.logo} />
          <button>
            <img src={data.nav.mobileButton} />
          </button>
        </nav>
      )}
    </>
  );
};

export default Nav;
