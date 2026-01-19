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

  const dummyCallCenter = "+62 21 1234 5678";

  const serviceLabel = (code) => {
    if (!code) return "";
    const normalized = code.toString().trim().toUpperCase();
    if (normalized === "1S") return "Sales";
    if (normalized === "3S") return "Sales, Service, Spareparts";
    if (normalized === "4S")
      return "Sales, Service, Spareparts, Body & Repaint";
    return code;
  };

  const normalizeString = (value) => {
    if (!value || Number.isNaN(value)) return "";
    return String(value).trim();
  };

  const normalizeLink = (value) => {
    const url = normalizeString(value);
    if (!url || url.toLowerCase() === "belum opening") return "#";
    return url;
  };

  const normalizeWhatsAppNumber = (value) => {
    const raw = normalizeString(value);
    if (!raw) return "";
    if (raw.startsWith("+")) return raw;
    return `+${raw}`;
  };

  const normalizeHours = (value) => {
    const text = normalizeString(value);
    if (!text) return [];
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  };

  const buildDealer = (
    name,
    company,
    serviceCode,
    city,
    address,
    whatsappNumber,
    mapLink,
    instagramLink,
    hasArcfox,
    businessHour
  ) => ({
    name: `BAIC ${name}`,
    company: normalizeString(company),
    services: serviceLabel(serviceCode),
    address: normalizeString(address),
    city: normalizeString(city) || "Coming Soon",
    phone: dummyCallCenter,
    telp: normalizeWhatsAppNumber(whatsappNumber),
    hoursText: normalizeHours(businessHour),
    whatsappLink: "https://wa.me/628129000000",
    mapLink: normalizeLink(mapLink),
    instagramLink: normalizeLink(instagramLink),
    image: dealerImage,
    hasArcfox: String(hasArcfox).toLowerCase() === "arcfox",
  });

  const dealers = [
    buildDealer(
      "Alam Sutera",
      "PT JHL AUTO",
      "3S",
      "Tangerang",
      "Jl. Sutera Boulevard Kav.30 RT.003/RW.006, Panunggangan Timur, Kec. Pinang Kota Tangerang 15143",
      "6281292353853",
      "https://maps.app.goo.gl/yU3aQznW3Cqv1Pzd8",
      "https://www.instagram.com/baic.jhlauto?igsh=MXcyd2RxZm5sYmk4Zw==",
      "Arcfox",
      "Monday - Friday : 09:00 - 19:00\n\nSaturday : 09:00 - 17:00\n\nSunday : 09:00 - 15:00"
    ),
    buildDealer(
      "Gading Serpong",
      "PT JHL AUTO",
      "1S",
      "Tangerang",
      "Jl. Gading Serpong Boulevard Barat No.7, Tangerang,  Banten 15810",
      "6281292353853",
      "https://maps.app.goo.gl/MyyM9UMUWPM637jB8",
      "https://www.instagram.com/baic.jhlauto?igsh=MXcyd2RxZm5sYmk4Zw==",
      "BAIC Only",
      "Monday - Friday : 09:00 - 19:00\n\nSaturday : 09:00 - 17:00\n\nSunday : 09:00 - 15:00"
    ),
    buildDealer(
      "Gandaria City",
      "PT JHL AUTO",
      "1S",
      "Jakarta",
      "Gandaria City Lt. GF ( West Lobby ), Jl. Sultan Iskandar Muda, Kebayoran Lama Selatan, Kebayoran Lama, Kota Adm. Jakarta Selatan, DKI Jakarta",
      "6281292353853",
      "https://maps.app.goo.gl/us8BhoXwBbnjRM5M6",
      "https://www.instagram.com/baic.jhlauto?igsh=MXcyd2RxZm5sYmk4Zw==",
      "BAIC Only",
      "Monday - Sunday : 10:00 - 22:00"
    ),
    buildDealer(
      "Puri Indah",
      "PT JHL AUTO",
      "1S",
      "Jakarta",
      "Puri Indah Auto Center. Jl. Puri Lingkar Luar, Kembangan Selatan, Kembangan, Kota Adm. JakartaBarat, DKI Jakarta",
      "6281292353853",
      "https://maps.app.goo.gl/KeEYActGvH5wbmbj6",
      "https://www.instagram.com/baic.jhlauto?igsh=MXcyd2RxZm5sYmk4Zw==",
      "Arcfox",
      "Monday - Sunday : 09.00 - 19.30"
    ),
    buildDealer(
      "Jemursari",
      "PT DAS INDONESIA SURABAYA",
      "3S",
      "Surabaya",
      "Jl. Raya Jemursari No. 339-341, Kel. Sidosermo, Kec. Wonocolo, Kota Surabaya, Prov. Jawa Timur",
      "6287855601743",
      "https://maps.app.goo.gl/wGo1WimkFihqvH2NA",
      "https://www.instagram.com/surabayabaic?igsh=MWZjbGd3OTZ1dDdncA==",
      "BAIC Only",
      "Monday - Thursday : 08:30 - 16:30\n\nFriday : 08:30 - 17:00\n\nSaturday : 08:30 - 14:30\n\nSunday : 10:00 - 15:00 (Showroom Only)"
    ),
    buildDealer(
      "Denpasar",
      "PT DAS INDONESIA BALI",
      "3S",
      "Denpasar",
      "Erawan bulding, Jl. Mahendradatta No. 999, Padangsambian, Denpasar Barat, Kota Denpasar, Bali",
      "6281331819824",
      "https://maps.app.goo.gl/ZQvsVxbGn8E9PaZy8",
      "https://www.instagram.com/baicbali?igsh=MWh6dWN5OG5ndnZ0eQ==",
      "Arcfox",
      "Monday - Friday : 08:30 - 16:30\n\nSaturday : 09:00 - 15:00\n\nSunday : Closed"
    ),
    buildDealer(
      "Naripan",
      "PT TRIJAYA OTO MAKMUR",
      "3S",
      "Bandung",
      "Jalan Naripan 115 Bandung",
      "",
      "https://maps.app.goo.gl/85TdZ7SjD68Dbi1Y7",
      "https://www.instagram.com/baicbali?igsh=MWh6dWN5OG5ndnZ0eQ==",
      "Arcfox",
      "Bussiness Hours:\n\nMonday - Friday : 09:00 - 16:00\n\nSaturday - Sunday : 09:00 - 14:00"
    ),
    buildDealer(
      "Pekanbaru",
      "PT TRIJAYA OTO MAKMUR",
      "3S",
      "Pekanbaru",
      "Jl Tuanku Tambusai, Marpoyan, kota Pekanbaru, Riau 28122",
      "",
      "https://maps.app.goo.gl/KT77AZQkFH5XpjCk9",
      "https://www.instagram.com/baicpekanbaru?igsh=MW16aXhhNTlzcGR1NA==",
      "Arcfox",
      "Monday - Friday : 09:00 - 16:00\n\nSaturday - Sunday : 09:00 - 14:00"
    ),
    buildDealer(
      "Samarinda",
      "PT ISTANA TUJUH SUKSES",
      "3S",
      "Samarinda",
      "Jl. MT. Haryono, Mayjen Kalimantan Timur Kel/Ds. Kec. Samarinda Ulu - Samarinda Kalimantan Timur",
      "",
      "https://maps.app.goo.gl/tD2et15LFBdypkSF7",
      "https://www.instagram.com/baickaltim_official?igsh=dGp2dXd2ZnFxZ3Bp",
      "Arcfox",
      "Monday - Friday : 08:30 - 17:00\n\nSaturday - Sunday : 08:30 - 15:00"
    ),
    buildDealer(
      "Letda Sujono",
      "PT MEGA CENTRAL AUTONIAGA",
      "3S",
      "Medan",
      "Jl. Letda Sujono No. 111-A, Bandar Selamat, Medan Tembung, Kota Medan, Sumatera Utara 20223",
      "",
      "https://share.google/EmTlxlVuVRWYznm9o",
      "https://www.instagram.com/baicmakassar?igsh=MTNiY2s4cjNqbW0xeg==",
      "Arcfox",
      "Monday - Saturday : 08:30 - 18:30\n\nSunday : 10:00 - 16:00"
    ),
    buildDealer(
      "Batam",
      "PT MEGA AUTO NUSANTARA",
      "3S",
      "Batam",
      "Baloi Bisnis Center No. 8A, Jl. Yos Sudarso , kel Baloi indah. Kec. Lubuk Baja Kota Batam. Prov kepulauan Riau, 29432",
      "",
      "https://maps.app.goo.gl/bSN4zCf4NEVTH6Np9",
      "",
      "Arcfox",
      "Monday - Friday : 08:00- 17:00\n\nSaturday - Sunday : 09:00 - 15:00"
    ),
    buildDealer(
      "PIK2",
      "PT PRESTISIUS INDONESIA",
      "3S",
      "Tangerang",
      "Jl. M.H Thamrin No.69, Salembaran, Kec. Kosambi, Kabupaten Tangerang, Banten",
      "",
      "https://maps.app.goo.gl/vZbwxECWn37MRwU77",
      "",
      "Arcfox",
      "Monday - Friday : 09:00 - 20:00\n\nSaturday - Sunday : 09:00 - 20:00"
    ),
    buildDealer(
      "Cibubur",
      "PT ARIS INTERNATIONAL OTOMOTIF",
      "3S",
      "Jakarta",
      "Jl. Jambore, RT 006/RW 013, Cibubur, Kec. Ciracas, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, 13720",
      "",
      "https://maps.app.goo.gl/fhqdVfj9JAVoNwn16",
      "https://www.instagram.com/surabayabaic?igsh=MWZjbGd3OTZ1dDdncA==",
      "Arcfox",
      "Monday - Friday : 09:00 - 19:00\n\nSaturday - Sunday : 09:00 - 15:00"
    ),
    buildDealer(
      "Makassar",
      "PT SAMUDRA INTI JAYA PERKASA",
      "4S",
      "Maros",
      "Jl. Poros Makassar - Maros No. Blok 4, Taroada, Turikale, Kabupaten Maros, Sulawesi Selatan",
      "62882020057606",
      "https://maps.app.goo.gl/ewNZyaMARjgBtKb18",
      "https://www.instagram.com/baicmakassar?igsh=MTNiY2s4cjNqbW0xeg==",
      "Arcfox",
      "Monday - Friday : 08:30 - 16:00\n\nSaturday - Sunday : 08:30 - 12:00"
    ),
    buildDealer(
      "Siliwangi",
      "PT SAMUDRA INTI JAYA PERKASA",
      "3S",
      "Semarang",
      "Jl. Siliwangi No. 484, Kalibanteng Kulon, Semarang Barat, Kota Semarang, Jawa Tengah",
      "",
      "https://maps.app.goo.gl/YrTQdJeDEoYUxFrK8",
      "https://www.instagram.com/baicsiliwangi.official?igsh=cG5jbG1icWN2a2N0",
      "BAIC Only",
      "Monday - Saturday : 09:00 - 18:00"
    ),
    buildDealer(
      "Yogyakarta",
      "PT SAMUDRA INTI JAYA PERKASA",
      "3S",
      "Yogyakarta",
      "Jl. Wates KM 6, Ambarketawang, Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
      "",
      "https://maps.app.goo.gl/221bUWjhbQuJMJEMA",
      "https://www.instagram.com/baic.djogja?igsh=anNrMnc1eGx4azcz",
      "Arcfox",
      "Monday - Friday : 08.30 - 17.00\n\nSaturday : 08.30 - 15.00"
    ),
    buildDealer(
      "Kelapa Gading",
      "PT DWI KARYA MOTOR",
      "3S",
      "Jakarta",
      "Jl. Boulevard Artha Gading, Blok A7B No. 8-10, Sentra Bisnis Gading Kirana, Kelapa Gading Barat, Kelapa Gading, Kota Adm. Jakarta Utara, DKI Jakarta",
      "",
      "https://maps.app.goo.gl/X5JBeYGjyXyEejiB8",
      "",
      "Arcfox",
      "Monday - Saturday : 08.30 - 19.00\n\nSunday : 08.30 - 17.30"
    ),
    buildDealer(
      "Harapan Indah",
      "PT SUMBER JAYA MOTOR",
      "3S",
      "Bekasi",
      "Jl. Harapan Indah Raya Komplek Sentra Bisnis Blok D3 RT. 003/007, Medansatria, Medansatria, Kota Bekasi, Jawa Barat",
      "",
      "",
      "",
      "Arcfox",
      ""
    ),
    buildDealer(
      "Palembang",
      "PT MAJU SRIWIJAYA MOTOR",
      "3S",
      "Palembang",
      "Jl. Bangau, 9 Ilir, Kec. Ilir Tim. II, Kota Palembang, Sumatera Selatan 30114",
      "",
      "",
      "https://www.instagram.com/baicpalembang?igsh=MTRxanZ4djR2NjJiMg==",
      "BAIC Only",
      ""
    ),
    buildDealer("PIK1", "PT TRIJAYA OTO MAKMUR", "3S", "Coming Soon", "", "", "", "", "Arcfox", ""),
    buildDealer(
      "FATMAWATI",
      "PT SAMUDRA INTI JAYA PERKASA",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "Arcfox",
      ""
    ),
    buildDealer(
      "BALIKPAPAN",
      "PT SAMUDRA INTI JAYA PERKASA",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "BAIC Only",
      ""
    ),
    buildDealer(
      "LAMPUNG",
      "PT SAMUDRA INTI JAYA PERKASA",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "BAIC Only",
      ""
    ),
    buildDealer(
      "KENDARI",
      "PT SAMUDRA INTI JAYA PERKASA",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "BAIC Only",
      ""
    ),
    buildDealer(
      "LOMBOK",
      "PT JAYA HARMONIS LESTARI",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "Arcfox",
      ""
    ),
    buildDealer(
      "SLIPI/SUNTER",
      "PT JHL AUTO",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "Arcfox",
      ""
    ),
    buildDealer(
      "MANADO",
      "PT SAMUDRA INTI JAYA PERKASA",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "BAIC Only",
      ""
    ),
    buildDealer(
      "KARAWANG",
      "",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "BAIC Only",
      ""
    ),
    buildDealer(
      "MEDAN",
      "",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "Arcfox",
      ""
    ),
    buildDealer(
      "SURABAYA",
      "",
      "3S",
      "Coming Soon",
      "",
      "",
      "",
      "",
      "Arcfox",
      ""
    ),
  ].map((dealer, index) => ({ ...dealer, id: index + 1 }));

  const cities = [...new Set(dealers.map((dealer) => dealer.city).filter(Boolean))].sort();

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
                          {dealer.hoursText && dealer.hoursText.length > 0 ? (
                            dealer.hoursText.map((line, idx) => (
                              <p key={idx} className="text-sm text-neutral-600">
                                {line}
                              </p>
                            ))
                          ) : (
                            <p className="text-sm text-neutral-500">To be confirmed</p>
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
