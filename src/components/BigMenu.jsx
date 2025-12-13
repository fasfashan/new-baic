import BJ40 from "../assets/BJ40-plus.png";
import BJ30 from "../../public/BJ30-header.png";
import X55 from "../assets/BAIC-X55-II.png";
import X55Lite from "../../public/X55-lite-header.png";
import { useState } from "react";

const BigMenu = () => {
  const [activeSeries, setActiveSeries] = useState("BJ Series");

  const handleSeriesClick = (series) => {
    setActiveSeries(series);
  };

  // Specifications data
  const specs = {
    BJ30: { wheelbase: "2820", length: "4730", height: "1790" },
    "BJ40 PLUS": { wheelbase: "2745", length: "4465", height: "1871" },
    "X55 II Lite": { wheelbase: "2735", length: "4620", height: "1680" },
    "X55 II Prime": { wheelbase: "2735", length: "4620", height: "1680" },
    "X55 II": { wheelbase: "2735", length: "4620", height: "1680" },
  };

  // Helper to get base model name for specs mapping
  const getBaseModel = (name) => {
    if (name.startsWith("BJ30")) return "BJ30";
    if (name.startsWith("BJ40 PLUS")) return "BJ40 PLUS";
    if (name.startsWith("X55 II Lite")) return "X55 II Lite";
    if (name.startsWith("X55 II Prime")) return "X55 II Prime";
    if (name.startsWith("X55 II")) return "X55 II";
    return name;
  };

  // Vehicle data structure
  const vehicles = {
    "BJ Series": [
      {
        name: "BJ30 Type 1",
        image: BJ30,
        exploreLink: "/BJ30/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ30 Type 2",
        image: BJ30,
        exploreLink: "/BJ30/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ40 PLUS Type 1",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ40 PLUS Type 2",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
    ],
    "X Series": [
      {
        name: "X55 II Lite",
        image: X55,
        exploreLink: "/X55-Models/index.html",
        brochureLink: "/brochure-x55.pdf",
      },
      {
        name: "X55 II Prime",
        image: X55,
        exploreLink: "/X55-Models/index.html",
        brochureLink: "/brochure-x55.pdf",
      },
    ],
    Arcfox: [
      {
        name: "BJ30 Type 1",
        image: BJ30,
        exploreLink: "/BJ30/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ30 Type 2",
        image: BJ30,
        exploreLink: "/BJ30/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ40 PLUS Type 1",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ40 PLUS Type 2",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
    ],
  };

  return (
    <div
      className="border-b fixed top-[72px] left-0 right-0 z-40 
     border-gray-400 w-full bg-white shadow-lg"
    >
      <div className="max-w-6xl md:px-8 px-5 m-auto py-8">
        {/* Series Tabs */}
        <div className="flex gap-8 mb-6 overflow-x-auto scrollbar-hide">
          <button
            className={`font-semibold text-lg whitespace-nowrap ${
              activeSeries === "BJ Series"
                ? "border-b-2 border-red-500 text-red-500 pb-2"
                : "text-gray-700 hover:text-gray-900 pb-2"
            }`}
            onClick={() => handleSeriesClick("BJ Series")}
          >
            BJ Series
          </button>
          <button
            className={`font-semibold text-lg whitespace-nowrap ${
              activeSeries === "X Series"
                ? "border-b-2 border-red-500 text-red-500 pb-2"
                : "text-gray-700 hover:text-gray-900 pb-2"
            }`}
            onClick={() => handleSeriesClick("X Series")}
          >
            X Series
          </button>
          <button
            className={`font-semibold text-lg whitespace-nowrap ${
              activeSeries === "Arcfox"
                ? "border-b-2 border-red-500 text-red-500 pb-2"
                : "text-gray-700 hover:text-gray-900 pb-2"
            }`}
            onClick={() => handleSeriesClick("Arcfox")}
          >
            Arcfox
          </button>
        </div>

        {/* Vehicles Grid: 4 columns on large screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vehicles[activeSeries].map((vehicle) => (
            <div key={vehicle.name} className="flex flex-col">
              <img
                className="w-full h-auto"
                src={vehicle.image}
                alt={vehicle.name}
              />
              <h2 className="text-xl text-red-500 font-medium mt-2">
                BAIC {vehicle.name}
              </h2>

              {/* No inline type badges; types represented as separate products */}

              {/* Specifications */}
              <div className="mt-3 bg-gray-50 rounded-lg p-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Wheelbase
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {specs[getBaseModel(vehicle.name)].wheelbase}
                    </p>
                    <p className="text-[9px] text-gray-400">MM</p>
                  </div>
                  <div className="border-l border-r border-gray-200">
                    <p className="text-[10px] text-gray-500 uppercase">
                      Length
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {specs[getBaseModel(vehicle.name)].length}
                    </p>
                    <p className="text-[9px] text-gray-400">MM</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Height
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      {specs[getBaseModel(vehicle.name)].height}
                    </p>
                    <p className="text-[9px] text-gray-400">MM</p>
                  </div>
                </div>
              </div>

              <div className="flex mt-4 gap-2 text-xs">
                <a
                  className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                  href={vehicle.exploreLink}
                >
                  SEE DETAILS
                </a>
                <a
                  className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                  href={`/book-a-test-drive/index.html?model=${vehicle.name
                    .toLowerCase()
                    .replace(" ", "")}`}
                >
                  BOOK A TEST DRIVE
                </a>
              </div>
              <div className="flex mt-2 text-xs">
                <a
                  className="py-3 w-full text-center hover:bg-gray-100 transition-all border border-gray-400 rounded-xl"
                  href={vehicle.brochureLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigMenu;
