import Nav from "./nav";
import data from "./assets/data.json";

const Header = () => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <header className="font-lg relative flex h-screen flex-col bg-headerMobile bg-cover bg-center bg-no-repeat md:bg-headerDesktop">
        <Nav />
        <div className="absolute top-1/4 flex w-full flex-col items-center gap-24 md:gap-56">
          <h1 className="text-center font-fraunces text-5xl font-black uppercase text-white md:text-7xl">
            {data.header.h1}
          </h1>
          <button onClick={scrollDown}>
            <img src={data.header.button} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
