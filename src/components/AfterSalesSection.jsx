export default function AfterSalesSection() {
  return (
    <section className="relative min-h-[500px] mt-20 bg-black flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">After sales</h2>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center items-center">
          <a
            href="/aftersales/index.html"
            className="py-3 px-8 border-2 border-white text-white font-medium rounded-xl"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
