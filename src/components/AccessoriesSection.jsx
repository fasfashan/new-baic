import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const AccessoriesSection = () => {
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

  const [activeSlides, setActiveSlides] = useState(
    accessories.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}),
  );

  const [previewModal, setPreviewModal] = useState({
    isOpen: false,
    accessoryId: null,
    imageIndex: 0,
  });

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
      (a) => a.id === previewModal.accessoryId,
    );
    const images = [currentAccessory.image, currentAccessory.installedImage];
    const newIndex =
      direction === "next"
        ? (previewModal.imageIndex + 1) % images.length
        : (previewModal.imageIndex - 1 + images.length) % images.length;

    setPreviewModal((prev) => ({ ...prev, imageIndex: newIndex }));
  };

  return (
    <section className="py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Accessories
        </h2>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory) => {
            const images = [accessory.image, accessory.installedImage];
            const currentSlide = activeSlides[accessory.id];

            return (
              <div
                key={accessory.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Image Container with Slider */}
                <div className="relative overflow-hidden bg-gray-50 h-64">
                  <div
                    className={`relative h-full flex items-center justify-center cursor-pointer ${currentSlide === 0 ? "p-4" : ""}`}
                    onClick={() => openPreview(accessory.id, currentSlide)}
                  >
                    <img
                      src={images[currentSlide]}
                      alt={`${accessory.model} ${accessory.title}`}
                      className={`w-full h-full ${currentSlide === 0 ? "object-contain" : "object-cover"} group-hover:scale-110 transition-transform duration-500`}
                    />
                  </div>

                  {/* Model Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {accessory.model}
                    </span>
                  </div>

                  {/* Slider Dots */}
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

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {accessory.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">
                    {accessory.price}
                  </p>
                  <a
                    href="/buy-accessories/index.html"
                    className="block w-full py-2 px-4 text-sm text-center text-black bg-transparent border border-black rounded-lg"
                  >
                    Buy Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2 ">
                    *Gambar hanya ilustrasi.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
      </div>

      {/* Preview Modal */}
      {previewModal.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closePreview}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePreview("prev");
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <div
              className="max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  accessories.find((a) => a.id === previewModal.accessoryId)
                    ? [
                        accessories.find(
                          (a) => a.id === previewModal.accessoryId,
                        ).image,
                        accessories.find(
                          (a) => a.id === previewModal.accessoryId,
                        ).installedImage,
                      ][previewModal.imageIndex]
                    : ""
                }
                alt="Preview"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePreview("next");
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {previewModal.imageIndex + 1} / 2
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AccessoriesSection;
