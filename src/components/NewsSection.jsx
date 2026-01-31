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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          News & Event
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Below Image */}
              <div className="p-6">
                {/* Date */}
                <p className="text-gray-500 text-sm mb-3">{article.date}</p>

                {/* Title */}
                <h3 className="text-gray-900 text-lg font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Button */}
                <a
                  href={article.link}
                  className="inline-block px-6 py-2 border border-gray-300 text-gray-900 text-sm font-semibold rounded hover:bg-gray-50 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <a
            href="/news/index.html"
            className="inline-block py-3 px-8 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-semibold rounded-lg transition-all"
          >
            See all
          </a>
        </div>
      </div>
    </section>
  );
}
