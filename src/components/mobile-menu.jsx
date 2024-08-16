import data from "./assets/data.json";

const MobileMenu = () => {
  return (
    <>
      <dialog className="flex flex-col">
        <ul>
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
            <button>{data.menu.button}</button>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default MobileMenu;
