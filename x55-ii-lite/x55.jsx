/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";
import platinumBlackView1 from "../src/assets/platinum-black-view-1.png";
import platinumBlackView2 from "../src/assets/platinum-black-view-2.png";
import platinumBlackView3 from "../src/assets/platinum-black-view-3.png";
import platinumBlackView4 from "../src/assets/platinum-black-view-4.png";
import yellowBlackView1 from "../src/assets/yellow-black-view-1.png";
import yellowBlackView2 from "../src/assets/yellow-black-view-2.png";
import yellowBlackView3 from "../src/assets/yellow-black-view-3.png";
import yellowBlackView4 from "../src/assets/yellow-black-view-4.png";
import redBlackView1 from "../src/assets/red-black-view-1.png";
import redBlackView2 from "../src/assets/red-black-view-2.png";
import redBlackView3 from "../src/assets/red-black-view-3.png";
import redBlackView4 from "../src/assets/red-black-view-4.png";
import crystalBlackView1 from "../src/assets/crystal-black-view-1.png";
import crystalBlackView2 from "../src/assets/crystal-black-view-2.png";
import crystalBlackView3 from "../src/assets/crystal-black-view-3.png";
import crystalBlackView4 from "../src/assets/crystal-black-view-4.png";
import whiteBlackView1 from "../src/assets/white-black-view-1.png";
import whiteBlackView2 from "../src/assets/white-black-view-2.png";
import whiteBlackView3 from "../src/assets/white-black-view-3.png";
import whiteBlackView4 from "../src/assets/white-black-view-4.png";
import X55Video from "../src/assets/X55-Video.mp4";
import Foto1 from "../src/assets/X55-single-produk-1.jpg";
import Foto2 from "../src/assets/X55-single-produk-2.jpg";
import Foto3 from "../src/assets/X55-single-produk-3.jpg";
import Foto4 from "../src/assets/X55-single-produk-4.jpg";
// Mobile images (using same as desktop for now - replace later)
import Foto1Mobile from "../src/assets/X55-single-produk-1.jpg";
import Foto2Mobile from "../src/assets/X55-single-produk-2.jpg";
import Foto3Mobile from "../src/assets/X55-single-produk-3.jpg";
import Foto4Mobile from "../src/assets/X55-single-produk-4.jpg";
import interior1 from "../src/assets/interior-x55-1.jpg";
import interior2 from "../src/assets/interior-x55-2.jpg";
import interior3 from "../src/assets/interior-x55-3.jpg";
import interior4 from "../src/assets/interior-x55-4.jpg";
import interior5 from "../src/assets/interior-x55-5.jpg";
import interior6 from "../src/assets/interior-x55-6.jpg";
import exterior1 from "../src/assets/exterior-x55-1.png";
import exterior2 from "../src/assets/exterior-x55-2.png";
import exterior3 from "../src/assets/exterior-x55-3.png";
import exterior4 from "../src/assets/exterior-x55-4.png";
import exterior5 from "../src/assets/exterior-x55-5.png";
import exterior6 from "../src/assets/exterior-x55-6.png";
import Accordion from "../src/components/Accordion";
import ButtonChat from "../src/components/ButtonChat";
import Button from "../src/components/Button";
import { ArrowRight } from "lucide-react";

const carSpecifications = {
  model: [
    { title: "Length/width/heeight (mm)", content: "4620 / 1886 / 1680" },
    { title: "Wheelbase (mm )", content: "2735" },
    { title: "Seats", content: "5" },
    { title: "Trunk capacity (L)", content: "350" },
    { title: "Fuel tank (L)", content: "53" },
    { title: "Rampower angle (degrees)", content: "23°" },
    { title: "Engine", content: "1.500 cc TURBO" },
    { title: "Max. power (HP)", content: "185 Hp/5.550 rpm" },
    { title: "Max. torque (Nm/pm)", content: "305 Nm / 1.500 - 6.000 rpm" },
    { title: "Transmission", content: "7 Speed DCT" },
    { title: "Fuel type", content: "Gasoline - Euro VI" },
    {
      title: "Front/rear supension",
      content:
        "MacPherson Independent suspension/multi-link independent suspension",
    },
    { title: "Front/rear brake", content: "Ventilation Disc / Disc" },
    { title: "Tyres", content: "225/55 R19" },
  ],
  features: [
    { title: "Electronic shifter", content: "√" },
    { title: "Electric Power Steering - EPS (2 mode)", content: "√" },
    { title: "Manual mode shift prompt", content: "√" },
    { title: "Drive mode(ECO/Sport/Comfort/Smart)", content: "√" },
    {
      title:
        "ABS (Antilock Brake System)+ EBD (Electronic Brakeforce Distribution)",
      content: "√",
    },
    { title: "Emergency Braking Assist, EBA", content: "√" },
    { title: "Electronic Parking Brake, EPB", content: "√" },
    { title: "Auto Hold", content: "√" },
    { title: "Button start/stop", content: "√" },
    { title: "Keyless entry", content: "√" },
    { title: "Electronic Stability Program, ESP", content: "√" },
    { title: "Hill Assist Control, HAC", content: "√" },
    { title: "Hill Descent Control, HDC", content: "√" },
    { title: "Driver and passenger air bags", content: "√" },
    { title: "Front side air bags", content: "√" },
    { title: "Warning of tired driving (symbol + sound)", content: "√" },
    { title: "Engine immobilizer", content: "√" },
    { title: "Door mirror with electric adjustment", content: "√" },
    {
      title: "Door mirror with electric fold and auto fold when lock",
      content: "√",
    },
    { title: "Panoramic sunroof", content: "√" },
    { title: "Hidden door handle", content: "√" },
    { title: "Rain sensor wiper", content: "√" },
    { title: "Power tailgate with smart anti-pinch", content: "√" },
    { title: "12V charging port & Trunk", content: "√" },
    { title: "Steering wheel off-hand sensing", content: "√" },
    {
      title: "Multi-function steering wheel with 4-way adjustment",
      content: "√",
    },
    { title: "Driver seat memory", content: "√" },
    {
      title: "Driving seat & Passenger seat 6-way electric adjustment",
      content: "√",
    },
    { title: "Front seat ventilation", content: "√" },
    { title: "Rear seat angle adjustable", content: "√" },
    { title: "Rear seat 6/4 fold", content: "√" },
    { title: "Back 360° panoramic image", content: "√" },
    { title: "Lane Departure Warning, LDW", content: "√" },
    { title: "Blind Spot Detection, BSD", content: "√" },
    { title: "Adaptive Cruise Control, ACC", content: "√" },
    { title: "Front Collision Warning, FCW", content: "√" },
    { title: "Voice Control (English)", content: "√" },
    { title: "Wireless charging", content: "√" },
    { title: "Bluetooth", content: "√" },
    { title: "8 Speakers", content: "√" },
    { title: "Automatic headlight", content: "√" },
    { title: "Emergence Stop Signal, ESS", content: "√" },
    { title: "Multi-color interior atmosphere light", content: "√" },
    { title: "Double zone automatic air conditioning", content: "√" },
    { title: "Rear air outlet (blowing surface)", content: "√" },
    {
      title: "Pollen filter/PM2.5 air purification, CN95 filter element",
      content: "√",
    },
  ],
};

