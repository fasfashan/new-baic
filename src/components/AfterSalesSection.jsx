import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import Button from "./Button";

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
        <div className="flex gap-6 justify-center items-center flex-wrap">
          <Button
            variant="light"
            href="tel:08123456789"
            icon={Phone}
          >
            Call Us
          </Button>
          <Button
            variant="light"
            href="https://wa.me/62"
            target="_blank"
            rel="noopener noreferrer"
            icon={MessageCircle}
          >
            Chat Us
          </Button>
          <Button
            variant="light"
            href="/aftersales/index.html"
            icon={ArrowRight}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
