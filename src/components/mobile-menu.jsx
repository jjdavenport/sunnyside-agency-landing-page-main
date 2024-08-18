import data from "./assets/data.json";

const MobileMenu = () => {
  return (
    <>
      <dialog className="absolute top-14 z-10 flex w-11/12 flex-col items-center p-8 text-center text-lg">
        <ul className="flex flex-col gap-6 font-barlow font-semibold text-grayishBlue">
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
            <button className="rounded-full bg-yellow px-6 py-2 font-fraunces font-bold uppercase text-veryDarkBlue">
              {data.menu.button}
            </button>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default MobileMenu;