function App() {
  const colors = ["#464C47", "#96901D", "#EA3435", "#CBD1D4", "#D1D1D1"];

  const colorNamesX55 = {
    "#464C47": "Platinum Black",
    "#96901D": "Yellow Black",
    "#EA3435": "Red Black",
    "#CBD1D4": "Crystal Black",
    "#D1D1D1": "White Black",
  };

  const colorToImageMapX55 = {
    "#464C47": [
      platinumBlackView1,
      platinumBlackView2,
      platinumBlackView3,
      platinumBlackView4,
    ],
    "#96901D": [
      yellowBlackView1,
      yellowBlackView2,
      yellowBlackView3,
      yellowBlackView4,
    ],
    "#EA3435": [redBlackView1, redBlackView2, redBlackView3, redBlackView4],
    "#CBD1D4": [
      crystalBlackView1,
      crystalBlackView2,
      crystalBlackView3,
      crystalBlackView4,
    ],
    "#D1D1D1": [
      whiteBlackView1,
      whiteBlackView2,
      whiteBlackView3,
      whiteBlackView4,
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
          <img src="/x55-logo.png" alt="X55 Logo" className="h-4 w-auto" />
          <span className="text-sm font-semibold tracking-wide text-gray-900">
            LITE
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
                title: "SMART TECHNOLOGY",
                subtitle: "STANDARD FEATURES INCLUDE:",
                align: "start",
              },
              {
                desktop: Foto2,
                mobile: Foto2Mobile,
                title: "EXCEPTIONAL PERFORMANCE",
                subtitle: "ULTIMATE PERFORMANCE FOR THE DRIVE OF YOUR LIFE",
                align: "end",
              },
              {
                desktop: Foto3,
                mobile: Foto3Mobile,
                title: "REVOLUTIONARY SPORTS STYLING",
                subtitle: "BORN WITH EXCELLENT DESIGN",
                align: "start",
              },
              {
                desktop: Foto4,
                mobile: Foto4Mobile,
                title: "HUMAN-CENTERED COMFORT",
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
                      ? "md:justify-end"
                      : "justify-start"
                      }`}
                  >
                    <div className="max-w-2xl mt-10  flex flex-col gap-4 text-white">
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

          {/* ================= PRICING & SPECS ================= */}
          <div className="py-16 md:px-8 px-5 max-w-4xl m-auto">
            <h2 className="text-center md:text-2xl text-xl font-bold">
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
                  {colorNamesX55[selectedColor]}
                </h2>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
                    Rp 390.000.000,-
                  </p>
                  <p className="text-gray-500 text-sm italic">OTR Jakarta</p>
                </div>
              </div>

              <img
                src={colorToImageMapX55[selectedColor][currentImageIndex]}
                alt={`X55 II View ${currentImageIndex + 1}`}
                className={`mx-auto transition-transform duration-100 ${animating
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
                  }`}
              />
              <img
                src="/Award list BAIC - global.png"
                alt="BAIC Awards"
                className="mx-auto mt-4"
              />

              <div className="flex justify-center gap-4">
                {colorToImageMapX55[selectedColor]?.map((imageSrc, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={`border ${currentImageIndex === index
                      ? "border-red-500"
                      : "opacity-50"
                      }`}
                  >
                    <img src={imageSrc} className="w-24" alt="" />
                  </button>
                ))}
              </div>
            </div>

            <h2 className="text-center md:text-3xl text-2xl mt-10 mb-10">
              X55 II Specifications
            </h2>

            <Accordion
              title="Model/Configuration | Luxury"
              content={carSpecifications.model}
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
                className={`py-3 whitespace-nowrap border-b-2 transition-all ${activeTabGallery === "Video"
                  ? "text-red-600 font-medium border-red-600"
                  : "text-neutral-900 border-transparent"
                  }`}
                onClick={() => handleTabClickGallery("Video")}
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

            {activeTabGallery === "Video" && (
              <div className="mb-10 m-auto mt-10">
                <video controls autoPlay src={X55Video}></video>
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
              href="/book-a-test-drive/index.html?model=x55ii"
            >
              BOOK A TEST DRIVE
            </Button>
            <Button
              variant="dark"
              href="/brochure-x55.pdf"
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
