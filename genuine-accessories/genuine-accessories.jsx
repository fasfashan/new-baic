import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CtaSection from "../src/components/CtaSection";
import AccessoriesCards from "../src/components/AccessoriesCards";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";

function App() {
  const [selectedModel, setSelectedModel] = useState("BJ30");
  const modelOptions = [
    { value: "BJ30", label: "BJ30" },
    { value: "BJ40 PLUS", label: "BJ40 Plus" },
    { value: "X55", label: "X55" },
    { value: "Arcfox", label: "Arcfox (Coming soon)" },
  ];

  const accessoryDataByModel = {
    BJ30: [
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
        model: "BJ30",
        title: "BJ30 Luggage Box - Side Backpack",
        price: "Rp 3,882,800",
        image: "/BJ30 Luggage Box - Side Net Backpack.png",
        installedImage:
          "/BJ30 Accessories - Luggage Box Side Backpack-installed.png",
        link: "/contact/index.html",
      },
      {
        id: 4,
        model: "BJ30",
        title: "BJ30 Steel Tube Door",
        price: "Rp 9,421,900",
        image: "/BJ30 Accessories - Roof Rack Upper.png",
        installedImage: "/BJ30 Accessories - Roof Rack Upper.webp",
        link: "/contact/index.html",
      },
    ],
    "BJ40 PLUS": [
      {
        id: 1,
        model: "BJ40 PLUS",
        title: "BJ40 Luggage Box - Side Backpack",
        price: "Rp 3,882,800",
        image: "/BJ40 Plus Accessories - Luggage Box Side Backpac.png",
        installedImage:
          "/BJ40 Plus Accessories - Luggage Box Side Backpack-installed.jpg",
        link: "/contact/index.html",
      },
      {
        id: 2,
        model: "BJ40 PLUS",
        title: "BJ40 Steel Tube Door",
        price: "Rp 9,421,900",
        image: "/BJ40 Plus Tubular Door.png",
        installedImage: "/BJ40 Plus Tubular Door-installed.png",
        link: "/contact/index.html",
      },
    ],
    X55: [
      {
        id: 1,
        model: "X55",
        title: "X55 Roof Rack Upper",
        price: "Rp 9,673,000",
        image: "/BJ30 Accessories - Roof Rack Upper.png",
        installedImage: "/BJ30 Accessories - Roof Rack Upper.webp",
        link: "/contact/index.html",
      },
      {
        id: 2,
        model: "X55",
        title: "X55 Luggage Box - Side Net Backpack",
        price: "Rp 4,890,000",
        image: "/BJ30 Luggage Box - Side Net Backpack.png",
        installedImage:
          "/BJ30 Accessories - Luggage Box Side Backpack-installed.png",
        link: "/contact/index.html",
      },
      {
        id: 3,
        model: "X55",
        title: "X55 Luggage Box - Side Backpack",
        price: "Rp 3,882,800",
        image: "/BJ30 Luggage Box - Side Net Backpack.png",
        installedImage:
          "/BJ30 Accessories - Luggage Box Side Backpack-installed.png",
        link: "/contact/index.html",
      },
      {
        id: 4,
        model: "X55",
        title: "X55 Steel Tube Door",
        price: "Rp 9,421,900",
        image: "/BJ30 Accessories - Roof Rack Upper.png",
        installedImage: "/BJ30 Accessories - Roof Rack Upper.webp",
        link: "/contact/index.html",
      },
    ],
  };

  const carImageByModel = {
    BJ30: "/bg-aksesoris.jpg",
    "BJ40 PLUS": "/bj40-plus/flame_red/_0.png",
    X55: "/x55/red_black/_0.png",
    Arcfox: "/BJ30-explore.png",
  };

  const filteredAccessories = accessoryDataByModel[selectedModel] || [];

  return (
    <>
      <Header alwaysWhite />
      <ButtonChat />

      {/* Accessories Section */}
      <section className="py-16 mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h2 className="md:text-3xl text-2xl font-bold text-center text-gray-900 mb-6">
            Genuine Accessories
          </h2>

          {/* Filter Dropdown */}
          <div className="mb-6 flex justify-center">
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full md:w-64 px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-neutral-700"
            >
              {modelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Model Image */}
        {selectedModel !== "Arcfox" && (
          <div className="mb-10">
            <img
              src={carImageByModel[selectedModel]}
              alt={`${selectedModel} preview`}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}

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

      <Footer />
    </>
  );
}

export default App;
