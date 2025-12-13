import logo from "../assets/logo.svg";
import logojdi from "../assets/logo-jdi.png";
import logoinstagram from "../assets/Logo-IG.png";
import logoblibli from "../assets/Logo-blibli-blue.png";
export default function Footer() {
  return (
    <footer className="pt-10 bg-neutral-900">
      <div className="flex md:px-8 px-5 justify-between max-w-6xl m-auto">
        <img width={100} src={logo} alt="Logo BAIC" />
        <img width={100} src={logojdi} alt="Logo JDI" />
      </div>
      <div className="max-w-6xl  md:px-8 px-5 m-auto">
        <hr className="border border-red-800" />
      </div>
      <div className="grid md:px-8 px-5 mt-8 gap-y-6 md:gap-y-4 grid-cols-2 md:grid-cols-5 max-w-6xl m-auto">
        {/* Vehicle Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">Model</h3>
          <a
            href="/BJ30/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            BJ30
          </a>
          <a
            href="/BJ40/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            BJ40 PLUS
          </a>
          <a
            href="/X55-Models/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            X55
          </a>
          {/* Future: Arcfox tab item when content is ready */}
          {/* <a href="#" className="text-gray-400 text-sm hover:text-white transition-all">Arcfox</a> */}
        </div>

        {/* Company Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">Company</h3>
          <a
            href="/about-us/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            About Us
          </a>
          <a
            href="/news/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Update & News Event
          </a>
          <a
            href="/career/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Career
          </a>
        </div>

        {/* Services Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">
            After Sales
          </h3>
          <a
            href="/aftersales/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Aftersales Program
          </a>
        </div>

        {/* Dealer Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">Dealer</h3>
          <a
            href="/contact/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Find Dealer
          </a>
          <a
            href="/partnership"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Join Partner
          </a>
        </div>

        {/* Social Media Column - logos only (pending assets for others) */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">Social Media</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/baic.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img width={20} src={logoinstagram} alt="Instagram" />
            </a>
            {/* TODO: Add TikTok, Facebook, YouTube logos when provided */}
          </div>
        </div>
      </div>
      <div className="flex md:px-8 px-5 flex-wrap gap-y-4 mt-10 mb-10 text-white justify-between max-w-6xl m-auto">
        <div className="space-y-2">
          {/* Company name removed per client request; address kept until new info is provided */}
          <p>Jl. Jalur Sutera Boulevard Kav. 30 Alam Sutera</p>
        </div>
      </div>
      <div className="py-4  text-center bg-white">
        <p className="text-sm">© 2024 BAIC INDONESIA. Privacy Policy</p>
      </div>
    </footer>
  );
}
