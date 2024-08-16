import data from "./assets/data.json";
import testimonials from "./assets/testimonials.json";

const Testimonials = () => {
  return (
    <>
      <section>
        <h2>{data.testimonials.h2}</h2>
        {testimonials.map((i) => (
          <article key={i.p}>
            <img src={i.image} />
            <p>{i.p}</p>
            <span>{i.span}</span>
            <span>{i.span2}</span>
          </article>
        ))}
      </section>
    </>
  );
};

export default Testimonials;
