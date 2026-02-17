/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";
import { useState } from "react";
import BJ40Video from "../src/assets/BJ40-Video.mp4";
import Foto1 from "../src/assets/BJ30-single-produk-1.png";
import Foto2 from "../src/assets/BJ30-single-produk-2.jpg";
import Foto3 from "../src/assets/BJ30-single-produk-3.jpg";
import Foto4 from "../src/assets/BJ30-single-produk-4.jpg";
// Mobile images
import Foto1Mobile from "../src/assets/BJ30-single-produk-1-mobile.jpg";
import Foto2Mobile from "../src/assets/BJ30-single-produk-2-mobile.jpg";
import Foto3Mobile from "../src/assets/BJ30-single-produk-3-mobile.jpg";
import Foto4Mobile from "../src/assets/BJ30-single-produk-4-mobile.jpg";
import interior1 from "../src/assets/interior-1.jpg";
import interior2 from "../src/assets/interior-2.jpg";
import interior3 from "../src/assets/interior-3.jpg";
import interior4 from "../src/assets/interior-4.jpg";
import interior5 from "../src/assets/interior-5.jpg";
import interior6 from "../src/assets/interior-6.jpg";
import exterior1 from "../src/assets/exterior-1.jpg";
import exterior2 from "../src/assets/exterior-2.jpg";
import exterior3 from "../src/assets/exterior-3.jpg";
import exterior4 from "../src/assets/exterior-4.jpg";
import exterior5 from "../src/assets/exterior-5.jpg";
import exterior6 from "../src/assets/exterior-6.jpg";
import Accordion from "../src/components/Accordion";
import ButtonChat from "../src/components/ButtonChat";
import Button from "../src/components/Button";
import { ArrowRight } from "lucide-react";

const carSpecifications = {
  engine: [
    { title: "LengthxWidthxHeight (mm)", content: "4730 / 1870 / 1790" },
    { title: "Wheelbase (mm )", content: "2820" },
    { title: "Fuel tank capacity (l)", content: "75" },
    { title: "Approach angle (degrees)", content: "37°" },
    { title: "Departure angle (degrees)", content: "31°" },
    { title: "Rampower angle (degrees)", content: "23°" },
    { title: "Ground clearence (mm )", content: "210" },
    { title: "Luggage capacity (litres) *seats down", content: "532/965*" },
    { title: "Displacement (cm3)", content: "1.5T Hybrid" },
    { title: "Clynder configuration", content: "in-line 4 cylinder 16 value" },
    { title: "Maximum power (Hp@r/min)", content: "221 Hp@ 5500 r/min" },
    { title: "Minimum power (Hp@r/min)", content: "380 Nm@ 1750-4500 r/min" },
    { title: "Emission controls", content: "Euro IV" },
    { title: "Transmission", content: "ZF 8 Speed At" },
    {
      title: "Front suspension",
      content: "Double wishbone/coil spring font independent suspension",
    },
    {
      title: "Rear suspension",
      content: "Five-link/coil spring non-independent suspnesion",
    },
    { title: "Drivetrain", content: "4WD with Electronic Shifter" },
  ],
  features: [
    { title: "Wheels and Tyres", content: "265/65 R17" },
    { title: "Spare type", content: "Full size" },
    { title: "Slide foot step", content: "√" },
    { title: "Remove hard stop", content: "√" },
    { title: "Red tow hooks - front & back", content: "√" },
    { title: "Height adjustable headlights - electric", content: "√" },
    { title: "Front & Rear fog lights", content: "√" },
    { title: "LED Daytime Running Lights", content: "√" },
    { title: "Follow me home lights", content: "√" },
    { title: "LED high mount brake lights", content: "√" },
    { title: "Cruise Control", content: "√" },
    { title: "Dual zone auto air conditioner", content: "√" },
    { title: "Multi-function steering wheel", content: "√" },
    { title: "Anti-glare inside rear view mirror", content: "√" },
    { title: "Driver's seat - 4-way electric adjustable", content: "√" },
    { title: "Front passengers eat - 6-way manual adjustable", content: "√" },
    {
      title: "Rear seat configuration",
      content: "4WD with Electronic Shifter",
    },
    { title: "Rear seat recline function", content: "√" },
    { title: "6 speakers", content: "√" },
    { title: "Anti-lock Braking System (ABS)", content: "√" },
    { title: "Electronic Brake force Distribution (ABS)", content: "√" },
    {
      title:
        "Electronic stability Programme (ESP), Emergency Brake Assist(EBA)",
      content: "√",
    },
    { title: "Hill Ascent Control(HOC)", content: "√" },
    { title: "Electronic Parking Brake (EPB)", content: "√" },
    { title: "ISO-FIX child seat restraint system", content: "√" },
    { title: "Driver and front passenger airbag", content: "√" },
  ],
};

