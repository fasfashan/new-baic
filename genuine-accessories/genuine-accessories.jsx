import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CtaSection from "../src/components/CtaSection";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";

function App() {
  const [selectedModel, setSelectedModel] = useState("BJ30");

  const accessories = [
    {
      id: 1,
      model: "BJ30",
      code: "OP0117",
      title: "BJ30 Roof Rack Upper",
      price: "Rp 9,673,000",
      image: "/BJ30 Roof Rack Upper.png",
      link: "/contact/index.html",
    },
    {
      id: 2,
      model: "BJ30",
      code: "OP0118",
      title: "BJ30 Luggage Box - Side Net Backpack",
      price: "Rp 4,890,000",
      image: "/BJ30 Luggage Box - Side Net Backpack.png",
      link: "/contact/index.html",
    },
    {
      id: 3,
      model: "BJ30",
      code: "OP0119",
      title: "BJ30 Luggage Box - Side Backpack",
      price: "Rp 4,439,000",
      image: "/BJ30 Luggage Box - Side Backpack.png",
      link: "/contact/index.html",
    },
    {
      id: 4,
      model: "BJ30",
      code: "OP0120",
      title: "BJ30 Ladder",
      price: "Rp 6,696,000",
      image: "/BJ30 Ladder.png",
      link: "/contact/index.html",
    },
    {
      id: 5,
      model: "BJ30",
      code: "OP0121",
      title: "BJ30 LED Light",
      price: "Rp 8,276,000",
      image: "/BJ30 LED Light.png",
      link: "/contact/index.html",
    },
    {
      id: 6,
      model: "BJ30",
      code: "OP0122",
      title: "BJ30 Pedal Foot Step",
      price: "Rp 2,220,000",
      image: "/BJ30 Pedal Foot Step.png",
      link: "/contact/index.html",
    },
    {
      id: 7,
      model: "BJ30",
      code: "OP0123",
      title: "BJ30 Bumper Front",
      price: "Rp 14,219,000",
      image: "/BJ30 Bumper Front.png",
      link: "/contact/index.html",
    },
    {
      id: 8,
      model: "BJ30",
      code: "OP0124",
      title: "BJ30 Electric Foot Step",
      price: "Rp 11,661,000",
      image: "/BJ30 Electric Foot Step.png",
      link: "/contact/index.html",
    },
    {
      id: 9,
      model: "BJ30",
      code: "OP0125",
      title: "BJ30 Bike Bracket type 1",
      price: "Rp 3,950,000",
      image: "/BJ30 Bike Bracket type 1.png",
      link: "/contact/index.html",
    },
    {
      id: 10,
      model: "BJ30",
      code: "OP0126",
      title: "BJ30 Rear Luggage Box type 2",
      price: "Rp 6,771,000",
      image: "/BJ30 Rear Luggage Box type 2.png",
      link: "/contact/index.html",
    },
    {
      id: 11,
      model: "BJ30",
      code: "OP0129",
      title: "BIKE BRACKET BAR",
      price: "Rp 3,499,000",
      image: "/BIKE BRACKET BAR.png",
      link: "/contact/index.html",
    },
    {
      id: 12,
      model: "BJ30",
      code: "OP0127",
      title: "BJ30 Rear Luggage Box type 1",
      price: "Rp 10,909,000",
      image: "/BJ30 Rear Luggage Box type 1.png",
      link: "/contact/index.html",
    },
    {
      id: 13,
      model: "BJ30",
      code: "OP0128",
      title: "BJ30 Bike Bracket type 2",
      price: "Rp 4,326,000",
      image: "/BJ30 Bike Bracket type 2.png",
      link: "/contact/index.html",
    },
    // BJ40 PLUS
    {
      id: 14,
      model: "BJ40 PLUS",
      code: "OP0003",
      title: "BJ40 Plus Bumper Front Type 2",
      price: "Rp 11,428,000",
      image: "/BJ40 Plus Bumper Front Type 2.png",
      link: "/contact/index.html",
    },
    {
      id: 15,
      model: "BJ40 PLUS",
      code: "OP0004",
      title: "BJ40 Plus Bumper Rear Type 2",
      price: "Rp 11,428,000",
      image: "/BJ40 Plus Bumper Rear Type 2.png",
      link: "/contact/index.html",
    },
    {
      id: 16,
      model: "BJ40 PLUS",
      code: "OP0096",
      title: "BJ40 Plus Bumper Front Type 3",
      price: "Rp 12,037,000",
      image: "/BJ40 Plus Bumper Front Type 3.png",
      link: "/contact/index.html",
    },
    {
      id: 17,
      model: "BJ40 PLUS",
      code: "OP0097",
      title: "BJ40 Plus Bumper Rear Type 3",
      price: "Rp 12,037,000",
      image: "/BJ40 Plus Bumper Rear Type 3.png",
      link: "/contact/index.html",
    },
    {
      id: 18,
      model: "BJ40 PLUS",
      code: "OP0005",
      title: "BJ40 Plus Electric Foot Step",
      price: "Rp 11,849,000",
      image: "/BJ40 Plus Electric Foot Step.png",
      link: "/contact/index.html",
    },
    {
      id: 19,
      model: "BJ40 PLUS",
      code: "OP0081",
      title: "BJ40 Plus LED Light Bar",
      price: "Rp 3,198,000",
      image: "/BJ40 Plus LED Light Bar.png",
      link: "/contact/index.html",
    },
    {
      id: 20,
      model: "BJ40 PLUS",
      code: "OP0014",
      title: "BJ40 Plus Bracket LED Light Bar",
      price: "Rp 1,880,000",
      image: "/BJ40 Plus Bracket LED Light Bar.png",
      link: "/contact/index.html",
    },
    {
      id: 21,
      model: "BJ40 PLUS",
      code: "OP0013",
      title: "BJ40 Plus Snorkel",
      price: "Rp 6,857,000",
      image: "/BJ40 Plus Snorkel.png",
      link: "/contact/index.html",
    },
    {
      id: 22,
      model: "BJ40 PLUS",
      code: "OP0006",
      title: "BJ40 Plus Horse Pedal Front Type 1",
      price: "Rp 1,806,000",
      image: "/BJ40 Plus Horse Pedal Front Type 1.png",
      link: "/contact/index.html",
    },
    {
      id: 23,
      model: "BJ40 PLUS",
      code: "OP0007",
      title: "BJ40 Plus Horse Pedal Rear Type 1",
      price: "Rp 1,806,000",
      image: "/BJ40 Plus Horse Pedal Rear Type 1.png",
      link: "/contact/index.html",
    },
    {
      id: 24,
      model: "BJ40 PLUS",
      code: "OP0109",
      title: "BJ40 Plus Horse Pedal Front Type 2",
      price: "Rp 969,000",
      image: "/BJ40 Plus Horse Pedal Front Type 2.png",
      link: "/contact/index.html",
    },
    {
      id: 25,
      model: "BJ40 PLUS",
      code: "OP0110",
      title: "BJ40 Plus Horse Pedal Rear Type 2",
      price: "Rp 969,000",
      image: "/BJ40 Plus Horse Pedal Rear Type 2.png",
      link: "/contact/index.html",
    },
    {
      id: 26,
      model: "BJ40 PLUS",
      code: "OP0008",
      title: "BJ40 Plus Roof Rack Upper",
      price: "Rp 9,585,000",
      image: "/BJ40 Plus Roof Rack Upper.png",
      link: "/contact/index.html",
    },
    {
      id: 27,
      model: "BJ40 PLUS",
      code: "OP0009",
      title: "BJ40 Plus Ladder",
      price: "Rp 6,857,000",
      image: "/BJ40 Plus Ladder.png",
      link: "/contact/index.html",
    },
    {
      id: 28,
      model: "BJ40 PLUS",
      code: "OP0015",
      title: "BJ40 Plus Rear Trunk Storage Box",
      price: "Rp 5,714,000",
      image: "/BJ40 Plus Rear Trunk Storage Box.png",
      link: "/contact/index.html",
    },
    {
      id: 29,
      model: "BJ40 PLUS",
      code: "OP0017",
      title: "BJ40 Plus Trailer Towing Ball",
      price: "Rp 4,570,000",
      image: "/BJ40 Plus Trailer Towing Ball.png",
      link: "/contact/index.html",
    },
    {
      id: 30,
      model: "BJ40 PLUS",
      code: "OP0018",
      title: "BJ40 Plus Tent side of Car",
      price: "Rp 11,428,000",
      image: "/BJ40 Plus Tent side of Car.png",
      link: "/contact/index.html",
    },
    {
      id: 31,
      model: "BJ40 PLUS",
      code: "OP0019",
      title: "BJ40 Plus Tent on the roof",
      price: "Rp 22,857,000",
      image: "/BJ40 Plus Tent on the roof.png",
      link: "/contact/index.html",
    },
    {
      id: 32,
      model: "BJ40 PLUS",
      code: "OP0020",
      title: "BJ40 Plus Air Compressor 150Psi",
      price: "Rp 3,428,000",
      image: "/BJ40 Plus Air Compressor 150Psi.png",
      link: "/contact/index.html",
    },
    {
      id: 33,
      model: "BJ40 PLUS",
      code: "OP0021",
      title: "BJ40 Plus Recovery Board Set ( 2pcs )",
      price: "Rp 2,857,000",
      image: "/BJ40 Plus Recovery Board Set ( 2pcs ).png",
      link: "/contact/index.html",
    },
    {
      id: 34,
      model: "BJ40 PLUS",
      code: "OP0111",
      title: "BJ40 Plus Door Sill Plate",
      price: "Rp 1,400,000",
      image: "/BJ40 Plus Door Sill Plate.png",
      link: "/contact/index.html",
    },
    {
      id: 35,
      model: "BJ40 PLUS",
      code: "OP0112",
      title: "BJ40 Plus Car Mat Set ( 5 Pcs )",
      price: "Rp 2,500,000",
      image: "/BJ40 Plus Car Mat Set ( 5 Pcs ).png",
      link: "/contact/index.html",
    },
    {
      id: 36,
      model: "BJ40 PLUS",
      code: "OP0113",
      title: "BJ40 Plus Body Cover",
      price: "Rp 1,200,000",
      image: "/BJ40 Plus Body Cover.png",
      link: "/contact/index.html",
    },
    {
      id: 37,
      model: "BJ40 PLUS",
      code: "OP0114",
      title: "BJ40 Plus Cargo Net",
      price: "Rp 400,000",
      image: "/BJ40 Plus Cargo Net.png",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAccessories.map((accessory) => (
              <a
                key={accessory.id}
                href={accessory.link}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
                  <img
                    src={accessory.image}
                    alt={accessory.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Model Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {accessory.model}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-2">{accessory.code}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {accessory.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{accessory.price}</p>
                </div>
              </a>
            ))}
          </div>

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
