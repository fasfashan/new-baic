import { useState } from "react";
import Car360Viewer from "./Car360Viewer";
import { CarFront } from "lucide-react";
import Button from "./Button";
const colors = [
  "#94111B",
  "#ffffff",
  "#000000",
  "#86A9C6",
  "#2E3F2B",
  "#5A603F",
  "#00243A",
];

const colorNamesBJ40 = {
  "#94111B": "Flame Red",
  "#ffffff": "Snow White",
  "#000000": "Jade Black",
  "#86A9C6": "Porcelain Blue",
  "#2E3F2B": "Forest Green",
  "#5A603F": "Army Green",
  "#00243A": "Midnight Blue",
};

const colorToFolderBJ40 = {
  "#94111B": "flame_red",
  "#ffffff": "snow_white",
  "#000000": "jade_black",
  "#86A9C6": "porcelain_blue",
  "#2E3F2B": "forest_green",
  "#5A603F": "army_green",
  "#00243A": "midnight_blue",
};

const colorNamesBJ30 = {
  "#B6D6C9": "Apple Green",
  "#87CEEB": "Blue Sky",
  "#C0C0C0": "Bubble Grey",
  "#000000": "Jade Black",
  "#808080": "Matte Grey",
  "#ffffff": "Snow White",
};

const colorToFileBJ30 = {
  "#B6D6C9": "apple-green.png",
  "#87CEEB": "blue-sky.png",
  "#C0C0C0": "bubble-grey.png",
  "#000000": "jade-black.png",
  "#808080": "matte-grey.png",
  "#ffffff": "snow-white.png",
};

const colorsBJ30 = [
  "#B6D6C9",
  "#87CEEB",
  "#C0C0C0",
  "#000000",
  "#808080",
  "#ffffff",
];

const colorNamesX55 = {
  "#464C47": "Platinum Black",
  "#96901D": "Yellow Black",
  "#EA3435": "Red Black",
  "#CBD1D4": "Crystal Black",
  "#D1D1D1": "White Black",
};

const colorToFolderX55 = {
  "#464C47": "platinum_black",
  "#96901D": "yellow_black",
  "#EA3435": "red_black",
  "#CBD1D4": "crystal_black",
  "#D1D1D1": "white_black",
};

const colorsX55 = ["#464C47", "#96901D", "#EA3435", "#CBD1D4", "#D1D1D1"];

