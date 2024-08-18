import data from "./assets/data.json";
import testimonials from "./assets/testimonials.json";

const Testimonials = () => {
  return (
    <>
      <section className="col-span-full flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="text-1xl font-fraunces font-bold uppercase text-lightGrayishBlue md:text-2xl">
          {data.testimonials.h2}
        </h2>
        <div className="flex flex-col gap-12 md:grid md:grid-cols-3 md:items-center md:gap-2">
          {testimonials.map((i) => (
            <article
              className="flex flex-col items-center gap-2 text-center"
              key={i.p}
            >
              <img className="w-1/6 rounded-full" src={i.image} />
              <p className="font-barlow text-lg font-semibold text-darkGrayishBlue">
                {i.p}
              </p>
              <span className="font-fraunces text-2xl font-bold">{i.span}</span>
              <span className="font-barlow text-lg font-semibold text-lightGrayishBlue">
                {i.span2}
              </span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
