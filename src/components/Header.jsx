import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import BigMenu from "./BigMenu";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [isBigMenuOpen, setIsBigMenuOpen] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [closeTimeout, setCloseTimeout] = useState(null);

  const handleVehicleMouseEnter = () => {
    // Clear any existing timeout
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }

    setIsBigMenuOpen(true);
    setIsAccessoriesOpen(false);
    setIsServicesOpen(false);
    setIsDealerOpen(false);
    setIsAboutUsOpen(false);
  };

  const handleVehicleMouseLeave = () => {
    // Set a delay before closing
    const timeout = setTimeout(() => {
      setIsBigMenuOpen(false);
    }, 150);
    setCloseTimeout(timeout);
  };

  const handleBigMenuMouseEnter = () => {
    // Clear timeout when entering BigMenu
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleBigMenuMouseLeave = () => {
    // Close immediately when leaving BigMenu
    setIsBigMenuOpen(false);
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  // Handle scroll behavior - Close menus on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - close all menus
          setIsBigMenuOpen(false);
          setIsAccessoriesOpen(false);
          setIsServicesOpen(false);
          setIsDealerOpen(false);
          setIsAboutUsOpen(false);
          if (closeTimeout) {
            clearTimeout(closeTimeout);
            setCloseTimeout(null);
          }
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, closeTimeout]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 items-center bg-black py-4 z-50">
        <div className="max-w-6xl md:px-6 px-5 m-auto flex justify-between items-center">
          {/* Logo & Desktop Menu */}
          <div className="hidden md:flex text-white items-center gap-5">
            <a href="/">
              <img className="h-6" src={logo} alt="Logo" />
            </a>
            <ul className="flex gap-4 tracking-wide items-center text-sm">
              {/* Vehicle Menu */}
              <li
                className="relative"
                onMouseEnter={handleVehicleMouseEnter}
                onMouseLeave={handleVehicleMouseLeave}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  Model
                  {isBigMenuOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </li>

              {/* Services Menu */}
              <li className="relative group">
                <a
                  href="/aftersales/index.html"
                  className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2"
                >
                  After Sales
                </a>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white text-black rounded-lg shadow-lg py-2">
                      <a
                        href="/aftersales"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Aftersales Program
                      </a>
                      <a
                        href="/emergency-road"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Emergency Road Assistance
                      </a>
                      <a
                        href="/booking-dealer-service/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Booking Dealer Service
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* Accessories */}
              <li
                className="relative group"
                onMouseEnter={() => setIsAccessoriesOpen(true)}
                onMouseLeave={() => setIsAccessoriesOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  Accessories
                  {isAccessoriesOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {isAccessoriesOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-white text-black rounded-lg shadow-lg py-2">
                      <a
                        href="/accessories/bj40-sunshades"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        BJ40 Accessories
                      </a>
                      <a
                        href="/accessories/x55-sunshades"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        X55 Accessories
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {/* About Us Menu */}
              <li
                className="relative group"
                onMouseEnter={() => setIsAboutUsOpen(true)}
                onMouseLeave={() => setIsAboutUsOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-300 transition-colors py-2">
                  About Us
                  {isAboutUsOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {isAboutUsOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white text-black rounded-lg shadow-lg py-2">
                      <a
                        href="/about-us/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Corporate
                      </a>
                      <a
                        href="/brand"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Brand
                      </a>
                      <a
                        href="/news/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Publication (News & Event)
                      </a>
                      <a
                        href="/contact/index.html"
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        Dealer Network
                      </a>

                      {/* Contact Us with Sub-menu */}
                      <div className="relative group/contact">
                        <div className="px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                          Contact Us
                        </div>
                        <div className="hidden group-hover/contact:block absolute left-full top-0 -ml-2">
                          <div className="w-64 bg-white text-black rounded-lg shadow-lg py-2 ml-2">
                            <a
                              href="/"
                              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                            >
                              Customer Relationship
                            </a>
                            <a
                              href="/social-media"
                              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                            >
                              Social Media
                            </a>
                            <a
                              href="/career/index.html"
                              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                            >
                              Career
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden">
            <a href="/">
              <img className="h-6" src={logo} alt="Logo" />
            </a>
          </div>

          {/* CTA Buttons & Language Selector */}
          <div className="hidden md:flex gap-3 items-center">
            <a
              className="py-2.5 px-4 font-medium text-sm text-white text-center bg-red-600 transition-all hover:bg-red-700 rounded-xl whitespace-nowrap"
              href="/book-a-test-drive/index.html"
            >
              Book a Test Drive
            </a>
            <a
              className="py-2.5 px-4 font-medium text-sm text-center bg-white transition-all hover:bg-neutral-100 rounded-xl whitespace-nowrap"
              href="/request-price-list/index.html"
            >
              Request Price List
            </a>
            <button className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors">
              EN
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              onClick={handleMobileMenuClick}
              className="text-white transition-all"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isBigMenuOpen && (
        <div
          onMouseEnter={handleBigMenuMouseEnter}
          onMouseLeave={handleBigMenuMouseLeave}
        >
          <BigMenu />
        </div>
      )}
      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
}
