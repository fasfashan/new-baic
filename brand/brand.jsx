import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CtaSection from "../src/components/CtaSection";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";


function App() {
  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div
        className="relative  min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/new-bg-for-all.jpg')",
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-center text-white text-2xl md:text-5xl font-bold">
          Our Journey Through Time
        </h1>
      </div>

      {/* Brand Images Gallery */}
      <div className="w-full">
        {[1, 2, 3, 4, 5].map((num) => (
          <img
            key={num}
            src={`/BRAND-${num}.jpeg`}
            alt={`Brand Milestone ${num}`}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>


      <Footer />
    </>
  );
}

export default App;
