import data from "./assets/data.json";

const Socials = () => {
  return (
    <>
      <section>
        <img src={data.socials.logo} />
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
        <ul>
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
