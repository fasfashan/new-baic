/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";
import { useState } from "react";
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
    { title: "Rear seat configuration", content: "4WD with Electronic Shifter" },
    { title: "Rear seat recline function", content: "√" },
    { title: "6 speakers", content: "√" },
    { title: "Anti-lock Braking System (ABS)", content: "√" },
    { title: "Electronic Brake force Distribution (ABS)", content: "√" },
    {
      title: "Electronic stability Programme (ESP), Emergency Brake Assist(EBA)",
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

  const [activeTabGallery, setActiveTabGallery] = useState("Interior");
  const [animating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const accessories = [
    {
      id: 1,
      model: "BJ30",
      title: "BJ30 Roof Rack Upper",
      price: "Rp 9,673,000",
      image: "/BJ30 Accessories - Roof Rack Upper.png",
      installedImage: "/BJ30 Accessories - Roof Rack Upper.png",
    },
    {
      id: 2,
      model: "BJ30",
      title: "BJ30 Luggage Box - Side Net Backpack",
      price: "Rp 4,890,000",
      image: "/BJ30 Luggage Box - Side Net Backpack.png",
      installedImage: "/BJ30 Luggage Box - Side Net Backpack.png",
    },
    {
      id: 3,
      model: "BJ30",
      title: "BJ30 Front Grille",
      price: "Rp 8,500,000",
      image: "/BJ30 Accessories - Roof Rack Upper.png",
      installedImage: "/BJ30 Accessories - Roof Rack Upper.png",
    },
    {
      id: 4,
      model: "BJ30",
      title: "BJ30 Side Steps",
      price: "Rp 7,200,000",
      image: "/BJ30 Luggage Box - Side Net Backpack.png",
      installedImage: "/BJ30 Luggage Box - Side Net Backpack.png",
    },
  ];

  const [activeSlides, setActiveSlides] = useState(
    accessories.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    accessoryId: null,
    imageIndex: 0,
  });

  const handleTabClickGallery = (tab) => {
    setActiveTabGallery(tab);
  };

  const handleSlideChange = (id, index) => {
    setActiveSlides((prev) => ({ ...prev, [id]: index }));
  };

  const openPreview = (accessoryId, imageIndex) => {
    setPreviewModal({ isOpen: true, accessoryId, imageIndex });
  };

  const closePreview = () => {
    setPreviewModal({ isOpen: false, accessoryId: null, imageIndex: 0 });
  };

  const navigatePreview = (direction) => {
    const currentAccessory = accessories.find(
      (a) => a.id === previewModal.accessoryId
    );
    const images = [currentAccessory.image, currentAccessory.installedImage];
    const newIndex =
      direction === "next"
        ? (previewModal.imageIndex + 1) % images.length
        : (previewModal.imageIndex - 1 + images.length) % images.length;

    setPreviewModal((prev) => ({ ...prev, imageIndex: newIndex }));
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
      <Header />
      <ButtonChat />

      <div className="bg-neutral-400">
        <div className="bg-neutral-200">
          {/* ================= OVERVIEW ================= */}
          <div>
            {[Foto1, Foto2, Foto3, Foto4].map((bg, i) => (
              <div
                key={i}
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}
              >
                <div
                  className={`flex ${i % 2 === 1 ? "md:justify-end" : "justify-start"} max-w-6xl m-auto py-40 items-center h-full text-white`}
                >
                  <div className="max-w-2xl px-10 flex flex-col gap-4">
                    {i === 0 && (
                      <>
                        <h1 className="md:text-7xl text-4xl font-bold">
                          HEART OF A HYBRID
                        </h1>
                        <h2 className="text-xl font-bold">
                          The five-hole daytime running light belt boasts both technological appeal and practical utility.
                        </h2>
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <h1 className="md:text-7xl text-4xl font-bold">
                          LIGHT THE PATH AHEAD
                        </h1>
                        <h2 className="text-xl font-bold">ULTIMATE PERFORMANCE FOR THE DRIVE OF YOUR LIFE</h2>
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <h1 className="md:text-7xl text-4xl font-bold">
                          RUGGED REAR DESIGN
                        </h1>
                        <h2 className="text-xl font-bold">BOLD FROM BEHIND</h2>
                      </>
                    )}
                    {i === 3 && (
                      <>
                        <h1 className="md:text-7xl text-4xl font-bold">
                          TECHNOLOGY WITH THRUST
                        </h1>
                        <h2 className="text-xl font-bold">COMFORT IN COMMAND</h2>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= PRICING & SPECS ================= */}
          <div className="py-16 md:px-8 px-5 max-w-4xl m-auto">
            <h2 className="text-center text-4xl font-bold">PRICING & SPECS</h2>

            <div className="text-center mt-10">
              <p className="text-4xl font-bold">Rp 529.000.000,-</p>
              <p className="text-sm text-neutral-600">OTR Jakarta</p>
            </div>

            {/* COLOR SELECT */}
            <div className="mt-10 space-y-4 mb-10">
              <div className="flex justify-center gap-3">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                      selectedColor === color
                        ? "outline outline-red-500 scale-110 border-white"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => onColorSelect(color)}
                  />
                ))}
              </div>

              <div className="border select-none rounded-xl border-neutral-500 w-fit justify-center m-auto flex items-center">
                <h2 className="text-center px-4 py-2">
                  {colorNamesBJ30[selectedColor]}
                </h2>
              </div>

              <img
                src={`/BJ30/${colorToFileBJ30[selectedColor]}`}
                alt={`BJ30 ${colorNamesBJ30[selectedColor]}`}
                className={`w-full h-auto object-contain mx-auto transition-opacity duration-100 ${
                  animating ? "opacity-0" : "opacity-100"
                }`}
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
                DISCLAIMER*<br />
                Specifications, equipment, colors & materials shown here may differ from every country. Please check with your local dealer for the latest information
              </p>
            </div>
          </div>

          {/* ================= GALLERY ================= */}
          <div className="md:px-8 px-5 max-w-6xl m-auto overflow-hidden bg-neutral-200 pt-16">
            <h2 className="text-center text-4xl font-bold">GALLERY</h2>

            <div className="flex justify-center mt-10 gap-10">
              <button
                className={`py-3 whitespace-nowrap border-b-2 transition-all ${
                  activeTabGallery === "Interior"
                    ? "text-red-600 font-medium border-red-600"
                    : "text-neutral-900 border-transparent"
                }`}
                onClick={() => handleTabClickGallery("Interior")}
              >
                INTERIOR
              </button>
              <button
                className={`py-3 whitespace-nowrap border-b-2 transition-all ${
                  activeTabGallery === "Exterior"
                    ? "text-red-600 font-medium border-red-600"
                    : "text-neutral-900 border-transparent"
                }`}
                onClick={() => handleTabClickGallery("Exterior")}
              >
                EXTERIOR
              </button>
              <button
                className={`py-3 whitespace-nowrap border-b-2 transition-all ${
                  activeTabGallery === "Feature"
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
                  <img src={interior1} alt="interior 1" className="w-full col-span-4" />
                  <img src={interior2} alt="interior 2" className="w-full h-full col-span-2 object-cover" />
                </div>
                <div className="grid grid-cols-6">
                  <img src={interior3} alt="interior 3" className="w-full h-full object-cover col-span-2" />
                  <img src={interior4} alt="interior 4" className="w-full col-span-4" />
                </div>
                <div className="grid grid-cols-6">
                  <img src={interior5} alt="interior 5" className="w-full col-span-4" />
                  <img src={interior6} alt="interior 6" className="w-full h-full col-span-2 object-cover" />
                </div>
              </div>
            )}

            {activeTabGallery === "Exterior" && (
              <div className="mb-10 m-auto mt-10">
                <div className="grid grid-cols-6">
                  <img src={exterior1} alt="exterior 1" className="w-full col-span-4" />
                  <img src={exterior2} alt="exterior 2" className="w-full h-full col-span-2 object-cover" />
                </div>
                <div className="grid grid-cols-6">
                  <img src={exterior3} alt="exterior 3" className="w-full h-full object-cover col-span-2" />
                  <img src={exterior4} alt="exterior 4" className="w-full col-span-4" />
                </div>
                <div className="grid grid-cols-6">
                  <img src={exterior5} alt="exterior 5" className="w-full col-span-4" />
                  <img src={exterior6} alt="exterior 6" className="w-full h-full col-span-2 object-cover" />
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
          <div className="py-16 bg-neutral-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-center text-4xl font-bold mb-12">ACCESSORIES</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {accessories.map((accessory) => {
                  const images = [accessory.image, accessory.installedImage];
                  const currentSlide = activeSlides[accessory.id];

                  return (
                    <div
                      key={accessory.id}
                      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                      <div className="relative overflow-hidden bg-gray-50 h-64">
                        <div
                          className="relative h-full flex items-center justify-center p-4 cursor-pointer"
                          onClick={() => openPreview(accessory.id, currentSlide)}
                        >
                          <img
                            src={images[currentSlide]}
                            alt={`${accessory.model} ${accessory.title}`}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {accessory.model}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                          {images.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSlideChange(accessory.id, index);
                              }}
                              className={`w-2 h-2 rounded-full transition-all ${
                                currentSlide === index
                                  ? "bg-red-600 w-6"
                                  : "bg-gray-300 hover:bg-gray-400"
                              }`}
                              aria-label={`View image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {accessory.title}
                        </h3>
                        <p className="text-gray-600 font-medium mb-4">
                          {accessory.price}
                        </p>
                        <a
                          href="/buy-accessories/index.html"
                          className="block w-full py-2 px-4 text-sm text-center text-black bg-transparent border border-black rounded-lg hover:bg-black hover:text-white transition-colors"
                        >
                          Buy Now
                        </a>
                        <p className="text-xs text-gray-500 mt-2">*Gambar hanya ilustrasi.</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= CTA ================= */}
          <div className="flex gap-4 py-16 justify-center items-center bg-black">
            <a
              className="py-3 px-8 border border-white text-white rounded-xl hover:bg-white hover:text-black transition-colors"
              href="/book-a-test-drive/index.html?model=bj30"
            >
              BOOK A TEST DRIVE
            </a>
            <a
              className="py-3 px-6 bg-white rounded-xl text-black hover:bg-neutral-200 transition-colors"
              href="/brochure-bj30.pdf"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {previewModal.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closePreview}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 text-4xl"
            >
              ×
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePreview("prev");
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 text-6xl"
            >
              ‹
            </button>
            <div
              className="max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  accessories.find((a) => a.id === previewModal.accessoryId)
                    ? [
                        accessories.find((a) => a.id === previewModal.accessoryId).image,
                        accessories.find((a) => a.id === previewModal.accessoryId).installedImage,
                      ][previewModal.imageIndex]
                    : ""
                }
                alt="Preview"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePreview("next");
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 text-6xl"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {previewModal.imageIndex + 1} / 2
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;
