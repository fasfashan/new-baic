import { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";
import heroImage from "/baic-authorized-dealer.jpg";
import mapImage from "/baic-map.png";
import dealerImage from "/baic-dealer.jpg";
import { Phone, MapPin, Instagram } from "lucide-react";
function App() {
  const [selectedCity, setSelectedCity] = useState("");

  const arcfoxLogo = "/arcfox-logo.png";

  const serviceIconByKey = {
    sales: { src: "/sales.png", label: "Sales" },
    service: { src: "/services.png", label: "Service" },
    spareparts: { src: "/sparepart.png", label: "Spareparts" },
  };

  const getServiceKeys = (servicesText) => {
    if (!servicesText) return [];
    const rawKeys = servicesText
      .split(",")
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);

    const normalized = rawKeys
      .map((k) => {
        if (k === "sales") return "sales";
        if (k === "service" || k === "services") return "service";
        if (k === "spareparts" || k === "sparepart") return "spareparts";
        return null;
      })
      .filter(Boolean);

    return Array.from(new Set(normalized));
  };

  const isArcfoxDealer = (dealer) => {
    const seed = `${dealer.id}-${dealer.name}-${dealer.city}`;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash * 31 + seed.charCodeAt(i)) | 0;
    }
    return Math.abs(hash) % 3 === 0;
  };

  const dealers = [
    {
      id: 1,
      name: "BAIC Alam Sutera",
      company: "JHL Auto",
      services: "Sales, Service, Spareparts",
      address:
        "Jl. Jalur Sutera Boulevard Kav. 30, Alam Sutera, Panunggangan Timur, Pinang, Kota Tangerang, Banten",
      city: "Tangerang",
      phone: "031 9986 0888",
      phoneLink: "tel:03199860888",
      telp: "0811 3133 3000",
      telpLink: "tel:08113133000",
      hours: {
        weekday: "Monday - Friday: 09:00 - 19:00",
        saturday: "Saturday: 09:00 - 17:00",
        sunday: "Sunday: 09:00 - 15:00",
      },
      whatsappLink: "https://wa.me/6281234567890",
      mapLink: "https://maps.google.com",
      instagramLink: "https://instagram.com/baicid",
      image: dealerImage,
    },
    {
      id: 2,
      name: "BAIC Alam Sutera",
      company: "JHL Auto",
      services: "Sales, Service, Spareparts",
      address:
        "Jl. Jalur Sutera Boulevard Kav. 30, Alam Sutera, Panunggangan Timur, Pinang, Kota Tangerang, Banten",
      city: "Tangerang",
      phone: "031 9986 0888",
      phoneLink: "tel:03199860888",
      telp: "0811 3133 3000",
      telpLink: "tel:08113133000",
      hours: {
        weekday: "Monday - Friday: 09:00 - 19:00",
        saturday: "Saturday: 09:00 - 17:00",
        sunday: "Sunday: 09:00 - 15:00",
      },
      whatsappLink: "https://wa.me/6281234567890",
      mapLink: "https://maps.google.com",
      instagramLink: "https://instagram.com/baicid",
      image: dealerImage,
    },
    {
      id: 3,
      name: "BAIC Jakarta",
      company: "JHL Auto",
      services: "Sales, Service, Spareparts",
      address:
        "Jl. Jalur Sutera Boulevard Kav. 30, Alam Sutera, Panunggangan Timur, Pinang, Kota Tangerang, Banten",
      city: "Jakarta",
      phone: "031 9986 0888",
      phoneLink: "tel:03199860888",
      telp: "0811 3133 3000",
      telpLink: "tel:08113133000",
      hours: {
        weekday: "Monday - Friday: 09:00 - 19:00",
        saturday: "Saturday: 09:00 - 17:00",
        sunday: "Sunday: 09:00 - 15:00",
      },
      whatsappLink: "https://wa.me/6281234567890",
      mapLink: "https://maps.google.com",
      instagramLink: "https://instagram.com/baicid",
      image: dealerImage,
    },
    {
      id: 4,
      name: "BAIC Bandung",
      company: "JHL Auto",
      services: "Sales, Service, Spareparts",
      address:
        "Jl. Jalur Sutera Boulevard Kav. 30, Alam Sutera, Panunggangan Timur, Pinang, Kota Tangerang, Banten",
      city: "Bandung",
      phone: "031 9986 0888",
      phoneLink: "tel:03199860888",
      telp: "0811 3133 3000",
      telpLink: "tel:08113133000",
      hours: {
        weekday: "Monday - Friday: 09:00 - 19:00",
        saturday: "Saturday: 09:00 - 17:00",
        sunday: "Sunday: 09:00 - 15:00",
      },
      whatsappLink: "https://wa.me/6281234567890",
      mapLink: "https://maps.google.com",
      instagramLink: "https://instagram.com/baicid",
      image: dealerImage,
    },
    {
      id: 5,
      name: "BAIC Surabaya",
      company: "JHL Auto",
      services: "Sales, Service, Spareparts",
      address:
        "Jl. Jalur Sutera Boulevard Kav. 30, Alam Sutera, Panunggangan Timur, Pinang, Kota Tangerang, Banten",
      city: "Surabaya",
      phone: "031 9986 0888",
      phoneLink: "tel:03199860888",
      telp: "0811 3133 3000",
      telpLink: "tel:08113133000",
      hours: {
        weekday: "Monday - Friday: 09:00 - 19:00",
        saturday: "Saturday: 09:00 - 17:00",
        sunday: "Sunday: 09:00 - 15:00",
      },
      whatsappLink: "https://wa.me/6281234567890",
      mapLink: "https://maps.google.com",
      instagramLink: "https://instagram.com/baicid",
      image: dealerImage,
    },
    {
      id: 6,
      name: "BAIC Medan",
      company: "JHL Auto",
      services: "Sales, Service, Spareparts",
      address:
        "Jl. Jalur Sutera Boulevard Kav. 30, Alam Sutera, Panunggangan Timur, Pinang, Kota Tangerang, Banten",
      city: "Medan",
      phone: "031 9986 0888",
      phoneLink: "tel:03199860888",
      telp: "0811 3133 3000",
      telpLink: "tel:08113133000",
      hours: {
        weekday: "Monday - Friday: 09:00 - 19:00",
        saturday: "Saturday: 09:00 - 17:00",
        sunday: "Sunday: 09:00 - 15:00",
      },
      whatsappLink: "https://wa.me/6281234567890",
      mapLink: "https://maps.google.com",
      instagramLink: "https://instagram.com/baicid",
      image: dealerImage,
    },
  ];

  const cities = [...new Set(dealers.map((dealer) => dealer.city))];

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const filteredDealers = selectedCity
    ? dealers.filter((dealer) => dealer.city === selectedCity)
    : [];
  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src={heroImage}
          alt="BAIC Authorized Dealer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Map Section */}
      <div className="">
        <div className="">
          <img src={mapImage} alt="BAIC Dealer Map" className="w-full " />
        </div>
      </div>

      {/* Select Area & Dealers Section */}
      <div className="bg-neutral-100 py-12">
        <div className="max-w-6xl m-auto md:px-8 px-5">
          <h2 className="text-2xl font-bold mb-6">Select area</h2>

          {/* Filter Dropdown */}
          <div className="mb-8">
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full md:w-64 px-4 py-3 bg-white border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-neutral-700"
            >
              <option value="" disabled>
                Select city
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Dealers Grid */}
          {selectedCity && (
            <>
              <div className="grid md:grid-cols-3 gap-6">
                {filteredDealers.map((dealer) => (
                  <div
                    key={dealer.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={dealer.image}
                      alt={dealer.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between gap-3 mb-1 w-full">
                        <h3 className="text-xl font-bold">{dealer.name}</h3>
                        {isArcfoxDealer(dealer) && (
                          <img
                            src={arcfoxLogo}
                            alt="Arcfox"
                            title="Arcfox available"
                            className="w-20 object-contain"
                          />
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 mb-3">
                        {dealer.company}
                      </p>
                      <div className="flex gap-2 shrink-0">
                        {getServiceKeys(dealer.services).map((key) => {
                          const icon = serviceIconByKey[key];
                          if (!icon) return null;
                          return (
                            <img
                              key={key}
                              src={icon.src}
                              alt={icon.label}
                              title={icon.label}
                              className="w-10 h-10"
                            />
                          );
                        })}
                      </div>
                      <div className="space-y-3 mb-4">
                        <div>
                          <p className="text-sm font-semibold text-neutral-700 mb-1">
                            ADDRESS
                          </p>
                          <p className="text-sm text-neutral-600">
                            {dealer.address}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-700 mb-1">
                            BUSINESS HOURS
                          </p>
                          <p className="text-sm text-neutral-600">
                            {dealer.hours.weekday}
                          </p>
                          <p className="text-sm text-neutral-600">
                            {dealer.hours.saturday}
                          </p>
                          <p className="text-sm text-neutral-600">
                            {dealer.hours.sunday}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-700 mb-1">
                            CONTACT
                          </p>
                          <p className="text-sm text-neutral-600">
                            Telp: {dealer.phone}
                          </p>
                          <p className="text-sm text-neutral-600">
                            Phone: {dealer.telp}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={dealer.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                        >
                          <Phone className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={dealer.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                        >
                          <MapPin className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={dealer.instagramLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                        >
                          <Instagram className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredDealers.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-neutral-600">
                    No dealers found for the selected city.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
