import logo from "../assets/logo.svg";
import logojdi from "../assets/logo-jdi.png";
import logoinstagram from "../assets/Logo-IG.png";
import logoblibli from "../assets/Logo-blibli-blue.png";
import { Instagram, Facebook, Youtube } from "lucide-react";

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
          <a
            href="#"
            className="text-gray-400 text-sm hover:text-white transition-all inline-flex items-center gap-2"
          >
            <span>Arcfox</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-gray-700 text-gray-200">
              Coming soon
            </span>
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
            href="/join-partner/index.html"
            className="text-gray-400 text-sm hover:text-white transition-all"
          >
            Join Partner
          </a>
        </div>

        {/* Social Media Column */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white text-base font-semibold mb-2">
            Social Media
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/baicindonesia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white hover:text-red-600 transition-all"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/people/BAIC-Indonesia/61562272181301/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white hover:text-red-600 transition-all"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@baic.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white hover:text-red-600 transition-all"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=baic+indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white hover:text-red-600 transition-all"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:px-8 px-5 flex-wrap gap-y-4 mt-10 mb-10 text-white justify-between max-w-6xl m-auto">
        <div className="space-y-2">
          {/* Company name removed per client request; address kept until new info is provided */}
          <p>
            BAIC Tower, 13th Fl <br /> Jl. Gading Serpong Boulevard Barat <br />{" "}
            No.8, Gading, Kec. Serpong, Kabupaten <br /> Tangerang, Banten
            15810.
          </p>
        </div>
      </div>
      <div className="py-4  text-center bg-white">
        <p className="text-sm">© 2024 BAIC INDONESIA. Privacy Policy</p>
      </div>
    </footer>
  );
}
