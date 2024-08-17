import Egg from "./components/egg";
import "./App.css";
import Cup from "./components/cup";
import Photography from "./components/photography";
import GraphicDesign from "./components/graphic-design";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Header from "./components/header";
import Testimonials from "./components/testimonials";
import Socials from "./components/socials";
import Transform from "./components/transform";
import StandOut from "./components/stand-out";
import { useMediaQuery } from "react-responsive";

function App() {
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {desktop ? (
        <>
          <Header />
          <section className="grid grid-cols-2 grid-rows-3">
            <Transform />
            <Egg />
            <Cup />
            <StandOut />
            <GraphicDesign />
            <Photography />
          </section>
          <Testimonials />
          <Gallery />
          <Socials />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <section className="flex h-screen flex-col">
            <Egg />
            <Transform />
          </section>
          <section className="flex h-screen flex-col">
            <Cup />
            <StandOut />
          </section>
          <GraphicDesign />
          <Photography />
          <Testimonials />
          <Gallery />
          <Socials />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
