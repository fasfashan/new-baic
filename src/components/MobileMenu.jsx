import BJ40 from "../assets/BJ40-plus.png";
import BJ30 from "../../public/BJ30-header.png";
import X55 from "../assets/BAIC-X55-II.png";
import X55Lite from "../../public/X55-lite-header.png";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MobileMenu() {
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [activeSeries, setActiveSeries] = useState("BJ Series");
  const [isCustomerCareOpen, setIsCustomerCareOpen] = useState(false);
  const [isPartsAccessoriesOpen, setIsPartsAccessoriesOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const isArcfox = activeSeries === "Arcfox";

  // Specifications data
  const specs = {
    BJ30: { wheelbase: "2820", length: "4730", height: "1790" },
    "BJ40 PLUS": { wheelbase: "2745", length: "4465", height: "1871" },
    "X55 II Lite": { wheelbase: "2735", length: "4620", height: "1680" },
    "X55 II Prime": { wheelbase: "2735", length: "4620", height: "1680" },
    "X55 II": { wheelbase: "2735", length: "4620", height: "1680" },
  };

  // Helper to get base model name for specs mapping
  const getBaseModel = (name) => {
    if (name.startsWith("BJ30")) return "BJ30";
    if (name.startsWith("BJ40 PLUS")) return "BJ40 PLUS";
    if (name.startsWith("X55 II Lite")) return "X55 II Lite";
    if (name.startsWith("X55 II Prime")) return "X55 II Prime";
    if (name.startsWith("X55 II")) return "X55 II";
    return name;
  };

  // Vehicle data structure
  const vehicles = {
    "BJ Series": [
      {
        name: "BJ30 Type 1",
        image: BJ30,
        exploreLink: "/BJ30/index.html",
      },
      {
        name: "BJ30 Type 2",
        image: BJ30,
        exploreLink: "/BJ30/index.html",
      },
      {
        name: "BJ40 PLUS Type 1",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
      {
        name: "BJ40 PLUS Type 2",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
    ],
    "X Series": [
      {
        name: "X55 II Lite",
        image: X55,
        exploreLink: "/X55-Models/index.html",
      },
      {
        name: "X55 II Prime",
        image: X55,
        exploreLink: "/X55-Models/index.html",
      },
    ],
    Arcfox: [
      {
        name: "BJ30 Type 1",
        image: BJ30,
        exploreLink: "/BJ30/index.html",
      },
      {
        name: "BJ30 Type 2",
        image: BJ30,
        exploreLink: "/BJ30/index.html",
      },
      {
        name: "BJ40 PLUS Type 1",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
      {
        name: "BJ40 PLUS Type 2",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
    ],
  };

  return (
    <>
      <div
        className={`w-full space-y-4 min-h-screen flex flex-col transition-all z-40 fixed top-[72px] left-0 right-0 p-5 overflow-y-auto ${
          isArcfox ? "bg-black text-white" : "bg-white"
        }`}
      >
        {/* Vehicle Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsVehicleOpen(!isVehicleOpen)}
          >
            <span className="text-lg font-medium">MODEL</span>
            {isVehicleOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isVehicleOpen && (
            <div className="mt-4 space-y-4">
              {/* Series Tabs */}
              <div className="flex gap-2 flex-wrap">
                <button
                  className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    activeSeries === "BJ Series"
                      ? "bg-red-600 text-white"
                      : isArcfox
                      ? "bg-gray-800 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveSeries("BJ Series")}
                >
                  BJ Series
                </button>
                <button
                  className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    activeSeries === "X Series"
                      ? "bg-red-600 text-white"
                      : isArcfox
                      ? "bg-gray-800 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveSeries("X Series")}
                >
                  X Series
                </button>
                <button
                  className={`py-2 px-4 rounded-lg font-medium text-sm transition-all ${
                    activeSeries === "Arcfox"
                      ? "bg-red-600 text-white"
                      : isArcfox
                      ? "bg-gray-800 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveSeries("Arcfox")}
                >
                  Arcfox
                </button>
              </div>

              {/* Vehicles List - 2 columns with scroll */}
              <div className="max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-3">
                  {vehicles[activeSeries].map((vehicle) => (
                    <div
                      key={vehicle.name}
                      className="flex flex-col p-4 border border-gray-300 rounded-md"
                    >
                      <img
                        className="w-full h-auto"
                        src={vehicle.image}
                        alt={vehicle.name}
                      />
                      <h2 className="text-sm text-red-500 font-medium mt-2">
                        BAIC {vehicle.name}
                      </h2>

                      {/* Specifications - Stacked vertically */}
                      <div className="mt-2 bg-gray-50 rounded-lg p-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-500 uppercase">
                            Wheelbase
                          </span>
                          <span className="text-[10px] font-semibold text-gray-800">
                            {specs[getBaseModel(vehicle.name)].wheelbase} MM
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-500 uppercase">
                            Length
                          </span>
                          <span className="text-[10px] font-semibold text-gray-800">
                            {specs[getBaseModel(vehicle.name)].length} MM
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-500 uppercase">
                            Height
                          </span>
                          <span className="text-[10px] font-semibold text-gray-800">
                            {specs[getBaseModel(vehicle.name)].height} MM
                          </span>
                        </div>
                      </div>

                      <div className="flex mt-2 text-xs">
                        <a
                          className={`py-3 text-center transition-all w-full border border-gray-400 rounded-xl ${
                            isArcfox ? "hover:bg-gray-800" : "hover:bg-gray-100"
                          }`}
                          href={vehicle.exploreLink}
                        >
                          SEE DETAILS
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <hr className={isArcfox ? "border-gray-700" : undefined} />

        {/* Customer Care Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsCustomerCareOpen(!isCustomerCareOpen)}
          >
            <span className="text-lg font-medium">CUSTOMER CARE</span>
            {isCustomerCareOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isCustomerCareOpen && (
            <div className="mt-3 ml-4 space-y-2">
              <a
                href="#"
                className={`block text-sm hover:text-red-600 ${
                  isArcfox ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Schedule your service
              </a>
              <a
                href="/aftersales/index.html"
                className={`block text-sm hover:text-red-600 ${
                  isArcfox ? "text-gray-200" : "text-gray-700"
                }`}
              >
                After Sales Program
              </a>
            </div>
          )}
        </div>
        <hr className={isArcfox ? "border-gray-700" : undefined} />

        {/* Parts & Accessories Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsPartsAccessoriesOpen(!isPartsAccessoriesOpen)}
          >
            <span className="text-lg font-medium">PARTS & ACCESSORIES</span>
            {isPartsAccessoriesOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isPartsAccessoriesOpen && (
            <div className="mt-3 ml-4 space-y-2">
              <a
                href="#"
                className={`block text-sm hover:text-red-600 ${
                  isArcfox ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Genuine Parts - Build for your BAIC
              </a>
              <a
                href="#"
                className={`block text-sm hover:text-red-600 ${
                  isArcfox ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Genuine Accessories - Style your drive
              </a>
            </div>
          )}
        </div>
        <hr className={isArcfox ? "border-gray-700" : undefined} />

        {/* Dealer Link */}
        <div className="w-full rounded-md">
          <a className="text-lg" href="/contact/index.html">
            DEALER
          </a>
        </div>
        <hr className={isArcfox ? "border-gray-700" : undefined} />

        {/* About Us Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
          >
            <span className="text-lg font-medium">ABOUT US</span>
            {isAboutUsOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isAboutUsOpen && (
            <div className="mt-3 ml-4 space-y-2">
              <a
                href="/about-us/index.html"
                className={`block text-sm hover:text-red-600 ${
                  isArcfox ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Corporate
              </a>
              <a
                href="/brand/index.html"
                className={`block text-sm hover:text-red-600 ${
                  isArcfox ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Brand
              </a>
              <a
                href="/news/index.html"
                className={`block text-sm hover:text-red-600 ${
                  isArcfox ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Publication (News & Event)
              </a>
              <a
                href="/career/index.html"
                className={`block text-sm hover:text-red-600 ${
                  isArcfox ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Career
              </a>

              {/* Contact Us Sub-section */}
              <div className=" mt-2">
                <div
                  className={`text-sm font-medium mb-1 ${
                    isArcfox ? "text-white" : "text-gray-900"
                  }`}
                >
                  Contact Us
                </div>
                <div className="ml-2 space-y-1">
                  <a
                    href=""
                    className={`block text-sm hover:text-red-600 ${
                      isArcfox ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Customer Relationship
                  </a>
                  <a
                    href="/social-media"
                    className={`block text-sm hover:text-red-600 ${
                      isArcfox ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Social Media
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr className={isArcfox ? "border-gray-700" : undefined} />

        {/* CTA Buttons */}
        <a
          href="/book-a-test-drive/index.html"
          className="py-3 px-4 font-medium text-sm text-white text-center bg-red-600 hover:bg-red-700 rounded-xl transition-all"
        >
          BOOK A TEST DRIVE
        </a>
        <a
          href="/request-price-list/index.html"
          className="py-3 px-4 font-medium text-sm text-center bg-gray-200 hover:bg-gray-300 rounded-xl transition-all"
        >
          REQUEST PRICE LIST
        </a>
      </div>
    </>
  );
}
