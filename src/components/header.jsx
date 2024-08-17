import Nav from "./nav";
import data from "./assets/data.json";

const Header = () => {
  return (
    <>
      <header className="flex h-screen flex-col bg-headerMobile bg-cover bg-center bg-no-repeat md:bg-headerDesktop">
        <Nav />
        <div className="flex flex-1 flex-col items-center justify-end">
          <h1 className="font-fraunces text-4xl uppercase text-white">
            {data.header.h1}
          </h1>
          <button>
            <img src={data.header.button} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
