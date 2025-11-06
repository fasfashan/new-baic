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
        className="relative mt-10 min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg-book-a-test-drive.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="flex px-5 flex-col gap-4">
          <h1 className="relative text-white text-center text-5xl md:text-6xl font-bold">
            Aftersales
          </h1>
          <p className="relative text-white text-center max-w-2xl mx-auto text-lg ">
            Kami di BAIC berkomitmen untuk memberikan pengalaman kepemilikan
            mobil yang optimal melalui layanan purna jual yang berkualitas.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-neutral-50 to-white py-12">
        <div className="max-w-6xl m-auto md:px-8 px-5">
          {/* Layanan Purna Jual Lengkap */}
          <h2 className="text-3xl font-bold text-center mb-8">
            Layanan Purna Jual Lengkap
          </h2>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-16">
            {/* Service Berkala Card */}
            <div className="bg-white p-8 space-y-2 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-neutral-200">
              <Settings className="w-6 h-6 text-red-600" />

              <h3 className="font-bold text-neutral-800 mb-2">
                Service Berkala
              </h3>
              <p className="text-sm text-neutral-600">
                Lakukan servis rutin untuk kendaraan Anda
              </p>
            </div>

            {/* Perawatan & Pemeliharaan Card */}
            <div className="bg-white p-8 space-y-2 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-neutral-200">
              <Wrench className="w-6 h-6 text-red-600" />

              <h3 className="font-bold text-neutral-800 mb-2">
                Perawatan & Pemeliharaan
              </h3>
              <p className="text-sm text-neutral-600">
                Panduan perawatan untuk kendaraan Anda
              </p>
            </div>

            {/* Garansi Card */}
            <div className="bg-white p-8 space-y-2 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-neutral-200">
              <Shield className="w-6 h-6 text-red-600" />

              <h3 className="font-bold text-neutral-800 mb-2">Garansi</h3>
              <p className="text-sm text-neutral-600">
                Perlindungan untuk investasi Anda
              </p>
            </div>

            {/* Spare Parts Card */}
            <div className="bg-white p-8 space-y-2 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-neutral-200">
              <Package className="w-6 h-6 text-red-600" />

              <h3 className="font-bold text-neutral-800 mb-2">
                {" "}
                Spare Parts & Aksesoris
              </h3>
              <p className="text-sm text-neutral-600">
                Suku cadang asli untuk kendaraan
              </p>
            </div>
          </div>

          {/* Garansi Kendaraan Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Garansi Kendaraan
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Garansi Mesin */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2">
                      Garansi Mesin
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      <li>
                        • 3 Tahun / 100.000 km (mana yang tercapai lebih dahulu)
                      </li>
                      <li>• Garansi mencakup komponen mesin</li>
                      <li>• Perlindungan terhadap cacat pabrik</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Garansi Transmisi */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2">
                      Garansi Transmisi
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      <li>• Mencakup sistem transmisi lengkap</li>
                      <li>• Perbaikan di dealer resmi BAIC</li>
                      <li>• Dukungan teknis profesional</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Garansi Baterai EV */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2">
                      Garansi Baterai (Untuk EV)
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      <li>• Garansi khusus untuk kendaraan listrik</li>
                      <li>• Perlindungan komponen baterai</li>
                      <li>• Layanan penggantian jika diperlukan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Garansi Spart Part */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 mb-2">
                      Garansi Spart Part
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      <li>• Suku cadang original berkualitas</li>
                      <li>• Tersedia di seluruh dealer resmi</li>
                      <li>• Jaminan keaslian produk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Perawatan & Pemeliharaan Section */}
          <div className="pb-7">
            <h2 className="text-3xl font-bold text-center mb-8">
              Perawatan & Pemeliharaan
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Perawatan Rutin */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="font-bold text-neutral-800 mb-3">
                  Perawatan Rutin
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Ganti oli secara teratur</li>
                  <li>• Cek tekanan ban</li>
                  <li>• Periksa cairan mesin</li>
                  <li>• Bersihkan filter udara</li>
                </ul>
              </div>

              {/* Perawatan Berkala */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="font-bold text-neutral-800 mb-3">
                  Perawatan Berkala
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Service berkala di dealer</li>
                  <li>• Pengecekan sistem rem</li>
                  <li>• Rotasi ban berkala</li>
                  <li>• Tune-up mesin</li>
                </ul>
              </div>

              {/* Perawatan & Tips Lainnya */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-neutral-200">
                <h3 className="font-bold text-neutral-800 mb-3">
                  Perawatan & Tips Lainnya
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Cara merawat eksterior & interior</li>
                  <li>• Tips efisiensi bahan bakar</li>
                  <li>• Lindungi dari cuaca ekstrem</li>
                  <li>• Cuci mobil dengan benar</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Garansi Training */}
          <div className="bg-red-600 mt-8 p-8 rounded-lg ">
            <h3 className="text-xl text-white font-bold text-center mb-4">
              Garansi Training
            </h3>
            <p className="text-center text-white max-w-3xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan menyediakan
              training center yang melatih personel after-sales kami agar dapat
              memberikan pelayanan profesional dan berkualitas tinggi untuk
              setiap pelanggan BAIC.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">
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
                  Servis rutin dianjurkan setiap 5.000 km atau 6 bulan sekali,
                  tergantung mana yang tercapai lebih dahulu.
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