export default function ExploreCar() {
  const [activeSeries, setActiveSeries] = useState("BJ Series");
  const [activeModel, setActiveModel] = useState("BJ30 Type 1");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedColorBJ30, setSelectedColorBJ30] = useState(colorsBJ30[0]);
  const [selectedColorX55, setSelectedColorX55] = useState(colorsX55[0]);


  // Map active model to base for rendering
  const getBaseModel = (name) => {
    if (!name) return "";
    if (name.startsWith("BJ30")) return "BJ30";
    if (name.startsWith("BJ40 PLUS")) return "BJ40 PLUS";
    if (name.startsWith("X55 II")) return "X55 II";
    return name;
  };

  const handleSeriesClick = (series) => {
    setActiveSeries(series);
    // Set default typed model based on series
    if (series === "BJ Series") {
      setActiveModel("BJ30 Type 1");
      setSelectedColorBJ30(colorsBJ30[0]);
    } else if (series === "X Series") {
      setActiveModel("X55 II Lite");
      setSelectedColorX55(colorsX55[0]);
    } else if (series === "Arcfox") {
      setActiveModel("");
    }
  };

  const handleModelClick = (model) => {
    setActiveModel(model);
  };

  const onColorSelect = (color) => {
    setSelectedColor(color);
  };

  const onColorSelectX55 = (color) => {
    setSelectedColorX55(color);
  };

  const onColorSelectBJ30 = (color) => {
    setSelectedColorBJ30(color);
  };

  const renderSpecs = () => {
    const baseModel = getBaseModel(activeModel);

    if (baseModel === "BJ30") {
      return (
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-gray-500 text-xs font-medium mb-1">Wheelbase</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                1910
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
            <div className="text-center border-l border-r border-gray-300">
              <p className="text-gray-500 text-xs font-medium mb-1">Length</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                4730
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs font-medium mb-1">Height</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                1790
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (baseModel === "BJ40 PLUS") {
      return (
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-gray-500 text-xs font-medium mb-1">Wheelbase</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                1925
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
            <div className="text-center border-l border-r border-gray-300">
              <p className="text-gray-500 text-xs font-medium mb-1">Length</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                4465
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs font-medium mb-1">Height</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                1871
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (baseModel === "X55 II") {
      return (
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-gray-500 text-xs font-medium mb-1">Wheelbase</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                1886
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
            <div className="text-center border-l border-r border-gray-300">
              <p className="text-gray-500 text-xs font-medium mb-1">Length</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                4620
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-xs font-medium mb-1">Height</p>
              <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                1680
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">
                MM
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="App">
      <div className="pt-10 md:px-8 px-2">
        <h2 className="md:text-2xl text-xl font-bold text-center">
          EXPLORE YOUR BAIC
        </h2>

        {/* Series Tabs */}
        <div className="mt-6">
          <div className="flex gap-0 justify-start md:justify-center max-w-6xl m-auto overflow-x-auto md:flex-wrap">
            <button
              className={`py-3 px-6 sm:px-8 transition-all text-base whitespace-nowrap ${activeSeries === "BJ Series"
                ? "font-semibold text-red-600"
                : "font-normal text-gray-400 hover:text-gray-600"
                }`}
              onClick={() => handleSeriesClick("BJ Series")}
            >
              <span className={activeSeries === "BJ Series" ? "border-b-2 border-red-600 pb-1" : ""}>
                BJ Series
              </span>
            </button>
            <div className="w-px bg-gray-300 h-10 my-auto flex-shrink-0"></div>
            <button
              className={`py-3 px-6 sm:px-8 transition-all text-base whitespace-nowrap ${activeSeries === "X Series"
                ? "font-semibold text-red-600"
                : "font-normal text-gray-400 hover:text-gray-600"
                }`}
              onClick={() => handleSeriesClick("X Series")}
            >
              <span className={activeSeries === "X Series" ? "border-b-2 border-red-600 pb-1" : ""}>
                X Series
              </span>
            </button>
            <div className="w-px bg-gray-300 h-10 my-auto flex-shrink-0"></div>
            <button
              className={`py-3 px-6 sm:px-8 transition-all text-base whitespace-nowrap ${activeSeries === "Arcfox"
                ? "font-semibold text-black"
                : "font-normal text-gray-400 hover:text-gray-600"
                }`}
              onClick={() => handleSeriesClick("Arcfox")}
            >
              <span className={activeSeries === "Arcfox" ? "border-b-2 border-black pb-1" : ""}>
                Arcfox
              </span>
              <span
                className={`ml-2 text-[11px] px-2 py-1 rounded-full font-semibold ${activeSeries === "Arcfox"
                  ? "bg-black text-white"
                  : "bg-gray-300 text-gray-700"
                  }`}
              >
                Coming soon
              </span>
            </button>
          </div>

          {/* Model Images Container */}
          <div className="max-w-6xl m-auto mt-8 ">
            <div className="overflow-x-auto scrollbar-hide">
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
                <div className="flex gap-6 justify-start md:justify-center">
                  {/* Typed model thumbnails by series */}
                  {activeSeries !== "X Series" && (
                    <>
                      {/* BJ30 Type 1 */}
                      <div
                        className="relative cursor-pointer flex-shrink-0 transition-all"
                        onClick={() => handleModelClick("BJ30 Type 1")}
                      >
                        <p
                          className={`text-center mb-2 text-base sm:text-lg ${activeModel === "BJ30 Type 1"
                            ? "font-semibold text-red-600"
                            : "font-normal text-gray-500"
                            }`}
                        >
                          BJ30 HEV AWD
                        </p>
                        <img
                          src="/BJ30-explore.png"
                          alt="BJ30 Type 1"
                          className={`w-48 h-32 object-contain transition-opacity ${activeModel !== "BJ30 Type 1"
                            ? "opacity-30"
                            : "opacity-100"
                            }`}
                        />
                      </div>
                      {/* BJ30 Type 2 */}
                      <div
                        className="relative cursor-pointer flex-shrink-0 transition-all"
                        onClick={() => handleModelClick("BJ30 Type 2")}
                      >
                        <p
                          className={`text-center mb-2 text-base sm:text-lg ${activeModel === "BJ30 Type 2"
                            ? "font-semibold text-red-600"
                            : "font-normal text-gray-500"
                            }`}
                        >
                          BJ30 HEV FWD
                        </p>
                        <img
                          src="/BJ30-explore.png"
                          alt="BJ30 Type 2"
                          className={`w-48 h-32 object-contain transition-opacity ${activeModel !== "BJ30 Type 2"
                            ? "opacity-30"
                            : "opacity-100"
                            }`}
                        />
                      </div>
                      {/* BJ40 PLUS CBU */}
                      <div
                        className="relative cursor-pointer flex-shrink-0 transition-all"
                        onClick={() => handleModelClick("BJ40 PLUS CBU")}
                      >
                        <p
                          className={`text-center mb-2 text-base sm:text-lg ${activeModel === "BJ40 PLUS CBU"
                            ? "font-semibold text-red-600"
                            : "font-normal text-gray-500"
                            }`}
                        >
                          BJ40 PLUS CBU
                        </p>
                        <img
                          src="/bj40-plus/flame_red/_0.png"
                          alt="BJ40 PLUS CBU"
                          className={`w-48 h-32 object-contain transition-opacity ${activeModel !== "BJ40 PLUS CBU"
                            ? "opacity-30"
                            : "opacity-100"
                            }`}
                        />
                      </div>
                      {/* BJ40 PLUS CKD */}
                      <div
                        className="relative cursor-pointer flex-shrink-0 transition-all"
                        onClick={() => handleModelClick("BJ40 PLUS CKD")}
                      >
                        <p
                          className={`text-center mb-2 text-base sm:text-lg ${activeModel === "BJ40 PLUS CKD"
                            ? "font-semibold text-red-600"
                            : "font-normal text-gray-500"
                            }`}
                        >
                          BJ40 PLUS CKD
                        </p>
                        <img
                          src="/bj40-plus/flame_red/_0.png"
                          alt="BJ40 PLUS CKD"
                          className={`w-48 h-32 object-contain transition-opacity ${activeModel !== "BJ40 PLUS CKD"
                            ? "opacity-30"
                            : "opacity-100"
                            }`}
                        />
                      </div>
                    </>
                  )}

                  {activeSeries === "X Series" && (
                    <>
                      {/* X55 II Lite */}
                      <div
                        className="relative cursor-pointer flex-shrink-0 transition-all"
                        onClick={() => handleModelClick("X55 II Lite")}
                      >
                        <p
                          className={`text-center mb-2 text-base sm:text-lg ${activeModel === "X55 II Lite"
                            ? "font-semibold text-red-600"
                            : "font-normal text-gray-500"
                            }`}
                        >
                          X55 II Lite
                        </p>
                        <img
                          src="/x55/red_black/_0.png"
                          alt="X55 II Lite"
                          className={`w-48 h-32 object-contain transition-opacity ${activeModel !== "X55 II Lite"
                            ? "opacity-30"
                            : "opacity-100"
                            }`}
                        />
                      </div>
                      {/* X55 II Prime */}
                      <div
                        className="relative cursor-pointer flex-shrink-0 transition-all"
                        onClick={() => handleModelClick("X55 II Prime")}
                      >
                        <p
                          className={`text-center mb-2 text-base sm:text-lg ${activeModel === "X55 II Prime"
                            ? "font-semibold text-red-600"
                            : "font-normal text-gray-500"
                            }`}
                        >
                          X55 II Prime
                        </p>
                        <img
                          src="/x55/red_black/_0.png"
                          alt="X55 II Prime"
                          className={`w-48 h-32 object-contain transition-opacity ${activeModel !== "X55 II Prime"
                            ? "opacity-30"
                            : "opacity-100"
                            }`}
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className=" flex justify-center">
            {/* BJ40 PLUS */}
            {getBaseModel(activeModel) === "BJ40 PLUS" && (
              <div className="mt-10 md:px-8 w-full max-w-6xl">
                {/* Price */}
                <div className="-mb-4 md:-mb-32 relative z-10 flex justify-center pointer-events-none">
                  <div className="text-center pointer-events-auto">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
                      {activeModel === "BJ40 PLUS CKD"
                        ? "Rp 710.000.000,-"
                        : "Rp 698.000.000,-"}
                    </p>
                    <p className="text-gray-500 text-sm italic">
                      *4X2 (FWD) Variant & Price On The Road Jakarta
                    </p>
                  </div>
                </div>

                <Car360Viewer
                  modelKey="bj40-plus"
                  colorKey={colorToFolderBJ40[selectedColor]}
                  colorName={colorNamesBJ40[selectedColor]}
                  totalFrames={36}
                />

                <div className="flex space-x-3 justify-center -mt-4 md:-mt-32 relative z-10">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${selectedColor === color
                        ? "border-4 outline outline-red-500 border-white transform scale-110"
                        : "border-2"
                        }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelect(color)}
                    ></div>
                  ))}
                </div>

                <div className="select-none w-fit justify-center m-auto mt-4 mb-4 flex items-center">
                  <h2 className="text-center transition-all px-4 py-2">
                    {colorNamesBJ40[selectedColor]}
                  </h2>
                </div>

                {renderSpecs()}



                <div className="mt-8 flex justify-center">
                  <img
                    src="/Award list BAIC - global.png"
                    alt="BAIC Awards"
                    className="w-full max-w-3xl h-auto object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4 mt-10 justify-center items-center">
                  <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
                    <Button
                      variant="dark"
                      href={`/book-a-test-drive/index.html?model=${encodeURIComponent(activeModel)}`}
                      icon={CarFront}
                    >
                      Book a Test Drive
                    </Button>
                    <Button
                      variant="dark"
                      href="/brochure-bj40.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={() => (
                        <svg
                          className="flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      )}
                    >
                      Download Brochure
                    </Button>
                  </div>
                  <Button
                    variant="dark"
                    href={
                      activeModel === "BJ40 PLUS CBU"
                        ? "/bj40-plus-cbu/index.html"
                        : "/bj40-plus-ckd/index.html"
                    }
                    icon={() => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  >
                    See Details
                  </Button>
                </div>
              </div>
            )}

            {/* BJ30 - Using BJ40 PLUS images as placeholder */}
            {getBaseModel(activeModel) === "BJ30" && (
              <div className="mt-10 md:px-8 w-full max-w-6xl">
                {/* Price */}
                <div className="-mb-4 md:-mb-32 relative z-10 flex justify-center pointer-events-none">
                  <div className="text-center pointer-events-auto">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
                      {activeModel === "BJ30 Type 1"
                        ? "Rp 589.000.000,-"
                        : "Rp 529.000.000,-"}
                    </p>
                    <p className="text-gray-500 text-sm italic">
                      *{activeModel === "BJ30 Type 1" ? "4X4 (AWD)" : "4X2 (FWD)"}{" "}
                      Variant & Price On The Road Jakarta
                    </p>
                  </div>
                </div>

                {/* Side View Image */}
                <div className="mt-8 flex justify-center">
                  <img
                    src={`/BJ30/${colorToFileBJ30[selectedColorBJ30]}`}
                    alt={`BJ30 ${colorNamesBJ30[selectedColorBJ30]}`}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="flex space-x-3 justify-center -mt-4 md:-mt-32 relative z-10">
                  {colorsBJ30.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${selectedColorBJ30 === color
                        ? "border-4 outline outline-red-500 border-white transform scale-110"
                        : "border-2"
                        }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelectBJ30(color)}
                    ></div>
                  ))}
                </div>
                <div className="select-none w-fit justify-center m-auto mt-4 mb-4 flex items-center">
                  <h2 className="text-center transition-all px-4 py-2">
                    {colorNamesBJ30[selectedColorBJ30]}
                  </h2>
                </div>

                {renderSpecs()}



                <div className="mt-8 flex justify-center">
                  <img
                    src="/Award list BAIC - global.png"
                    alt="BAIC Awards"
                    className="w-full max-w-3xl h-auto object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4 mt-10 justify-center items-center">
                  <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
                    <Button
                      variant="dark"
                      href={`/book-a-test-drive/index.html?model=${encodeURIComponent(
                        activeModel === "BJ30 Type 1"
                          ? "BJ30 HEV AWD"
                          : "BJ30 HEV FWD"
                      )}`}
                      icon={CarFront}
                    >
                      Book a Test Drive
                    </Button>
                    <Button
                      variant="dark"
                      href="/brochure-bj40.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={() => (
                        <svg
                          className="flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      )}
                    >
                      Download Brochure
                    </Button>
                  </div>
                  <Button
                    variant="dark"
                    href={
                      activeModel === "BJ30 Type 1"
                        ? "/bj30-hev-awd/index.html"
                        : "/bj30-hev-fwd/index.html"
                    }
                    icon={() => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  >
                    See Details
                  </Button>
                </div>
              </div>
            )}

            {/* X55 II */}
            {getBaseModel(activeModel) === "X55 II" && (
              <div className="mt-10 md:px-8 w-full max-w-6xl">
                {/* Price */}
                <div className="-mb-4 md:-mb-32 relative z-10 flex justify-center pointer-events-none">
                  <div className="text-center pointer-events-auto">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
                      {activeModel === "X55 II Prime"
                        ? "Rp 439.000.000,-"
                        : "Rp 390.000.000,-"}
                    </p>
                    <p className="text-gray-500 text-sm italic">
                      *4X2 (FWD) Variant & Price On The Road Jakarta
                    </p>
                  </div>
                </div>

                <Car360Viewer
                  modelKey="x55"
                  colorKey={colorToFolderX55[selectedColorX55]}
                  colorName={colorNamesX55[selectedColorX55]}
                  totalFrames={20}
                />

                <div className="flex flex-col items-center -mt-4 md:-mt-32 relative z-10">
                  <div className="flex space-x-3 justify-center">
                    {colorsX55.map((color) => (
                      <div
                        key={color}
                        className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${selectedColorX55 === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2"
                          }`}
                        style={{ backgroundColor: color }}
                        onClick={() => onColorSelectX55(color)}
                      ></div>
                    ))}
                  </div>

                  <div className="select-none w-fit justify-center m-auto mt-4 mb-4 flex items-center">
                    <h2 className="text-center transition-all px-4 py-2">
                      {colorNamesX55[selectedColorX55]}
                    </h2>
                  </div>


                </div>

                {renderSpecs()}

                <div className="mt-8 flex justify-center">
                  <img
                    src="/Award list BAIC - global.png"
                    alt="BAIC Awards"
                    className="w-full max-w-3xl h-auto object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4 mt-10 justify-center items-center">
                  <div className="flex flex-row gap-4 w-full justify-center flex-wrap">
                    <Button
                      variant="dark"
                      href={`/book-a-test-drive/index.html?model=${encodeURIComponent(activeModel)}`}
                      icon={CarFront}
                    >
                      Book a Test Drive
                    </Button>
                    <Button
                      variant="dark"
                      href="/brochure-x55.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={() => (
                        <svg
                          className="flex-shrink-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      )}
                    >
                      Download Brochure
                    </Button>
                  </div>
                  <Button
                    variant="dark"
                    href={
                      activeModel === "X55 II Lite"
                        ? "/x55-ii-lite/index.html"
                        : "/x55-ii-prime/index.html"
                    }
                    icon={() => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    )}
                  >
                    See Details
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
