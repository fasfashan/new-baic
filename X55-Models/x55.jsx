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
      content: "MacPherson Independent suspension/multi-link independent suspension",
    },
    { title: "Front/rear brake", content: "Ventilation Disc / Disc" },
    { title: "Tyres", content: "225/55 R19" },
  ],
  features: [
    { title: "Electronic shifter", content: "√" },
    { title: "Electric Power Steering - EPS (2 mode)", content: "√" },
    { title: "Manual mode shift prompt", content: "√" },
    { title: "Drive mode(ECO/Sport/Comfort/Smart)", content: "√" },
    { title: "ABS (Antilock Brake System)+ EBD (Electronic Brakeforce Distribution)", content: "√" },
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
    { title: "Door mirror with electric fold and auto fold when lock", content: "√" },
    { title: "Panoramic sunroof", content: "√" },
    { title: "Hidden door handle", content: "√" },
    { title: "Rain sensor wiper", content: "√" },
    { title: "Power tailgate with smart anti-pinch", content: "√" },
    { title: "12V charging port & Trunk", content: "√" },
    { title: "Steering wheel off-hand sensing", content: "√" },
    { title: "Multi-function steering wheel with 4-way adjustment", content: "√" },
    { title: "Driver seat memory", content: "√" },
    { title: "Driving seat & Passenger seat 6-way electric adjustment", content: "√" },
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
    { title: "Pollen filter/PM2.5 air purification, CN95 filter element", content: "√" },
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
    "#464C47": [platinumBlackView1, platinumBlackView2, platinumBlackView3, platinumBlackView4],
    "#96901D": [yellowBlackView1, yellowBlackView2, yellowBlackView3, yellowBlackView4],
    "#EA3435": [redBlackView1, redBlackView2, redBlackView3, redBlackView4],
    "#CBD1D4": [crystalBlackView1, crystalBlackView2, crystalBlackView3, crystalBlackView4],
    "#D1D1D1": [whiteBlackView1, whiteBlackView2, whiteBlackView3, whiteBlackView4],
  };

  const [activeTabGallery, setActiveTabGallery] = useState("Interior");
  const [animating, setAnimating] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const accessories = [
    {
      id: 1,
      model: "X55 II",
      title: "X55 Front Grille Chrome",
      price: "Rp 5,500,000",
      image: "/BJ40 Plus Bumper Front Type 2.png",
      installedImage: "/BJ40 Plus Bumper Front Type 2.png",
    },
    {
      id: 2,
      model: "X55 II",
      title: "X55 Side Skirts",
      price: "Rp 8,200,000",
      image: "/BJ40 Plus Bumper Rear Type 2.png",
      installedImage: "/BJ40 Plus Bumper Rear Type 2.png",
    },
    {
      id: 3,
      model: "X55 II",
      title: "X55 Roof Rack Cross Bar",
      price: "Rp 6,800,000",
      image: "/BJ40 Plus Bumper Front Type 2.png",
      installedImage: "/BJ40 Plus Bumper Front Type 2.png",
    },
    {
      id: 4,
      model: "X55 II",
      title: "X55 Rear Spoiler",
      price: "Rp 4,500,000",
      image: "/BJ40 Plus Bumper Rear Type 2.png",
      installedImage: "/BJ40 Plus Bumper Rear Type 2.png",
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
    const currentAccessory = accessories.find((a) => a.id === previewModal.accessoryId);
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
                          SMART TECHNOLOGY
                        </h1>
                        <h2 className="text-xl font-bold">STANDARD FEATURES INCLUDE:</h2>
                      </>
                    )}
                    {i === 1 && (
                      <>
                        <h1 className="md:text-7xl text-4xl font-bold">
                          EXCEPTIONAL PERFORMANCE
                        </h1>
                        <h2 className="text-xl font-bold">ULTIMATE PERFORMANCE FOR THE DRIVE OF YOUR LIFE</h2>
                      </>
                    )}
                    {i === 2 && (
                      <>
                        <h1 className="md:text-7xl text-4xl font-bold">
                          REVOLUTIONARY SPORTS STYLING
                        </h1>
                        <h2 className="text-xl font-bold">BORN WITH EXCELLENT DESIGN</h2>
                      </>
                    )}
                    {i === 3 && (
                      <>
                        <h1 className="md:text-7xl text-4xl font-bold">
                          HUMAN-CENTERED COMFORT
                        </h1>
                        <h2 className="text-xl font-bold">BUILT TOUGH FOR A RELAXED AND THRILLING RIDE</h2>
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
              <p className="text-4xl font-bold">Rp 329.000.000,-</p>
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

              <div className="border select-none border-neutral-500 w-fit justify-center m-auto flex items-center">
                <h2 className="text-center px-4 py-2">{colorNamesX55[selectedColor]}</h2>
              </div>

              <img
                src={colorToImageMapX55[selectedColor][currentImageIndex]}
                alt={`X55 II View ${currentImageIndex + 1}`}
                className={`mx-auto transition-transform duration-100 ${
                  animating ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
                }`}
              />

              <div className="flex justify-center gap-4">
                {colorToImageMapX55[selectedColor]?.map((imageSrc, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={`border ${
                      currentImageIndex === index ? "border-red-500" : "opacity-50"
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

            <Accordion title="Model/Configuration | Luxury" content={carSpecifications.model} />
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
                  activeTabGallery === "Video"
                    ? "text-red-600 font-medium border-red-600"
                    : "text-neutral-900 border-transparent"
                }`}
                onClick={() => handleTabClickGallery("Video")}
              >
                VIDEO
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

            {activeTabGallery === "Video" && (
              <div className="mb-10 m-auto mt-10">
                <video controls autoPlay src={X55Video}></video>
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
              href="/book-a-test-drive/index.html?model=x55ii"
            >
              BOOK A TEST DRIVE
            </a>
            <a
              className="py-3 px-6 bg-white rounded-xl text-black hover:bg-neutral-200 transition-colors"
              href="/brochure-x55.pdf"
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
