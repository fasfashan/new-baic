import Contact from "../contact/contact";
import Header from "./components/Header";
import VideoHeroSlider from "./components/VideoHeroSlider";
import ExploreCar from "./components/ExploreCar";
import PopupBanner from "./components/PopupBanner";
import AfterSalesSection from "./components/AfterSalesSection";
import NewsSection from "./components/NewsSection";
import AccessoriesSection from "./components/AccessoriesSection";
import CtaSection from "./components/CtaSection";
import ButtonChat from "./components/ButtonChat";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <PopupBanner />
      <Header />
      <VideoHeroSlider />
      <ExploreCar />
      <AfterSalesSection />
      <AccessoriesSection />
      <NewsSection />
      <CtaSection />
      <Footer />
      <ButtonChat />
    </>
  );
}

export default App;
