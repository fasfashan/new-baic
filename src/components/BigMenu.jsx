import BJ40 from "../assets/BJ40-plus.png";
import BJ30 from "../../public/BJ30-header.png";
import X55Prime from "../../public/baic x55 prime.png";
import X55Lite from "../../public/baic x55 lite-.png";
import { useState } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BigMenu = () => {
  const [activeSeries, setActiveSeries] = useState("BJ Series");
  const [sliderIndex, setSliderIndex] = useState({
    "BJ Series": 0,
    "X Series": 0,
    Arcfox: 0,
  });

  const handleSeriesClick = (series) => {
    setActiveSeries(series);
  };

  const handleSlide = (direction) => {
    setSliderIndex((prev) => {
      const currentIndex = prev[activeSeries];
      const totalVehicles = vehicles[activeSeries].length;
      const maxIndex = Math.max(0, totalVehicles - 4);

      let newIndex = currentIndex;
      if (direction === "next") {
        newIndex = Math.min(currentIndex + 1, maxIndex);
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }

      return { ...prev, [activeSeries]: newIndex };
    });
  };

  // Specifications data
  const specs = {
    BJ30: { wheelbase: "2820", length: "4730", height: "1790" },
    "BJ40 PLUS": { wheelbase: "2745", length: "4465", height: "1871" },
    "X55 II Lite": { wheelbase: "2735", length: "4620", height: "1680" },
    "X55 II Prime": { wheelbase: "2735", length: "4620", height: "1680" },
    "X55 II": { wheelbase: "2735", length: "4620", height: "1680" },
  };

  const prices = {
    "BJ30 HEV FWD": "Rp 529.000.000,-",
    "BJ30 HEV AWD": "Rp 589.000.000,-",
    "BJ40 PLUS CBU": "Rp 698.000.000,-",
    "BJ40 PLUS CKD": "Rp 710.000.000,-",
    "X55 II Lite": "Rp 390.000.000,-",
    "X55 II Prime": "Rp 439.000.000,-",

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

  const getPrice = (name) => prices[name] || "";

  // Vehicle data structure
  const vehicles = {
    "BJ Series": [
      {
        name: "BJ30 HEV AWD",
        image: BJ30,
        exploreLink: "/bj30-hev-awd/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ30 HEV FWD",
        image: BJ30,
        exploreLink: "/bj30-hev-fwd/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ40 PLUS CBU",
        image: BJ40,
        exploreLink: "/bj40-plus-cbu/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
      {
        name: "BJ40 PLUS CKD",
        image: BJ40,
        exploreLink: "/bj40-plus-ckd/index.html",
        brochureLink: "/brochure-bj40.pdf",
      },
    ],
    "X Series": [
      {
        name: "X55 II Lite",
        image: X55Lite,
        exploreLink: "/x55-ii-lite/index.html",
        brochureLink: "/brochure-x55.pdf",
      },
      {
        name: "X55 II Prime",
        image: X55Prime,
        exploreLink: "/x55-ii-prime/index.html",
        brochureLink: "/brochure-x55.pdf",
      },
    ],
    Arcfox: [],
  };

  const currentIndex = sliderIndex[activeSeries];
  const currentVehicles = vehicles[activeSeries];
  const visibleVehicles = currentVehicles.slice(currentIndex, currentIndex + 4);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < currentVehicles.length - 4;

  return (
    <div className="border-b fixed top-[80px] rounded-md left-1/2 -translate-x-1/2 z-50 max-w-6xl w-full shadow-lg bg-white border-gray-400">
      <div className="md:px-8 px-5 py-6">
        {/* Series Tabs */}
        <div className="flex gap-6 mb-4 overflow-x-auto scrollbar-hide">
          <button
            className={`font-semibold text-sm whitespace-nowrap ${activeSeries === "BJ Series"
              ? "border-b-2 border-red-500 text-red-500 pb-1"
              : "text-gray-700 hover:text-gray-900 pb-1"
              }`}
            onClick={() => handleSeriesClick("BJ Series")}
          >
            BJ Series
          </button>
          <button
            className={`font-semibold text-sm whitespace-nowrap ${activeSeries === "X Series"
              ? "border-b-2 border-red-500 text-red-500 pb-1"
              : "text-gray-700 hover:text-gray-900 pb-1"
              }`}
            onClick={() => handleSeriesClick("X Series")}
          >
            X Series
          </button>
          <button
            className={`font-semibold text-sm whitespace-nowrap ${activeSeries === "Arcfox"
              ? "border-b-2 border-black text-black pb-1"
              : "text-gray-700 hover:text-gray-900 pb-1"
              }`}
            onClick={() => handleSeriesClick("Arcfox")}
          >
            <span>Arcfox</span>
            <span
              className={`ml-2 text-[9px] px-1.5 py-0.5 rounded-full font-semibold ${activeSeries === "Arcfox"
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-700"
                }`}
            >
              Coming soon
            </span>
          </button>
        </div>

        {/* Vehicles Grid: 4 columns with slider controls */}
        {activeSeries === "Arcfox" ? (
          <div
            className="w-full h-48 md:h-72 bg-cover bg-center rounded-lg overflow-hidden flex items-center"
            style={{ backgroundImage: "url(/arcfox-coming-soon.jpg)" }}
          >
            <div className="bg-white bg-opacity-95 px-4 md:px-6 py-4 md:py-6 mx-4 md:mx-8 rounded-lg max-w-md">
              <h2 className="text-base font-bold text-black mb-1">
                Arcfox is coming soon
              </h2>
              <p className="text-sm text-gray-600">Stay tuned for updates</p>
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => handleSlide("prev")}
              disabled={!canGoPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg transition-all ${canGoPrev
                ? "hover:bg-gray-100 cursor-pointer"
                : "opacity-40 cursor-not-allowed"
                }`}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={() => handleSlide("next")}
              disabled={!canGoNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg transition-all ${canGoNext
                ? "hover:bg-gray-100 cursor-pointer"
                : "opacity-40 cursor-not-allowed"
                }`}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Vehicles Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {visibleVehicles.map((vehicle) => (
                <div key={vehicle.name} className="flex flex-col items-center space-y-2">
                  <img
                    className="w-full h-auto"
                    src={vehicle.image}
                    alt={vehicle.name}
                  />
                  <h2 className="text-sm text-red-500 font-medium text-center">
                    BAIC {vehicle.name}
                  </h2>
                  <img
                    src="/Award list BAIC - global.png"
                    alt="BAIC Awards"
                    className="w-full max-w-[180px]"
                  />

                  {/* Specifications */}
                  <div className="bg-gray-50 rounded-lg p-2 w-full">
                    <div className="grid grid-cols-3 gap-1 text-center">
                      <div>
                        <p className="text-[8px] text-gray-500 uppercase">
                          Wheelbase
                        </p>
                        <p className="text-xs font-semibold text-gray-800">
                          {specs[getBaseModel(vehicle.name)].wheelbase}
                        </p>
                        <p className="text-[7px] text-gray-400">MM</p>
                      </div>
                      <div className="border-l border-r border-gray-200">
                        <p className="text-[8px] text-gray-500 uppercase">
                          Length
                        </p>
                        <p className="text-xs font-semibold text-gray-800">
                          {specs[getBaseModel(vehicle.name)].length}
                        </p>
                        <p className="text-[7px] text-gray-400">MM</p>
                      </div>
                      <div>
                        <p className="text-[8px] text-gray-500 uppercase">
                          Height
                        </p>
                        <p className="text-xs font-semibold text-gray-800">
                          {specs[getBaseModel(vehicle.name)].height}
                        </p>
                        <p className="text-[7px] text-gray-400">MM</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-gray-700 text-center">
                    {getPrice(vehicle.name)}
                  </p>

                  <div className="w-full">
                    <Button
                      variant="dark"
                      href={vehicle.exploreLink}
                      className="w-full text-[10px] py-2"
                    >
                      See Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default BigMenu;
