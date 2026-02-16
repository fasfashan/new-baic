import Button from "./Button";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      date: "01 October, 2025",
      title:
        "THE NEWEST HYBRID SUV BAIC BJ30 COMES TO BANDUNG AT A SPECIAL PRICE DURING GIIAS 2025",
      description:
        "Bandung, October 1, 2025 – PT JIO Distribusi Indonesia, BAIC's authorized agent (APM) in Indonesia, officially participated in GIIAS Bandung 2025 – Autoshow Series...",
      image: "/placeholder-news.jpg",
      link: "/news/single-news.html",
    },
    {
      id: 2,
      date: "15 September, 2025",
      title:
        "BAIC ukir sejarah baru di Indonesia: luncurkan BJ40 Plus made in Indonesia pertama",
      description:
        "Indonesia, September 2025 - PT JIO Distribusi Indonesia, BAIC Brand Holder Agent (APM) in Indonesia, proudly announces the launch of the first locally-assembled BJ40 Plus...",
      image: "/placeholder-news.jpg",
      link: "/news/single-news.html",
    },
    {
      id: 3,
      date: "10 September, 2025",
      title:
        "BAIC turunkan harga untuk model X55 II sekaligus menyegarkan tampilan dan memberikan 2 pilihan varian",
      description:
        "Indonesia, September 2025 – BAIC Indonesia announces a significant price reduction for the X55 II model, along with refreshed styling and two variant options to choose from...",
      image: "/placeholder-news.jpg",
      link: "/news/single-news.html",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 className="md:text-3xl text-2xl font-bold text-center mb-12">
          News & Event
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <Button variant="dark" href="/news/index.html">
            See all
          </Button>
        </div>
      </div>
    </section>
  );
}
