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
    return dealer.hasArcfox === true;
  };

  const dealers = [
    {
      id: 1,
      name: "BAIC Alam Sutera",
      company: "PT JHL AUTO",
      services: "Sales, Service, Spareparts",
      address:
        "Jl. Sutera Boulevard Kav.30 RT.003/RW.006, Panunggangan Timur, Kec. Pinang Kota Tangerang 15143",
      city: "Tangerang",
      phone: "+62 21 1234 5678",
      phoneLink: "",
      telp: "+62 812 3456 7890",
      telpLink: "",
      hours: {
        weekday: "Monday - Friday: 09:00 - 19:00",
        saturday: "Saturday: 09:00 - 17:00",
        sunday: "Sunday: 09:00 - 15:00",
      },
      whatsappLink: "https://wa.me/628129000000",
      mapLink: "https://maps.app.goo.gl/yU3aQznW3Cqv1Pzd8",
      instagramLink:
        "https://www.instagram.com/baic.jhlauto?igsh=MXcyd2RxZm5sYmk4Zw==",
      image: dealerImage,
      hasArcfox: true,
    },
    {
      id: 2,
      name: "BAIC Gading Serpong",
      company: "PT JHL AUTO",
      services: "Sales",
      address:
        "Jl. Gading Serpong Boulevard Barat No.7, Tangerang, Banten 15810",
      city: "Tangerang",
      phone: "+62 21 5678 9012",
      phoneLink: "",
      telp: "+62 812 5678 9012",
      telpLink: "",
      hours: {
        weekday: "Monday - Friday: 09:00 - 19:00",
        saturday: "Saturday: 09:00 - 17:00",
        sunday: "Sunday: 09:00 - 15:00",
      },
      whatsappLink: "https://wa.me/628129000000",
      mapLink: "https://maps.app.goo.gl/MyyM9UMUWPM637jB8",
      instagramLink:
        "https://www.instagram.com/baic.jhlauto?igsh=MXcyd2RxZm5sYmk4Zw==",
      image: dealerImage,
      hasArcfox: false,
    },
    {
      id: 3,
      name: "BAIC Gandaria City",
      company: "PT JHL AUTO",
      services: "Sales",
      address:
        "Gandaria City Lt. GF (West Lobby), Jl. Sultan Iskandar Muda, Kebayoran Lama Selatan, Kebayoran Lama, Kota Adm. Jakarta Selatan, DKI Jakarta",
      city: "Jakarta",
      phone: "+62 21 9012 3456",
      phoneLink: "",
      telp: "+62 812 9012 3456",
      telpLink: "",
      hours: {
        weekday: "Monday - Sunday: 10:00 - 22:00",
        saturday: "",
        sunday: "",
      },
      whatsappLink: "https://wa.me/628129000000",
      mapLink: "https://maps.app.goo.gl/us8BhoXwBbnjRM5M6",
      instagramLink:
        "https://www.instagram.com/baic.jhlauto?igsh=MXcyd2RxZm5sYmk4Zw==",
      image: dealerImage,
      hasArcfox: false,
    },
    {
      id: 4,
      name: "BAIC Puri Indah",
      company: "PT JHL AUTO",
      services: "Sales",
      address:
        "Puri Indah Auto Center. Jl. Puri Lingkar Luar, Kembangan Selatan, Kembangan, Kota Adm. JakartaBarat, DKI Jakarta",
      city: "Jakarta",
      phone: "+62 21 3456 7890",
      phoneLink: "",
      telp: "+62 812 3456 7890",
      telpLink: "",
      hours: {
        weekday: "Monday - Sunday: 09:00 - 19:30",
        saturday: "",
        sunday: "",
      },
      whatsappLink: "https://wa.me/628129000000",
      mapLink: "https://maps.app.goo.gl/KeEYActGvH5wbmbj6",
      instagramLink:
        "https://www.instagram.com/baic.jhlauto?igsh=MXcyd2RxZm5sYmk4Zw==",
      image: dealerImage,
      hasArcfox: true,
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
                          {dealer.hours.weekday && (
                            <p className="text-sm text-neutral-600">
                              {dealer.hours.weekday}
                            </p>
                          )}
                          {dealer.hours.saturday && (
                            <p className="text-sm text-neutral-600">
                              {dealer.hours.saturday}
                            </p>
                          )}
                          {dealer.hours.sunday && (
                            <p className="text-sm text-neutral-600">
                              {dealer.hours.sunday}
                            </p>
                          )}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-neutral-700 mb-1">
                            CONTACT
                          </p>
                          {dealer.phone && (
                            <p className="text-sm text-neutral-600">
                              Call Center: {dealer.phone}
                            </p>
                          )}
                          {dealer.telp && (
                            <p className="text-sm text-neutral-600">
                              WhatsApp: {dealer.telp}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-7">
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

                        <a
                          href="/book-a-test-drive/index.html"
                          className=" w-full py-3 px-4 text-center bg-red-600 hover:bg-red-700 text-white font-semibold transition-all rounded-lg"
                        >
                          BOOK A TEST DRIVE
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
