import { Phone, MessageCircle } from "lucide-react";

export default function AfterSalesSection() {
  return (
    <section
      className="relative min-h-screen mt-20 bg-cover bg-center flex items-end justify-center pb-20"
      style={{ backgroundImage: "url('/bg-book-a-test-drive.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold mb-12">After Sales</h2>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap">
          <a
            href="tel:08123456789"
            className="py-3 px-8 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            Call Us
          </a>
          <a
            href="https://wa.me/62"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-8 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5" />
            Chat Us
          </a>
          <a
            href="/aftersales/index.html"
            className="py-3 px-8 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-colors whitespace-nowrap"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
