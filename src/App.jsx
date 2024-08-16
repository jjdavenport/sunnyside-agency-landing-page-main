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

function App() {
  return (
    <>
      <Socials />
      <Testimonials />
      <Header />
      <Egg />
      <Cup />
      <Photography />
      <GraphicDesign />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
