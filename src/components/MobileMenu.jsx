import BJ40 from "../assets/BJ40-plus.png";
import BJ30 from "../../public/BJ30-header.png";
import X55 from "../assets/BAIC-X55-II.png";
import X55Lite from "../../public/X55-lite-header.png";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MobileMenu() {
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [activeSeries, setActiveSeries] = useState("BJ Series");
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  // Specifications data
  const specs = {
    "BJ30": { wheelbase: "2820", length: "4730", height: "1790" },
    "BJ40 PLUS": { wheelbase: "2745", length: "4465", height: "1871" },
    "X55 II Lite": { wheelbase: "2735", length: "4620", height: "1680" },
    "X55 II Prime": { wheelbase: "2735", length: "4620", height: "1680" },
    "X55 II": { wheelbase: "2735", length: "4620", height: "1680" },
  };

  // Vehicle data structure
  const vehicles = {
    "BJ Series": [
      {
        name: "BJ30",
        image: BJ30,
        exploreLink: "/BJ40/index.html",
      },
      {
        name: "BJ40 PLUS",
        image: BJ40,
        exploreLink: "/BJ40/index.html",
      },
    ],
    "X Series": [
      {
        name: "X55 II",
        image: X55,
        exploreLink: "/X55-Models/index.html",
      },
    ],
  };

  return (
    <>
      <div className="w-full space-y-4 min-h-screen flex flex-col transition-all z-40 fixed top-[72px] left-0 right-0 p-5 bg-white overflow-y-auto">
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
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActiveSeries("X Series")}
                >
                  X Series
                </button>
              </div>

              {/* Vehicles List */}
              <div className="space-y-3">
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
                    
                    {/* Specifications */}
                    <div className="mt-2 bg-gray-50 rounded-lg p-2">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase">Wheelbase</p>
                          <p className="text-xs font-semibold text-gray-800">{specs[vehicle.name].wheelbase}</p>
                          <p className="text-[8px] text-gray-400">MM</p>
                        </div>
                        <div className="border-l border-r border-gray-200">
                          <p className="text-[9px] text-gray-500 uppercase">Length</p>
                          <p className="text-xs font-semibold text-gray-800">{specs[vehicle.name].length}</p>
                          <p className="text-[8px] text-gray-400">MM</p>
                        </div>
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase">Height</p>
                          <p className="text-xs font-semibold text-gray-800">{specs[vehicle.name].height}</p>
                          <p className="text-[8px] text-gray-400">MM</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex mt-2 text-xs">
                      <a
                        className="py-3 text-center hover:bg-gray-100 transition-all w-full border border-gray-400 rounded-xl"
                        href={vehicle.exploreLink}
                      >
                        EXPLORE MORE
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <hr />

        {/* Services Accordion */}
        <div className="w-full rounded-md">
          <a className="text-lg" href="/aftersales/index.html">
            AFTERSALES
          </a>
        </div>
        <hr />

        {/* Accessories Accordion */}
        <div className="w-full rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsAccessoriesOpen(!isAccessoriesOpen)}
          >
            <span className="text-lg font-medium">ACCESSORIES</span>
            {isAccessoriesOpen ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </div>
          {isAccessoriesOpen && (
            <div className="mt-3 ml-4 space-y-2">
              <a
                href="/accessories/bj40-sunshades"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                BJ40 Accessories
              </a>
              <a
                href="/accessories/x55-sunshades"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                X55 Accessories
              </a>
            </div>
          )}
        </div>
        <hr />

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
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Corporate
              </a>
              <a
                href="/brand"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Brand
              </a>
              <a
                href="/news/index.html"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Publication (News & Event)
              </a>
              <a
                href="/contact/index.html"
                className="block text-sm text-gray-700 hover:text-red-600"
              >
                Dealer Network
              </a>

              {/* Contact Us Sub-section */}
              <div className=" mt-2">
                <div className="text-sm font-medium text-gray-900 mb-1">
                  Contact Us
                </div>
                <div className="ml-2 space-y-1">
                  <a
                    href=""
                    className="block text-sm text-gray-700 hover:text-red-600"
                  >
                    Customer Relationship
                  </a>
                  <a
                    href="/social-media"
                    className="block text-sm text-gray-700 hover:text-red-600"
                  >
                    Social Media
                  </a>
                  <a
                    href="/career/index.html"
                    className="block text-sm text-gray-700 hover:text-red-600"
                  >
                    Career
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr />

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
