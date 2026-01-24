import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import CtaSection from "../src/components/CtaSection";
import ButtonChat from "../src/components/ButtonChat";
import { useState } from "react";
import "../src/index.css";

// News data - 8 articles
const newsData = [
  {
    image: "/placeholder-news.jpg",
    date: "01 October, 2025",
    title:
      "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025",
    description:
      "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series, which took place from OC...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "15 September, 2025",
    title:
      "BAIC ukir sejarah baru di Indonesia: luncurkan BJ40 Plus made in Indonesia pertama",
    description:
      "Indonesia, September 2025 - PT JIO Distribusi Indonesia, BAIC Brand Holder Agent (APM) in Indonesia, proudly announces the launch of the first locally-assembled BJ40 Plus...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "10 September, 2025",
    title:
      "BAIC turunkan harga untuk model X55 II sekaligus menyegarkan tampilan dan memberikan 2 pilihan varian",
    description:
      "Indonesia, September 2025 – BAIC Indonesia announces a significant price reduction for the X55 II model, along with refreshed styling and two variant options to choose from...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "05 September, 2025",
    title:
      "BAIC Indonesia expands to North Jakarta! BAIC Kelapa Gading kini resmi beroperasi",
    description:
      "Jakarta, September 2025 – BAIC Indonesia continues its expansion with the official opening of BAIC Kelapa Gading dealership, bringing premium automotive experience to North Jakarta...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "25 August, 2025",
    title:
      "Layanan purna jual BAIC Indonesia kini dilengkapi dengan Emergency Roadside Assistance 24 Jam",
    description:
      "Indonesia, August 2025 – BAIC Indonesia enhances its after-sales service by introducing 24-hour Emergency Roadside Assistance, ensuring peace of mind for all BAIC owners...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "20 August, 2025",
    title:
      "World Premiere! BAIC BJ30 Hybrid Right-Hand Drive pertama diluncurkan di Indonesia",
    description:
      "Indonesia, August 2025 – Making history in the global automotive industry, BAIC officially launches the world's first right-hand drive BJ30 Hybrid exclusively in Indonesia...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "15 August, 2025",
    title:
      "Hadir perdana di Semarang, BAIC BJ30 Hybrid ditawarkan dengan harga khusus",
    description:
      "Semarang, August 2025 - PT JIO Distribusi Indonesia brings the innovative BAIC BJ30 Hybrid to Semarang for the first time with special promotional pricing for early adopters...",
    link: "/news/single-news.html",
  },
  {
    image: "/placeholder-news.jpg",
    date: "10 August, 2025",
    title:
      "Resmikan city store pertama di Jakarta, BAIC Gandaria City hadirkan pengalaman otomotif inovatif",
    description:
      "Jakarta, August 2025 – BAIC Indonesia inaugurates its first city store at Gandaria City, offering an innovative and immersive automotive experience in the heart of Jakarta...",
    link: "/news/single-news.html",
  },
];

function App() {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const maxPosts = newsData.length;
  const allPostsLoaded = visiblePosts >= maxPosts;

  const handleLoadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, maxPosts));
  };

  return (
    <>
      <Header />
      <ButtonChat />

      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bg-news.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-5xl md:text-6xl font-bold">
          News & Event
        </h1>
      </div>

      {/* News Grid Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.slice(0, visiblePosts).map((news, index) => (
              <a
                key={index}
                href={news.link}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow block"
              >
                {/* News Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded">
                    <p className="text-red-600 text-xs font-semibold">
                      {news.date}
                    </p>
                  </div>
                </div>

                {/* News Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 text-justify">
                    {news.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Load More / All Loaded State */}
          <div className="mt-12 text-center">
            {!allPostsLoaded ? (
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600 transition-all font-semibold"
              >
                Load more
              </button>
            ) : (
              <div className="text-gray-500 font-medium">
                <p className="text-lg">All news loaded</p>
                <p className="text-sm mt-2">
                  You've reached the end of our news articles
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
