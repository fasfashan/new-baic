import Button from "./Button";

export default function NewsCard({ article, showButton = true }) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
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
                <p className="text-gray-500 text-xs mb-2">{article.date}</p>

                {/* Title */}
                <h3 className="text-gray-900 text-base font-bold mb-2 line-clamp-2">
                    {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs mb-4 line-clamp-3 text-justify">
                    {article.description}
                </p>

                {/* Read More Button */}
                {showButton && (
                    <Button variant="dark" href={article.link}>
                        Read More
                    </Button>
                )}
            </div>
        </div>
    );
}
