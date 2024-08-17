import data from "./assets/data.json";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {desktop ? (
        <nav className="font-barlow flex items-center justify-between p-4">
          <div>
            <img src={data.nav.logo} alt="Logo" />
          </div>
          <ul className="flex items-center gap-8 text-white">
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
              <button className="rounded-full bg-white px-4 py-2 text-black hover:bg-opacity-40">
                {data.menu.button}
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <nav className="flex justify-between p-4">
            <img src={data.nav.logo} alt="Logo" />
            <button onClick={toggleMenu}>
              <img src={data.nav.mobileButton} alt="Menu" />
            </button>
          </nav>
          {menuOpen && <MobileMenu />}
        </>
      )}
    </>
  );
};

export default Nav;
