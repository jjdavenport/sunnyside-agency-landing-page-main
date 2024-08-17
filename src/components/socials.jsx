import data from "./assets/data.json";

const Socials = () => {
  return (
    <>
      <section className="bg-moderateCyan flex flex-col items-center gap-10 p-4">
        <img src={data.socials.logo} />
        <ul className="font-barlow flex gap-4">
          <li>
            <a className="hover:text-white" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Projects
            </a>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li>
            <a href="">
              <img src={data.socials.facebook} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={data.socials.instagram} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={data.socials.twitter} />
            </a>
          </li>
          <li>
            <a href="">
              <img src={data.socials.pinterest} />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Socials;
