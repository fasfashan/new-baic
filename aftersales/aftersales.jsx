/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CTA from "../src/components/cta";
import "../src/index.css";
import ButtonChat from "../src/components/ButtonChat";
import {
  Settings,
  Shield,
  Wrench,
  MapPin,
  Package,
  FileText,
} from "lucide-react";

function AfterSales() {
  return (
    <>
      <Header />
      <ButtonChat />
      <div
        className="relative pt-32 min-h-screen bg-cover bg-center flex items-end justify-center pb-20"
        style={{
          backgroundImage: "url('/bg-book-a-test-drive.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="flex px-5 flex-col gap-4">
          <h1 className="relative text-white text-center text-xl md:text-4xl font-bold">
            After Sales
          </h1>
          <p className="relative text-white text-center max-w-2xl mx-auto text-base ">
            Kami di BAIC berkomitmen untuk memberikan pengalaman kepemilikan
            mobil yang optimal melalui layanan purna jual yang berkualitas.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-neutral-50 to-white py-12">
        <div className="max-w-6xl m-auto md:px-8 px-5">
          {/* Layanan Purna Jual Lengkap */}
          <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">
            Layanan Purna Jual Lengkap
          </h2>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-16">
            {/* Service Berkala Card */}
            <div className="relative rounded-lg overflow-hidden h-96">
              <img
                src="/BJ30 Modification3-0510-2-RGB-fin.jpg"
                alt="Service Berkala"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Service Berkala</h3>
                <p className="text-sm text-white/90">
                  Lakukan servis rutin untuk kendaraan Anda
                </p>
              </div>
            </div>

            {/* Perawatan & Pemeliharaan Card */}
            <div className="relative rounded-lg overflow-hidden h-96">
              <img
                src="/BJ40 Plus Accessories - Luggage Box Side Backpack-installed.jpg"
                alt="Perawatan & Pemeliharaan"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-lg mb-2">
                  Perawatan & Pemeliharaan
                </h3>
                <p className="text-sm text-white/90">
                  Panduan perawatan untuk kendaraan Anda
                </p>
              </div>
            </div>

            {/* Garansi Card */}
            <div className="relative rounded-lg overflow-hidden h-96">
              <img
                src="/garansi-baterai.webp"
                alt="Garansi"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Garansi</h3>
                <p className="text-sm text-white/90">
                  Perlindungan untuk investasi Anda
                </p>
              </div>
            </div>

            {/* Spare Parts Card */}
            <div className="relative rounded-lg overflow-hidden h-96">
              <img
                src="/BJ30/blue-sky.png"
                alt="Spare Parts & Aksesoris"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-lg mb-2">
                  Spare Parts & Aksesoris
                </h3>
                <p className="text-sm text-white/90">
                  Suku cadang asli untuk kendaraan
                </p>
              </div>
            </div>
          </div>

          {/* Garansi Kendaraan Section */}
          <div className="py-16">
            <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">
              Garansi Kendaraan
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Garansi Mesin */}
              <div className="relative rounded-lg overflow-hidden h-96">
                <img
                  src="/BJ30 Modification3-0510-2-RGB-fin.jpg"
                  alt="Garansi Mesin"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Garansi Mesin</h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>
                      • Garansi mesin 5 tahun / 150.000 Km (mana yang tercapai
                      lebih dulu)
                    </li>
                    <li>• Garansi mencakup komponen mesin</li>
                    <li>• Perlindungan terhadap cacat pabrik</li>
                  </ul>
                </div>
              </div>

              {/* Garansi Transmisi */}
              <div className="relative rounded-lg overflow-hidden h-96">
                <img
                  src="/BJ40 Plus Accessories - Luggage Box Side Backpack-installed.jpg"
                  alt="Garansi Transmisi"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Garansi Transmisi</h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Mencakup sistem transmisi lengkap</li>
                    <li>• Perbaikan di dealer resmi BAIC</li>
                    <li>• Dukungan teknis profesional</li>
                  </ul>
                </div>
              </div>

              {/* Garansi Baterai EV */}
              <div className="relative rounded-lg overflow-hidden h-96">
                <img
                  src="/garansi-baterai.webp"
                  alt="Garansi Baterai"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">
                    Garansi Baterai (Untuk EV)
                  </h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Garansi khusus untuk kendaraan listrik</li>
                    <li>• Perlindungan komponen baterai</li>
                    <li>• Layanan penggantian jika diperlukan</li>
                  </ul>
                </div>
              </div>

              {/* Garansi Spare Part */}
              <div className="relative rounded-lg overflow-hidden h-96">
                <img
                  src="/BJ30/blue-sky.png"
                  alt="Garansi Spare Part"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Garansi Spare Part</h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Suku cadang original berkualitas</li>
                    <li>• Tersedia di seluruh dealer resmi</li>
                    <li>• Jaminan keaslian produk</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Perawatan & Pemeliharaan Section */}
          <div className="pb-7">
            <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">
              Perawatan & Pemeliharaan
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Perawatan Rutin */}
              <div className="relative rounded-lg overflow-hidden h-96">
                <img
                  src="/BJ30 Modification3-0510-2-RGB-fin.jpg"
                  alt="Perawatan Rutin"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Perawatan Rutin</h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Ganti oli secara teratur</li>
                    <li>• Cek tekanan ban</li>
                    <li>• Periksa cairan mesin</li>
                    <li>• Bersihkan filter udara</li>
                  </ul>
                </div>
              </div>

              {/* Perawatan Berkala */}
              <div className="relative rounded-lg overflow-hidden h-96">
                <img
                  src="/BJ40 Plus Accessories - Luggage Box Side Backpack-installed.jpg"
                  alt="Perawatan Berkala"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Perawatan Berkala</h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Service berkala di dealer</li>
                    <li>• Pengecekan sistem rem</li>
                    <li>• Rotasi ban berkala</li>
                    <li>• Tune-up mesin</li>
                  </ul>
                </div>
              </div>

              {/* Perawatan & Tips Lainnya */}
              <div className="relative rounded-lg overflow-hidden h-96">
                <img
                  src="/garansi-baterai.webp"
                  alt="Perawatan & Tips Lainnya"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">
                    Perawatan & Tips Lainnya
                  </h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Cara merawat eksterior & interior</li>
                    <li>• Tips efisiensi bahan bakar</li>
                    <li>• Lindungi dari cuaca ekstrem</li>
                    <li>• Cuci mobil dengan benar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Garansi Training */}
          <div className="bg-slate-800 mt-8 p-8 rounded-lg ">
            <h3 className="text-xl text-white font-bold text-center mb-4">
              Jaringan Layanan Purna Jual di Seluruh Dunia
            </h3>
            <p className="text-center text-white max-w-3xl mx-auto">
              45 saluran layanan purna jual dan 189 dealer servis
            </p>
            <img src="/map.png" alt="" />
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">
              Pertanyaan yang Sering Diajukan
            </h2>

            <div className="space-y-4 max-w-4xl mx-auto">
              <details className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="font-semibold text-neutral-800 list-none flex justify-between items-center">
                  <span>Berapa sering saya perlu melakukan servis rutin?</span>
                  <svg
                    className="w-5 h-5 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-neutral-600 mt-4 text-sm">
                  Service rutin dianjurkan setiap 10.000 km/6 bulan sekali untuk
                  X55-II & BJ40 Plus, dan 10.000 km / 12 bulan untuk BJ30
                  AWD&FWD
                </p>
              </details>

              <details className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="font-semibold text-neutral-800 list-none flex justify-between items-center">
                  <span>
                    Apa saja yang termasuk dalam garansi kendaraan BAIC?
                  </span>
                  <svg
                    className="w-5 h-5 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-neutral-600 mt-4 text-sm">
                  Garansi mencakup perbaikan komponen mesin dan transmisi jika
                  terjadi kerusakan akibat cacat pabrik.
                </p>
              </details>

              <details className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="font-semibold text-neutral-800 list-none flex justify-between items-center">
                  <span>Bagaimana cara melakukan klaim garansi?</span>
                  <svg
                    className="w-5 h-5 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-neutral-600 mt-4 text-sm">
                  Klaim garansi dapat dilakukan di dealer resmi dengan membawa
                  kendaraan dan dokumentasi seperti buku garansi.
                </p>
              </details>

              <details className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="font-semibold text-neutral-800 list-none flex justify-between items-center">
                  <span>
                    Apakah BAIC menawarkan layanan emergency roadside
                    assistance?
                  </span>
                  <svg
                    className="w-5 h-5 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-neutral-600 mt-4 text-sm">
                  Ya, BAIC menyediakan layanan darurat 24/7 untuk membantu Anda
                  dalam situasi mendesak di jalan.
                </p>
              </details>

              <details className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="font-semibold text-neutral-800 list-none flex justify-between items-center">
                  <span>
                    Dimana saya bisa mendapatkan spare parts original?
                  </span>
                  <svg
                    className="w-5 h-5 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-neutral-600 mt-4 text-sm">
                  Spare parts original BAIC tersedia di seluruh dealer resmi
                  BAIC di Indonesia.
                </p>
              </details>

              <details className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200 cursor-pointer hover:shadow-md transition-shadow">
                <summary className="font-semibold text-neutral-800 list-none flex justify-between items-center">
                  <span>
                    Bagaimana jika saya mengalami kendala di luar kota?
                  </span>
                  <svg
                    className="w-5 h-5 text-neutral-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="text-neutral-600 mt-4 text-sm">
                  Anda dapat menghubungi layanan emergency roadside assistance
                  24/7 kami atau mengunjungi dealer BAIC terdekat di kota tempat
                  Anda berada.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AfterSales;
