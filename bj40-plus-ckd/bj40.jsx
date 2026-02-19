/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import AccessoriesTab from "../src/components/AccessoriesTab";
import "../src/index.css";
import flameRedView1 from "../src/assets/flame-red-view-1.png";
import flameRedView2 from "../src/assets/flame-red-view-2.png";
import flameRedView3 from "../src/assets/flame-red-view-3.png";
import flameRedView4 from "../src/assets/flame-red-view-4.png";
import jadeBlackView1 from "../src/assets/jade-black-view-1.png";
import jadeBlackView2 from "../src/assets/jade-black-view-2.png";
import jadeBlackView3 from "../src/assets/jade-black-view-3.png";
import jadeBlackView4 from "../src/assets/jade-black-view-4.png";
import porcelainBlueView1 from "../src/assets/porcelain-blue-view-1.png";
import porcelainBlueView2 from "../src/assets/porcelain-blue-view-2.png";
import porcelainBlueView3 from "../src/assets/porcelain-blue-view-3.png";
import porcelainBlueView4 from "../src/assets/porcelain-blue-view-4.png";
import forestGreanView1 from "../src/assets/forest-green-view-1.png";
import forestGreanView2 from "../src/assets/forest-green-view-2.png";
import forestGreanView3 from "../src/assets/forest-green-view-3.png";
import forestGreanView4 from "../src/assets/forest-green-view-4.png";
import midnightBlueView1 from "../src/assets/midnight-blue-view-1.png";
import midnightBlueView2 from "../src/assets/midnight-blue-view-2.png";
import midnightBlueView3 from "../src/assets/midnight-blue-view-3.png";
import midnightBlueView4 from "../src/assets/midnight-blue-view-4.png";
import { useState, useEffect } from "react";
import BJ40Logo from "../src/assets/BJ40-plus-logo.png";
import BJ40Video from "../src/assets/BJ40-Video.mp4";
import Foto1 from "../src/assets/BJ40-single-produk-1.jpg";
import Foto2 from "../src/assets/BJ40-single-produk-2.jpg";
import Foto3 from "../src/assets/BJ40-single-produk-3.jpg";
import Foto4 from "../src/assets/BJ40-single-produk-4.jpg";
// Mobile images (using same as desktop for now - replace later)
import Foto1Mobile from "../src/assets/BJ40-single-produk-1-mobile.jpg";
import Foto2Mobile from "../src/assets/BJ40-single-produk-2-mobile.jpg";
import Foto3Mobile from "../src/assets/BJ40-single-produk-3-mobile.jpg";
import Foto4Mobile from "../src/assets/BJ40-single-produk-4-mobile.jpg";
import interior1 from "../src/assets/interior-BJ40-plus.jpg";
import interior2 from "../src/assets/interior-BJ40-plus-2.jpg";
import interior3 from "../src/assets/interior-BJ40-plus-3.jpg";
import interior4 from "../src/assets/interior-BJ40-plus-4.jpg";
import interior5 from "../src/assets/interior-BJ40-plus-5.jpg";
import interior6 from "../src/assets/interior-BJ40-plus-6.jpg";
import exterior1 from "../src/assets/exterior-BJ40-plus-1.jpg";
import exterior2 from "../src/assets/exterior-BJ40-plus-2.jpg";
import exterior3 from "../src/assets/exterior-BJ40-plus-3.jpg";
import exterior4 from "../src/assets/exterior-BJ40-plus-4.jpg";
import exterior5 from "../src/assets/exterior-BJ40-plus-5.jpg";
import exterior6 from "../src/assets/exterior-BJ40-plus-6.png";
import snowWhite from "../src/assets/snow white.png";
import armyGreen from "../src/assets/army green.png";
import CTA from "../src/components/cta";
import Accordion from "../src/components/Accordion";
import ButtonChat from "../src/components/ButtonChat";
import Button from "../src/components/Button";
import { ArrowRight } from "lucide-react";
const carSpecifications = {
  engine: [
    { title: "LengthxWidthxHeight (mm)", content: "4465 / 1925 / 1871" },
    { title: "Wheelbase (mm )", content: "2745" },
    { title: "Fuel tank capacity (l)", content: "75" },
    { title: "Approach angle (degrees)", content: "37°" },
    { title: "Departure angle (degrees)", content: "31°" },
    { title: "Rampower angle (degrees)", content: "23°" },
    { title: "Ground clearence (mm )", content: "210" },
    { title: "Luggage capacity (litres) *seats down", content: "532/965*" },
    { title: "Displacement (cm3)", content: "2.000 cc Turbo" },
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

    // Add more specifications as needed
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
    {
      title: "Hill Ascent Control(HOC)",
      content: "√",
    },
    {
      title: "Electronic Parking Brake (EPB)",
      content: "√",
    },
    {
      title: "ISO-FIX child seat restraint system",
      content: "√",
    },
    {
      title: "Driver and front passenger airbag",
      content: "√",
    },

    // Add more features as needed
  ],
};
function App() {
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

  const colorToImageMapBJ40 = {
    "#94111B": [flameRedView1, flameRedView2, flameRedView3, flameRedView4],
    "#ffffff": [snowWhite, snowWhite, snowWhite, snowWhite],
    "#000000": [jadeBlackView1, jadeBlackView2, jadeBlackView3, jadeBlackView4],
    "#86A9C6": [
      porcelainBlueView1,
      porcelainBlueView2,
      porcelainBlueView3,
      porcelainBlueView4,
    ],
    "#2E3F2B": [
      forestGreanView1,
      forestGreanView2,
      forestGreanView3,
      forestGreanView4,
    ],
    "#5A603F": [armyGreen, armyGreen, armyGreen, armyGreen],
    "#00243A": [
      midnightBlueView1,
      midnightBlueView2,
      midnightBlueView3,
      midnightBlueView4,
    ],
  };

  const [activeTabGallery, setActiveTabGallery] = useState("Interior");
  const [animating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTabClickGallery = (tab) => {
    setActiveTabGallery(tab);
  };

  const onColorSelect = (color) => {
    if (color !== selectedColor) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedColor(color);
        setCurrentImageIndex(0);
        setAnimating(false);
      }, 100);
    }
  };

  const handleImageSelect = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setAnimating(false);
    }, 100);
  };

  return (
    <>
      <Header alwaysWhite />
      <div className="bg-white mt-20">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center gap-3">
          <img
            src="/bj40plus-logo.png"
            alt="BJ40 Plus Logo"
            className="h-4 w-auto"
          />
          <span className="text-sm font-semibold tracking-wide text-gray-900">
            CKD
          </span>
        </div>
      </div>
      <ButtonChat />

      <div className="bg-neutral-400">
        <div className="bg-neutral-200">
          {/* ================= OVERVIEW ================= */}
          <div>
            {[
              {
                desktop: Foto1,
                mobile: Foto1Mobile,
                title: "BORN FOR EXCELLENCE",
                subtitle: "4X4 SUVS WITH A DOMINATING PRESENCE",
                align: "start",
              },
              {
                desktop: Foto2,
                mobile: Foto2Mobile,
                title: "EXPLORE THE UNKNOWN",
                subtitle: "ULTIMATE PERFORMANCE FOR THE DRIVE OF YOUR LIFE",
                align: "end",
              },
              {
                desktop: Foto3,
                mobile: Foto3Mobile,
                title: "ROBUST & FEARLESS",
                subtitle: "CUSTOMIZED FUNCTIONS TO RESONATE WITH YOUR PERSONALITY",
                align: "start",
              },
              {
                desktop: Foto4,
                mobile: Foto4Mobile,
                title: "LUXURIOUS & COMFORTABLE",
                subtitle: "BUILT TOUGH FOR A RELAXED AND THRILLING RIDE",
                align: "end",
              },
            ].map((slide, i) => (
              <div
                key={i}
                className="relative w-full md:h-[650px] overflow-hidden"
              >
                {/* Background Image */}
                <picture className="md:absolute md:inset-0 md:h-full md:w-full">
                  <source
                    media="(min-width: 768px)"
                    srcSet={slide.desktop}
                  />
                  <img
                    src={slide.mobile}
                    alt={slide.title}
                    className="w-full h-auto md:h-full md:w-full md:object-cover"
                  />
                </picture>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="absolute inset-0 z-10 flex items-start">
                  <div
                    className={`max-w-6xl mx-auto w-full px-5 md:px-6 flex ${slide.align === "end"
                      ? "justify-end"
                      : "justify-start"
                      }`}
                  >
                    <div className={`max-w-3xl mt-10 flex flex-col gap-4 text-white ${slide.align === "end" ? "items-end text-right" : "items-start text-left"
                      }`}>
                      <h2 className="md:text-5xl text-xl font-bold uppercase  mt-4">
                        {slide.title}
                      </h2>
                      <p className="md:text-lg text-base font-semibold uppercase">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= PRICING ================= */}
          <div className="mt-10 md:px-8 px-5 max-w-4xl m-auto">
            <h2 className="text-center md:text-3xl text-xl font-bold">
              PRICING & SPECS
            </h2>

            {/* COLOR SELECT */}
            <div className="mt-10 mb-10">
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
                  {colorNamesBJ40[selectedColor]}
                </h2>
              </div>

              <div className="mt-6 flex justify-center -mb-4 md:-mb-24 relative z-10 pointer-events-none">
                <div className="text-center pointer-events-auto">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
                    Rp 710.000.000,-
                  </p>
                  <p className="text-gray-500 text-sm italic">OTR Jakarta</p>
                </div>
              </div>

              <img
                src={colorToImageMapBJ40[selectedColor][currentImageIndex]}
                className="mx-auto -mt-4 md:-mt-24 relative z-0"
              />
              <img
                src="/Award list BAIC - global.png"
                alt="BAIC Awards"
                className="mx-auto -mt-4 md:-mt-24 relative z-10"
              />

              <div className="flex justify-center gap-4">
                {colorToImageMapBJ40[selectedColor].map((img, i) => (
                  <button
                    key={i}
                    onClick={() => handleImageSelect(i)}
                    className={`border ${currentImageIndex === i ? "border-red-500" : "opacity-50"
                      }`}
                  >
                    <img src={img} className="w-24" />
                  </button>
                ))}
              </div>
            </div>

            <Accordion
              title="Engine & Drivetrain"
              content={carSpecifications.engine}
            />

            <Accordion title="Features" content={carSpecifications.features} />
          </div>

          {/* ================= GALLERY ================= */}
          <div className="md:px-8 px-5 max-w-6xl m-auto overflow-hidden bg-neutral-200 ">
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
                <div className="grid grid-cols-6">
                  <img
                    src={interior5}
                    alt="interior 5"
                    className="w-full col-span-4"
                  />
                  <img
                    src={interior6}
                    alt="interior 6"
                    className="w-full h-full col-span-2 object-cover"
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
                <div className="grid grid-cols-6">
                  <img
                    src={interior5}
                    alt="interior 5"
                    className="w-full col-span-4"
                  />
                  <img
                    src={interior6}
                    alt="interior 6"
                    className="w-full h-full col-span-2 object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* ================= ACCESSORIES ================= */}
          <section
            className="relative h-[400px] bg-cover bg-center flex items-end justify-center pb-20 mt-10"
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
              href="/book-a-test-drive/index.html?model=bj40plus"
            >
              BOOK A TEST DRIVE
            </Button>
            <Button
              variant="dark"
              href="/brochure-bj40.pdf"
            >
              DOWNLOAD BROCHURE
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
