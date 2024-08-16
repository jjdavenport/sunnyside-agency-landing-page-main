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

function App() {
  return (
    <>
      <Header />
      <Egg />
      <Transform />
      <Cup />
      <StandOut />
      <GraphicDesign />
      <Photography />
      <Testimonials />
      <Gallery />
      <Socials />
      <Footer />
    </>
  );
}

export default App;
