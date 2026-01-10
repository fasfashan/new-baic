import React from "react";

const AccessoriesSection = () => {
  const accessories = [
    {
      id: 1,
      model: "BJ30",
      title: "BJ30 Roof Rack Upper",
      price: "Rp 9,673,000",
      image: "/BJ30 Roof Rack Upper.png",
      link: "/contact/index.html",
    },
    {
      id: 2,
      model: "BJ30",
      title: "BJ30 Luggage Box - Side Net Backpack",
      price: "Rp 4,890,000",
      image: "/BJ30 Luggage Box - Side Net Backpack.png",
      link: "/contact/index.html",
    },
    {
      id: 3,
      model: "BJ40 PLUS",
      title: "BJ40 Plus Bumper Front Type 2",
      price: "Rp 11,428,000",
      image: "/BJ40 Plus Bumper Front Type 2.png",
      link: "/contact/index.html",
    },
    {
      id: 4,
      model: "BJ40 PLUS",
      title: "BJ40 Plus Bumper Rear Type 2",
      price: "Rp 11,428,000",
      image: "/BJ40 Plus Bumper Rear Type 2.png",
      link: "/contact/index.html",
    },
  ];

  return (
    <section className="py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Accessories
        </h2>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory) => (
            <a
              key={accessory.id}
              href={accessory.link}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-50 h-64 flex items-center justify-center p-4">
                <img
                  src={accessory.image}
                  alt={`${accessory.model} ${accessory.title}`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {/* Model Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {accessory.model}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {accessory.title}
                </h3>
                <p className="text-gray-600 font-medium">{accessory.price}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
      </div>
    </section>
  );
};

export default AccessoriesSection;
