/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import AccessoriesTab from "../src/components/AccessoriesTab";
import "../src/index.css";
import { useState } from "react";
import BJ30Logo from "../src/assets/BJ30-logo.png";
import BJ40Video from "../src/assets/BJ40-Video.mp4";
import Foto1 from "../src/assets/BJ30-single-produk-1.jpg";
import Foto2 from "../src/assets/BJ30-single-produk-2.jpg";
import Foto3 from "../src/assets/BJ30-single-produk-3.jpg";
import Foto4 from "../src/assets/BJ30-single-produk-4.jpg";
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
import exterior5 from "../src/assets/exterior-5.png";
import exterior6 from "../src/assets/exterior-6.png";
import CTA from "../src/components/cta";
import Accordion from "../src/components/Accordion";
import ButtonChat from "../src/components/ButtonChat";
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
    "#8DB600",
    "#87CEEB",
    "#C0C0C0",
    "#000000",
    "#808080",
    "#ffffff",
  ];
  const colorNamesBJ30 = {
    "#8DB600": "Apple Green",
    "#87CEEB": "Blue Sky",
    "#C0C0C0": "Bubble Grey",
    "#000000": "Jade Black",
    "#808080": "Matte Grey",
    "#ffffff": "Snow White",
  };
  const colorToFileBJ30 = {
    "#8DB600": "apple-green.png",
    "#87CEEB": "blue-sky.png",
    "#C0C0C0": "bubble-grey.png",
    "#000000": "jade-black.png",
    "#808080": "matte-grey.png",
    "#ffffff": "snow-white.png",
  };

  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    window.scrollTo(0, 0);
  };
  const handleTabClickGallery = (tab) => {
    setActiveTabGallery(tab);
    window.scrollTo(0, 0);
  };

  const [activeTabGallery, setActiveTabGallery] = useState("Interior");
  const [animating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const onColorSelect = (color) => {
    if (color !== selectedColor) {
      setAnimating(true);
      setTimeout(() => {
        setSelectedColor(color);
        setAnimating(false);
      }, 100); // Duration of the transition
    }
  };

  return (
    <>
      <Header />
      <ButtonChat />
      <div className="bg-neutral-400    ">
        <div className=" py-6 z-10  bg-neutral-100  sticky  top-16 items-center ">
          <div className="max-w-6xl gap-4 flex justify-between flex-wrap m-auto md:px-8 px-5">
            <img
              width={100}
              className="object-contain"
              src={BJ30Logo}
              alt="BJ30 Logo"
            />
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              <button
                className={`py-2 transition-all whitespace-nowrap ${
                  activeTab === "Overview" ? "text-red-600 font-medium" : ""
                }`}
                onClick={() => handleTabClick("Overview")}
              >
                OVERVIEW
              </button>
              <button
                className={`py-2 transition-all whitespace-nowrap ${
                  activeTab === "Pricing" ? "text-red-600 font-medium" : ""
                }`}
                onClick={() => handleTabClick("Pricing")}
              >
                PRICING & SPECS
              </button>
              <button
                className={`py-2 transition-all whitespace-nowrap ${
                  activeTab === "Gallery" ? "text-red-600 font-medium" : ""
                }`}
                onClick={() => handleTabClick("Gallery")}
              >
                GALLERY
              </button>
              <button
                className={`py-2 transition-all whitespace-nowrap ${
                  activeTab === "Accessories" ? "text-red-600 font-medium" : ""
                }`}
                onClick={() => handleTabClick("Accessories")}
              >
                ACCESSORIES
              </button>
              <a
                className="py-3 md:block hidden px-8 text-sm text-white text-center bg-red-600 transition-all border border-white hover:border-none rounded-xl whitespace-nowrap"
                href="/book-a-test-drive/index.html?model=bj30"
              >
                BOOK A TEST DRIVE
              </a>
            </div>
          </div>
        </div>
        <div className="bg-neutral-200">
          {activeTab === "Overview" && (
            <div className=" md:pt-16 pt-10">
              <div
                className="h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto1})` }}
              >
                <div className="flex max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-4xl font-bold max-w-lg mb-4">
                      HEART OF A HYBRID
                    </h1>
                    <h2 className="text-xl font-bold">
                      The five-hole daytime running light belt boasts both
                      technological appeal and practical utility.
                    </h2>
                    <p className="font-light">
                      Distinctive five-lens LED daytime running lights combine
                      cutting-edge design with real function. More than just
                      lighting—these lights signal innovation. Precisely
                      designed to increase visibility, these lights emphasize
                      the BJ30 Hybrid's bold presence on all terrains, day and
                      night.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto2})` }}
              >
                <div className="flex md:justify-end max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-4xl font-bold max-w-lg mb-4">
                      LIGHT THE PATH AHEAD.
                    </h1>
                    <h2 className="text-xl font-bold">
                      ULTIMATE PERFORMANCE FOR THE DRIVE OF YOUR LIFE
                    </h2>
                    <p className="font-light">
                      Jelajahi dunia yang belum dijamah dengan kehandalan BJ40
                      Plus yang tidak perlu dipertanyakan lagi. SUV luar biasa
                      ini menyediakan tenaga yang melimpah, memungkinkan anda
                      unuk membuka jalan menuju cakrawala baru.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto3})` }}
              >
                <div className="flex justify-start max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-4xl font-bold max-w-lg mb-4">
                      RUGGED REAR DESIGN
                    </h1>
                    <h2 className="text-xl font-bold">BOLD FROM BEHIND.</h2>
                    <p className="font-light">
                      Bold and stylish. The rear appearance of the BJ30 Hybrid
                      is enhanced by vertical “double-D” style lights that are
                      not only functional, but also iconic—affirming the
                      identity of a tough SUV that is ready to attract attention
                      wherever it goes.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" h-full  bg-cover bg-center"
                style={{ backgroundImage: `url(${Foto4})` }}
              >
                <div className="flex md:justify-end max-w-6xl m-auto py-40 items-center  h-full   text-white">
                  <div className="max-w-2xl px-10  flex flex-col gap-4">
                    <h1 className="md:text-7xl text-4xl font-bold max-w-lg mb-4">
                      TECHNOLOGY WITH THRUST
                    </h1>
                    <h2 className="text-xl font-bold">COMFORT IN COMMAND</h2>
                    <p className="font-light">
                      The fighter jet engine-style design of the electronic
                      shift lever is more than just stylish—it offers precise
                      control and a sophisticated feel ready to support any
                      adventure. Behind the wheel of the BJ30 Hybrid,
                      cutting-edge technology meets top-class comfort. Luxurious
                      cabin materials, dynamic ambient lighting and powerful
                      hybrid performance make every trip more exciting,
                      comfortable and ready to face the challenges of any
                      terrain.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 py-10 justify-center items-center bg-black">
                <a
                  className="py-3 w-fit md:block hidden px-8 text-sm text-white text-center bg-red-600 transition-all  hover:border-none rounded-xl whitespace-nowrap"
                  href="/book-a-test-drive/index.html?model=bj40plus"
                >
                  BOOK A TEST DRIVE
                </a>
                <a
                  className="py-2.5 px-4 font-medium text-black text-sm text-center bg-white transition-all hover:bg-neutral-100 rounded-xl whitespace-nowrap"
                  href="/brochure-bj40.pdf"
                >
                  DOWNLOAD BROCHURE
                </a>
              </div>
            </div>
          )}
          {activeTab === "Pricing" && (
            <div className="py-16  md:px-8 px-5 max-w-4xl m-auto overflow-hidden bg-neutral-200 ">
              <div className="space-y-1 text-center mt-10 ">
                <div className="flex space-x-3 justify-center">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border border-neutral-200 cursor-pointer transition-transform duration-200 ${
                        selectedColor === color
                          ? "border-4 outline outline-red-500 border-white transform scale-110"
                          : "border-2 border-transparent"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => onColorSelect(color)}
                    ></div>
                  ))}
                </div>
                <div className="flex flex-col max-w-2xl overflow-hidden justify-center mx-auto">
                  <div className="flex flex-col justify-center mt-4">
                    <div className="border select-none rounded-xl border-neutral-500 w-fit justify-center m-auto mt-4 mb-4 flex items-center">
                      <h2 className="text-center transition-all px-4 py-2">
                        {colorNamesBJ30[selectedColor]}
                      </h2>
                    </div>
                    <img
                      src={`/BJ30/${colorToFileBJ30[selectedColor]}`}
                      alt={`BJ30 ${colorNamesBJ30[selectedColor]}`}
                      className={`w-full h-auto object-contain transition-opacity duration-100 ${
                        animating ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <h2 className=" text-center md:text-3xl text-2xl mt-10">
                BJ30 Specifications
              </h2>
              <div className="overflow-x-auto mt-10">
                <Accordion
                  title="Engine & Drivetrain"
                  content={carSpecifications.engine}
                />
                <Accordion
                  title="Features"
                  content={carSpecifications.features}
                />
                <div className="max-w-5xl mt-10 font-light text-xs m-auto mb-10 leading-relaxed  ">
                  <p className="md:max-w-2xl ">
                    DISCLAIMER* <br></br>
                    Specifications, equipment, colors & materials shown here may
                    differ from every country. Please check with your local
                    dealer for the latest information
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Gallery" && (
            <div className="  md:px-8 px-5 max-w-6xl m-auto overflow-hidden bg-neutral-200 pt-4">
              <div className="flex gap-8  justify-center   ">
                <button
                  className={`py-2 transition-all    ${
                    activeTabGallery === "Interior"
                      ? "text-red-600 font-medium border-b border-red-600"
                      : ""
                  }`}
                  onClick={() => handleTabClickGallery("Interior")}
                >
                  INTERIOR
                </button>
                <button
                  className={`py-2 transition-all    ${
                    activeTabGallery === "Exterior"
                      ? "text-red-600 font-medium border-b border-red-600"
                      : ""
                  }`}
                  onClick={() => handleTabClickGallery("Exterior")}
                >
                  EXTERIOR
                </button>
                <button
                  className={`py-2 transition-all    ${
                    activeTabGallery === "Video"
                      ? "text-red-600 font-medium border-b border-red-600"
                      : ""
                  }`}
                  onClick={() => handleTabClickGallery("Video")}
                >
                  VIDEO
                </button>
              </div>
              {activeTabGallery === "Interior" && (
                <>
                  <div className="mb-10 m-auto  mt-10">
                    <div className=" grid grid-cols-6">
                      <img
                        src={interior1}
                        alt="interior 1"
                        className="w-full col-span-4"
                      />
                      <img
                        src={interior2}
                        alt="interior 1"
                        className="w-full h-full col-span-2 object-cover  "
                      />
                    </div>
                    <div className=" grid grid-cols-6">
                      <img
                        src={interior3}
                        alt="interior 1"
                        className="w-full h-full object-cover col-span-2"
                      />
                      <img
                        src={interior4}
                        alt="interior 1"
                        className="w-full  col-span-4   "
                      />
                    </div>
                    <div className=" grid grid-cols-6">
                      <img
                        src={interior5}
                        alt="interior 1"
                        className="w-full col-span-4"
                      />
                      <img
                        src={interior6}
                        alt="interior 1"
                        className="w-full h-full col-span-2 object-cover  "
                      />
                    </div>
                  </div>
                </>
              )}
              {activeTabGallery === "Exterior" && (
                <>
                  <div className="mb-10 m-auto  mt-10">
                    <div className=" grid grid-cols-6">
                      <img
                        src={exterior1}
                        alt="exterior 1"
                        className="w-full col-span-4"
                      />
                      <img
                        src={exterior2}
                        alt="exterior 2"
                        className="w-full h-full col-span-2 object-cover  "
                      />
                    </div>
                    <div className=" grid grid-cols-6">
                      <img
                        src={exterior3}
                        alt="exterior 3"
                        className="w-full h-full object-cover col-span-2"
                      />
                      <img
                        src={exterior4}
                        alt="exterior 4"
                        className="w-full  col-span-4   "
                      />
                    </div>
                    <div className=" grid grid-cols-6">
                      <img
                        src={exterior5}
                        alt="exterior 1"
                        className="w-full col-span-4"
                      />
                      <img
                        src={exterior6}
                        alt="exterior 2"
                        className="w-full h-full col-span-2 object-cover  "
                      />
                    </div>
                  </div>
                </>
              )}
              {activeTabGallery === "Video" && (
                <>
                  <div className="mb-10 m-auto  mt-10">
                    <video controls autoPlay src={BJ40Video}></video>
                  </div>
                </>
              )}
            </div>
          )}
          {activeTab === "Accessories" && (
            <div className="bg-neutral-200 py-16">
              <AccessoriesTab />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
