import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import BJ40Video from "../assets/BJ40-Video.mp4";
import BJ30 from "../../public/BJ30Video.mp4";
import X55Video from "../assets/X55-Video.mp4";
import BJ40Mobile from "../../public/Mobile-example-1.mp4";
import X55Mobile from "../../public/Mobile-example-X55.mp4";
import BJ30Mobile from "../../public/Mobile-example-BJ30.mp4";

const slides = [
  {
    id: 1,
    type: "video",
    videoDesktop: BJ30,
    videoMobile: BJ30Mobile,
    title: "Feel the power. Drive it now",
    ctaText: "Explore BJ30",
    ctaLink: "/BJ40/index.html",
  },
  {
    id: 2,
    type: "video",
    videoDesktop: BJ40Video,
    videoMobile: BJ40Mobile,
    title: "Feel the power. Drive it now",
    ctaText: "Explore BJ40 Plus",
    ctaLink: "/X55-Models/index.html",
  },
  {
    id: 3,
    type: "video",
    videoDesktop: X55Video,
    videoMobile: X55Mobile,
    title: "Feel the power. Drive it now",
    ctaText: "Explore X55 II Prime",
    ctaLink: "/X55-Models/index.html",
  },
  {
    id: 4,
    type: "image",
    imageDesktop: "https://placehold.co/1920x1080/444444/FFFFFF/png?text=Desktop+Banner+(1920x1080)",
    imageMobile: "https://placehold.co/1080x1920/444444/FFFFFF/png?text=Mobile+Banner+(1080x1920)",
    title: "Feel the power. Drive it now",
    ctaText: "Explore Extra Models",
    ctaLink: "#",
  },
];

export default function VideoHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef([]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  // Handle transition end
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Handle media playback and auto advance when media ends or timer finishes
  useEffect(() => {
    let cleanup = () => { };

    // Pause other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentSlide) {
        video.pause();
      }
    });

    const isVideo = !slides[currentSlide].type || slides[currentSlide].type === "video";

    if (isVideo) {
      const currentVideo = videoRefs.current[currentSlide];

      if (currentVideo) {
        currentVideo.currentTime = 0;
        currentVideo.play().catch(console.error);

        // Add event listener for when video ends
        const handleVideoEnd = () => {
          setIsTransitioning(true);
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        };

        currentVideo.addEventListener("ended", handleVideoEnd);

        cleanup = () => {
          currentVideo.removeEventListener("ended", handleVideoEnd);
        };
      }
    } else {
      // Auto advance image slides after 5 seconds
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);

      cleanup = () => clearTimeout(timer);
    }

    return cleanup;
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Media Background */}
          {(!slide.type || slide.type === "video") ? (
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay={index === currentSlide}
              muted
              playsInline
              preload="metadata"
            >
              <source
                src={slide.videoDesktop}
                type="video/mp4"
                media="(min-width: 768px)"
              />
              <source
                src={slide.videoMobile}
                type="video/mp4"
                media="(max-width: 767px)"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <picture>
              <source media="(min-width: 768px)" srcSet={slide.imageDesktop} />
              <img
                src={slide.imageMobile}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </picture>
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
        </div>
      ))}

      {/* CTA Button above navigation */}
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 z-30">
        <Button variant="light" href={slides[currentSlide].ctaLink}>
          {slides[currentSlide].ctaText}
        </Button>
      </div>

      {/* Navigation Container with max-width */}
      <div className="absolute inset-0 flex items-center justify-between z-30 pointer-events-none max-w-6xl mx-auto w-full">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="pointer-events-auto ml-4 md:ml-8 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
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
          className="pointer-events-auto mr-4 md:mr-8 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-white rounded-full px-4 py-3 flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`rounded-full transition-all duration-300 disabled:cursor-not-allowed ${index === currentSlide
                ? "bg-red-600 w-10 h-2"
                : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
