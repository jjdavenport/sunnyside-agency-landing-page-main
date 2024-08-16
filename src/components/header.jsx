import Nav from "./nav";
import data from "./assets/data.json";

const Header = () => {
  return (
    <>
      <header className="h-screen bg-headerMobile md:bg-headerDesktop">
        <Nav />
        <h1>{data.header.h1}</h1>
        <button>
          <img src={data.header.button} />
        </button>
      </header>
    </>
  );
};

export default Header;
