import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const AccessoriesCards = ({ accessories = [] }) => {
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
    if (!currentAccessory) return;

    const images = [
      currentAccessory.image,
      currentAccessory.installedImage,
    ].filter(Boolean);
    if (images.length === 0) return;

    const newIndex =
      direction === "next"
        ? (previewModal.imageIndex + 1) % images.length
        : (previewModal.imageIndex - 1 + images.length) % images.length;

    setPreviewModal((prev) => ({ ...prev, imageIndex: newIndex }));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {accessories.map((accessory) => {
          const images = [accessory.image, accessory.installedImage].filter(
            Boolean,
          );
          const currentSlide = activeSlides[accessory.id] ?? 0;

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
                {images.length > 1 && (
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
                )}
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
                  className="block w-full py-2 px-4 text-sm text-center text-black bg-transparent border border-black rounded-lg hover:bg-black hover:text-white transition-all"
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
              {(() => {
                const currentAccessory = accessories.find(
                  (a) => a.id === previewModal.accessoryId,
                );
                const images = currentAccessory
                  ? [
                      currentAccessory.image,
                      currentAccessory.installedImage,
                    ].filter(Boolean)
                  : [];

                return (
                  <img
                    src={images[previewModal.imageIndex] || ""}
                    alt="Preview"
                    className="max-w-full max-h-full object-contain"
                  />
                );
              })()}
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
            {(() => {
              const currentAccessory = accessories.find(
                (a) => a.id === previewModal.accessoryId,
              );
              const images = currentAccessory
                ? [
                    currentAccessory.image,
                    currentAccessory.installedImage,
                  ].filter(Boolean)
                : [];

              return (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                  {Math.min(previewModal.imageIndex + 1, images.length || 1)} /{" "}
                  {Math.max(images.length, 1)}
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
};

export default AccessoriesCards;
