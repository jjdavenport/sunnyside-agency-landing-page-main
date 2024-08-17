import data from "./assets/data.json";

const MobileMenu = () => {
  return (
    <>
      <dialog className="absolute top-14 z-10 flex w-5/6 flex-col items-center p-8 text-center">
        <ul className="font-barlow flex flex-col gap-6">
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
            <button className="font-fraunces bg-yellow rounded-full px-6 py-2 uppercase">
              {data.menu.button}
            </button>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default MobileMenu;
