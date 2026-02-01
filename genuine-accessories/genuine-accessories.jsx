import { useState, useEffect } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CtaSection from "../src/components/CtaSection";
import AccessoriesCards from "../src/components/AccessoriesCards";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";

function App() {
  const [selectedModel, setSelectedModel] = useState("BJ30");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroSlides = [
    { image: "/bg-aksesoris.jpg", hasText: true },
    { image: "/bg-aksesoris-slide-2.jpg", hasText: false },
    { image: "/bg-aksesoris-slide-3.jpg", hasText: false },
    { image: "/bg-aksesoris-slide-4.jpg", hasText: false },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  const accessories = [
    {
      id: 1,
      model: "BJ30",
      title: "BJ30 Roof Rack Upper",
      price: "Rp 9,673,000",
      image: "/BJ30 Accessories - Roof Rack Upper.png",
      installedImage: "/BJ30 Accessories - Roof Rack Upper.webp",
      link: "/contact/index.html",
    },
    {
      id: 2,
      model: "BJ30",
      title: "BJ30 Luggage Box - Side Net Backpack",
      price: "Rp 4,890,000",
      image: "/BJ30 Luggage Box - Side Net Backpack.png",
      installedImage:
        "/BJ30 Accessories - Luggage Box Side Backpack-installed.png",
      link: "/contact/index.html",
    },
    {
      id: 3,
      model: "BJ40 PLUS",
      title: "BJ40 Luggage Box - Side Backpack",
      price: "Rp 3,882,800",
      image: "/BJ40 Plus Accessories - Luggage Box Side Backpac.png",
      installedImage:
        "/BJ40 Plus Accessories - Luggage Box Side Backpack-installed.jpg",
      link: "/contact/index.html",
    },
    {
      id: 4,
      model: "BJ40 PLUS",
      title: "BJ40 Steel Tube Door",
      price: "Rp 9,421,900",
      image: "/BJ40 Plus Tubular Door.png",
      installedImage: "/BJ40 Plus Tubular Door-installed.png",
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
      <div className="relative w-full h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.image}-${index}`}
            className={`absolute inset-0 bg-cover bg-center flex items-center justify-center transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            {slide.hasText && (
              <h1 className="relative text-white text-5xl md:text-6xl font-bold">
                Genuine Accessories
              </h1>
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-white rounded-full px-4 py-3 flex items-center space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  index === currentSlide
                    ? "bg-red-600 w-10 h-2"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
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
          <AccessoriesCards accessories={filteredAccessories} />

          {filteredAccessories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">
                No accessories available for the selected model.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
