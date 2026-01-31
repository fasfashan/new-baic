import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CtaSection from "../src/components/CtaSection";
import AccessoriesCards from "../src/components/AccessoriesCards";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";

function App() {
  const [selectedModel, setSelectedModel] = useState("BJ30");

  const accessories = [
    {
      id: 1,
      model: "BJ30",
      title: "BJ30 Roof Rack Upper",
      price: "Rp 9,673,000",
      image: "/BJ30 Accessories - Roof Rack Upper.png",
      installedImage: "/BJ30 Accessories - Roof Rack Upper.webp",
      link: "/contact/index.html",
    },
    {
      id: 2,
      model: "BJ30",
      title: "BJ30 Luggage Box - Side Net Backpack",
      price: "Rp 4,890,000",
      image: "/BJ30 Luggage Box - Side Net Backpack.png",
      installedImage:
        "/BJ30 Accessories - Luggage Box Side Backpack-installed.png",
      link: "/contact/index.html",
    },
    {
      id: 3,
      model: "BJ40 PLUS",
      title: "BJ40 Luggage Box - Side Backpack",
      price: "Rp 3,882,800",
      image: "/BJ40 Plus Accessories - Luggage Box Side Backpac.png",
      installedImage:
        "/BJ40 Plus Accessories - Luggage Box Side Backpack-installed.jpg",
      link: "/contact/index.html",
    },
    {
      id: 4,
      model: "BJ40 PLUS",
      title: "BJ40 Steel Tube Door",
      price: "Rp 9,421,900",
      image: "/BJ40 Plus Tubular Door.png",
      installedImage: "/BJ40 Plus Tubular Door-installed.png",
      link: "/contact/index.html",
    },
  ];

  const filteredAccessories = accessories.filter(
    (accessory) => accessory.model === selectedModel,
  );

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div
        className="relative  min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg-aksesoris.jpg')",
        }}
      >
        <div className="absolute inset-0 "></div>
        <h1 className="relative text-white text-5xl md:text-6xl font-bold">
          Genuine Accessories
        </h1>
      </div>

      {/* Accessories Section */}
      <section className="py-16 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Accessories
          </h2>

          {/* Filter Dropdown */}
          <div className="mb-8">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full md:w-64 px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-neutral-700"
            >
              <option value="BJ30">BJ30</option>
              <option value="BJ40 PLUS">BJ40 Plus</option>
              <option value="Arcfox">Arcfox (Coming soon)</option>
            </select>
          </div>

          {/* Accessories Grid */}
          <AccessoriesCards accessories={filteredAccessories} />

          {filteredAccessories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">
                No accessories available for the selected model.
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
