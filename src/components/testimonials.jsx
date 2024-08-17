import data from "./assets/data.json";
import testimonials from "./assets/testimonials.json";

const Testimonials = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-12 px-8 py-12">
        <h2 className="font-fraunces text-2xl uppercase">
          {data.testimonials.h2}
        </h2>
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-2">
          {testimonials.map((i) => (
            <article
              className="flex flex-col items-center gap-2 text-center"
              key={i.p}
            >
              <img className="w-1/6 rounded-full" src={i.image} />
              <p>{i.p}</p>
              <span>{i.span}</span>
              <span>{i.span2}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
