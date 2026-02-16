// Shared dealer data and utility functions
// Data synced from dealer/dealer.jsx

const dummyCallCenter = "+62 21 1234 5678";

const serviceLabel = (code) => {
    if (!code) return "";
    const normalized = code.toString().trim().toUpperCase();
    if (normalized === "1S") return "Sales";
    if (normalized === "3S") return "Sales, Service, Spareparts";
    if (normalized === "4S") return "Sales, Service, Spareparts, Body & Repaint";
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
    businessHour,
) => ({
    name: `BAIC ${name}`,
    company: normalizeString(company),
    services: serviceLabel(serviceCode),
    serviceCode: serviceCode, // Keep original code for filtering
    address: normalizeString(address),
    city: normalizeString(city) || "Coming Soon",
    phone: dummyCallCenter,
    telp: normalizeWhatsAppNumber(whatsappNumber),
    hoursText: normalizeHours(businessHour),
    whatsappLink: "https://wa.me/628129000000",
    mapLink: normalizeLink(mapLink),
    instagramLink: normalizeLink(instagramLink),
    hasArcfox: String(hasArcfox).toLowerCase() === "arcfox",
});

// Province to City mapping
export const PROVINCE_CITY_MAP = {
    "DKI Jakarta": ["Jakarta"],
    "Banten": ["Tangerang"],
    "Jawa Timur": ["Surabaya"],
    "Bali": ["Denpasar"],
    "Jawa Barat": ["Bandung", "Bekasi"],
    "Riau": ["Pekanbaru"],
    "Kalimantan Timur": ["Samarinda"],
    "Sumatera Utara": ["Medan"],
    "Kepulauan Riau": ["Batam"],
    "Sulawesi Selatan": ["Maros"],
    "Jawa Tengah": ["Semarang"],
    "DI Yogyakarta": ["Yogyakarta"],
    "Sumatera Selatan": ["Palembang"],
};

// All dealers data (synced from dealer.jsx)
export const dealers = [
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
        "Monday - Friday : 09:00 - 19:00\n\nSaturday : 09:00 - 17:00\n\nSunday : 09:00 - 15:00",
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
        "Monday - Friday : 09:00 - 19:00\n\nSaturday : 09:00 - 17:00\n\nSunday : 09:00 - 15:00",
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
        "Monday - Sunday : 10:00 - 22:00",
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
        "Monday - Sunday : 09.00 - 19.30",
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
        "Monday - Thursday : 08:30 - 16:30\n\nFriday : 08:30 - 17:00\n\nSaturday : 08:30 - 14:30\n\nSunday : 10:00 - 15:00 (Showroom Only)",
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
        "Monday - Friday : 08:30 - 16:30\n\nSaturday : 09:00 - 15:00\n\nSunday : Closed",
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
        "Bussiness Hours:\n\nMonday - Friday : 09:00 - 16:00\n\nSaturday - Sunday : 09:00 - 14:00",
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
        "Monday - Friday : 09:00 - 16:00\n\nSaturday - Sunday : 09:00 - 14:00",
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
        "Monday - Friday : 08:30 - 17:00\n\nSaturday - Sunday : 08:30 - 15:00",
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
        "Monday - Saturday : 08:30 - 18:30\n\nSunday : 10:00 - 16:00",
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
        "Monday - Friday : 08:00- 17:00\n\nSaturday - Sunday : 09:00 - 15:00",
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
        "Monday - Friday : 09:00 - 20:00\n\nSaturday - Sunday : 09:00 - 20:00",
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
        "Monday - Friday : 09:00 - 19:00\n\nSaturday - Sunday : 09:00 - 15:00",
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
        "Monday - Friday : 08:30 - 16:00\n\nSaturday - Sunday : 08:30 - 12:00",
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
        "Monday - Saturday : 09:00 - 18:00",
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
        "Monday - Friday : 08.30 - 17.00\n\nSaturday : 08.30 - 15.00",
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
        "Monday - Saturday : 08.30 - 19.00\n\nSunday : 08.30 - 17.30",
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
        "",
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
        "",
    ),
    // Dealers with "Coming Soon" city are excluded from selection
].map((dealer, index) => ({ ...dealer, id: index + 1 }));

// Utility functions
export const getProvinces = () => {
    return Object.keys(PROVINCE_CITY_MAP).sort();
};

export const getCitiesByProvince = (province) => {
    return PROVINCE_CITY_MAP[province] || [];
};

export const getServiceDealers = () => {
    // Filter only 3S and 4S dealers, exclude "Coming Soon"
    return dealers.filter(
        (dealer) =>
            (dealer.serviceCode === "3S" || dealer.serviceCode === "4S") &&
            dealer.city !== "Coming Soon"
    );
};

export const getDealersByCity = (city) => {
    return getServiceDealers().filter((dealer) => dealer.city === city);
};

export const getCityProvince = (city) => {
    for (const [province, cities] of Object.entries(PROVINCE_CITY_MAP)) {
        if (cities.includes(city)) {
            return province;
        }
    }
    return null;
};

// Functions for Book a Test Drive (show ALL dealers)
export const getAllDealers = () => {
  return dealers.filter((dealer) => dealer.city !== 'Coming Soon');
};

export const getAllDealersByCity = (city) => {
  return getAllDealers().filter((dealer) => dealer.city === city);
};
