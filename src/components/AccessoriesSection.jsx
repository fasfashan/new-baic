import AccessoriesCards from "./AccessoriesCards";

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

  return (
    <section className="py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Accessories
        </h2>

        {/* Accessories Grid */}
        <AccessoriesCards accessories={accessories} />

        {/* View All Button */}
      </div>
    </section>
  );
};

export default AccessoriesSection;