function App() {
  const colors = [
    "#B6D6C9",
    "#87CEEB",
    "#C0C0C0",
    "#000000",
    "#808080",
    "#ffffff",
  ];

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

  const [activeTabGallery, setActiveTabGallery] = useState("Interior");
  const [animating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleTabClickGallery = (tab) => {
    setActiveTabGallery(tab);
  };

  const onColorSelect = (color) => {
    if (color !== selectedColor) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedColor(color);
        setAnimating(false);
      }, 100);
    }
  };

  return (
    <>
      <Header alwaysWhite />
      <div className="bg-white mt-20">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center gap-3">
          <img src="/bj30-logo.png" alt="BJ30 Logo" className="h-4 w-auto" />
          <span className="text-sm font-semibold tracking-wide text-gray-900">
            HEV AWD
          </span>
        </div>
      </div>
      <ButtonChat />
      <p></p>
      <div className="bg-neutral-400">
        <div className="bg-neutral-200">
          {/* ================= OVERVIEW ================= */}
          <div>
            {[
              { desktop: Foto1, mobile: Foto1Mobile },
              { desktop: Foto2, mobile: Foto2Mobile },
              { desktop: Foto3, mobile: Foto3Mobile },
              { desktop: Foto4, mobile: Foto4Mobile },
            ].map((bg, i) => (
              <div key={i} className="relative w-full md:h-[600px] overflow-hidden">
                {/* Background Image - Absolute on Desktop, Relative on Mobile */}
                <div className="md:absolute md:inset-0 w-full md:h-full">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={bg.desktop} />
                    <img
                      src={bg.mobile}
                      alt="Overview Background"
                      className="w-full h-auto md:h-full md:object-cover block"
                    />
                  </picture>
                  {/* Overlay - Absolute relative to image container on mobile */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
                  <div
                    className={`flex ${i % 2 === 1 ? "md:justify-end" : "justify-start"} max-w-6xl m-auto pb-10 md:pb-20 items-start h-full text-white px-5 md:px-0`}
                  >
                    <div className="md:px-6 max-w-2xl mt-10 md:mt-32 flex flex-col gap-4 pointer-events-auto">
                      {i === 0 && (
                        <>
                          <h1 className="md:text-5xl text-2xl font-bold uppercase mt-20">
                            HEART OF A HYBRID
                          </h1>
                          <h2 className="text-lg font-semibold uppercase">
                            The five-hole daytime running light belt boasts both
                            technological appeal and practical utility.
                          </h2>
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <h1 className="md:text-5xl text-2xl font-bold uppercase mt-20">
                            LIGHT THE PATH AHEAD
                          </h1>
                          <h2 className="text-lg font-semibold uppercase">
                            ULTIMATE PERFORMANCE FOR THE DRIVE OF YOUR LIFE
                          </h2>
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <h1 className="md:text-5xl text-2xl font-bold uppercase mt-20">
                            RUGGED REAR DESIGN
                          </h1>
                          <h2 className="text-lg font-semibold uppercase">
                            BOLD FROM BEHIND
                          </h2>
                        </>
                      )}
                      {i === 3 && (
                        <>
                          <h1 className="md:text-5xl text-2xl font-bold uppercase mt-20">
                            TECHNOLOGY WITH THRUST
                          </h1>
                          <h2 className="text-lg font-semibold uppercase">
                            COMFORT IN COMMAND
                          </h2>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= PRICING & SPECS ================= */}
          <div className="py-16 md:px-8 px-5 max-w-4xl m-auto">
            <h2 className="text-center md:text-3xl text-xl font-bold">
              PRICING & SPECS
            </h2>

            {/* COLOR SELECT */}
            <div className="mt-10 space-y-4 mb-10">
              <div className="flex space-x-3 justify-center">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${selectedColor === color
                      ? "border-4 outline outline-red-500 border-white transform scale-110"
                      : "border-2"
                      }`}
                    style={{ backgroundColor: color }}
                    onClick={() => onColorSelect(color)}
                  />
                ))}
              </div>

              <div className="select-none w-fit justify-center m-auto mt-4 mb-4 flex items-center">
                <h2 className="text-center transition-all px-4 py-2">
                  {colorNamesBJ30[selectedColor]}
                </h2>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
                    Rp 589.000.000,-
                  </p>
                  <p className="text-gray-500 text-sm italic">OTR Jakarta</p>
                </div>
              </div>

              <img
                src={`/BJ30/${colorToFileBJ30[selectedColor]}`}
                alt={`BJ30 ${colorNamesBJ30[selectedColor]}`}
                className={`w-full h-auto object-contain mx-auto transition-opacity duration-100 ${animating ? "opacity-0" : "opacity-100"
                  }`}
              />
              <img
                src="/Award list BAIC - global.png"
                alt="BAIC Awards"
                className="mx-auto mt-4"
              />
            </div>

            <h2 className="text-center md:text-3xl text-2xl mt-10 mb-10">
              BJ30 Specifications
            </h2>

            <Accordion
              title="Engine & Drivetrain"
              content={carSpecifications.engine}
            />
            <Accordion title="Features" content={carSpecifications.features} />

            <div className="max-w-5xl mt-10 font-light text-xs m-auto mb-10 leading-relaxed">
              <p className="md:max-w-2xl">
                DISCLAIMER*
                <br />
                Specifications, equipment, colors & materials shown here may
                differ from every country. Please check with your local dealer
                for the latest information
              </p>
            </div>
          </div>

          {/* ================= GALLERY ================= */}
          <div className="md:px-8 px-5 max-w-6xl m-auto overflow-hidden bg-neutral-200 pt-16">
            <h2 className="text-center md:text-3xl text-xl font-bold">
              GALLERY
            </h2>

            <div className="flex justify-center mt-10 gap-10">
              <button
                className={`py-3 whitespace-nowrap border-b-2 transition-all ${activeTabGallery === "Interior"
                  ? "text-red-600 font-medium border-red-600"
                  : "text-neutral-900 border-transparent"
                  }`}
                onClick={() => handleTabClickGallery("Interior")}
              >
                INTERIOR
              </button>
              <button
                className={`py-3 whitespace-nowrap border-b-2 transition-all ${activeTabGallery === "Exterior"
                  ? "text-red-600 font-medium border-red-600"
                  : "text-neutral-900 border-transparent"
                  }`}
                onClick={() => handleTabClickGallery("Exterior")}
              >
                EXTERIOR
              </button>
              <button
                className={`py-3 whitespace-nowrap border-b-2 transition-all ${activeTabGallery === "Feature"
                  ? "text-red-600 font-medium border-red-600"
                  : "text-neutral-900 border-transparent"
                  }`}
                onClick={() => handleTabClickGallery("Feature")}
              >
                FEATURE
              </button>
            </div>

            {activeTabGallery === "Interior" && (
              <div className="mb-10 m-auto mt-10">
                <div className="grid grid-cols-6">
                  <img
                    src={interior1}
                    alt="interior 1"
                    className="w-full col-span-4"
                  />
                  <img
                    src={interior2}
                    alt="interior 2"
                    className="w-full h-full col-span-2 object-cover"
                  />
                </div>
                <div className="grid grid-cols-6">
                  <img
                    src={interior3}
                    alt="interior 3"
                    className="w-full h-full object-cover col-span-2"
                  />
                  <img
                    src={interior4}
                    alt="interior 4"
                    className="w-full col-span-4"
                  />
                </div>

              </div>
            )}

            {activeTabGallery === "Exterior" && (
              <div className="mb-10 m-auto mt-10">
                <div className="grid grid-cols-6">
                  <img
                    src={exterior1}
                    alt="exterior 1"
                    className="w-full col-span-4"
                  />
                  <img
                    src={exterior2}
                    alt="exterior 2"
                    className="w-full h-full col-span-2 object-cover"
                  />
                </div>
                <div className="grid grid-cols-6">
                  <img
                    src={exterior3}
                    alt="exterior 3"
                    className="w-full h-full object-cover col-span-2"
                  />
                  <img
                    src={exterior4}
                    alt="exterior 4"
                    className="w-full col-span-4"
                  />
                </div>
                <div className="grid grid-cols-6">
                  <img
                    src={exterior5}
                    alt="exterior 5"
                    className="w-full col-span-4"
                  />
                  <img
                    src={exterior6}
                    alt="exterior 6"
                    className="w-full h-full col-span-2 object-cover"
                  />
                </div>
              </div>
            )}

            {activeTabGallery === "Feature" && (
              <div className="mb-10 m-auto mt-10">
                <video controls autoPlay src={BJ40Video}></video>
              </div>
            )}
          </div>

          {/* ================= ACCESSORIES ================= */}
          <section
            className="relative min-h-screen bg-cover bg-center flex items-end justify-center pb-20 mt-10"
            style={{ backgroundImage: "url('/bg-book-a-test-drive.jpg')" }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
              <h2 className="md:text-3xl text-xl font-bold mb-12">Accessories</h2>

              {/* CTA Button */}
              <div className="flex gap-6 justify-center items-center flex-wrap">
                <Button
                  variant="light"
                  href="/genuine-accessories/index.html"
                  icon={ArrowRight}
                >
                  See All
                </Button>
              </div>
            </div>
          </section>

          {/* ================= CTA ================= */}
          <div className="flex flex-col md:flex-row gap-4 py-16 px-5 md:px-0 justify-center items-center ">
            <Button
              variant="dark"
              href="/book-a-test-drive/index.html?model=bj30"
            >
              BOOK A TEST DRIVE
            </Button>
            <Button
              variant="dark"
              href="/brochure-bj30.pdf"
            >
              DOWNLOAD BROCHURE
            </Button>
          </div>
        </div >
      </div >



      <Footer />
    </>
  );
}

export default App;
